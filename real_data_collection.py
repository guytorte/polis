"""
Script to collect real data from Câmara dos Deputados API
for the Brazil Budget Amendment Analysis Project.
"""

import requests
import csv
from datetime import datetime
import time

def get_all_deputies():
    """
    Fetch all deputies from the Câmara API with pagination
    """
    deputies = []
    page = 1
    
    while True:
        url = f"https://dadosabertos.camara.leg.br/api/v2/deputados?pagina={page}&itens=1000"
        response = requests.get(url)
        
        if response.status_code != 200:
            print(f"Error fetching deputies page {page}: {response.status_code}")
            break
            
        data = response.json()
        page_deputies = data.get('dados', [])
        
        if not page_deputies:
            break
            
        deputies.extend(page_deputies)
        print(f"Fetched {len(page_deputies)} deputies from page {page}")
        
        # Move to next page
        page += 1
        
        # Be respectful to the API
        time.sleep(0.5)
    
    print(f"Total deputies collected: {len(deputies)}")
    return deputies

def get_votes_for_propositions(proposition_ids):
    """
    Fetch votes for specific propositions
    """
    votes = []
    
    for prop_id in proposition_ids[:5]:  # Limit to first 5 for initial collection
        print(f"Fetching votes for proposition {prop_id}")
        
        # Get the proposition details first
        prop_url = f"https://dadosabertos.camara.leg.br/api/v2/proposicoes/{prop_id}"
        prop_response = requests.get(prop_url)
        
        if prop_response.status_code == 200:
            prop_data = prop_response.json().get('dados', {})
            prop_info = {
                'id': prop_data.get('id'),
                'sigla_tipo': prop_data.get('siglaTipo'),
                'numero': prop_data.get('numero'),
                'ano': prop_data.get('ano'),
                'ementa': prop_data.get('ementa')
            }
            
            # Then get related votes
            # NOTE: The API doesn't allow filtering votacoes by UFs directly
            # We'll fetch recent votacoes and filter by deputy later
            votacoes_url = f"https://dadosabertos.camara.leg.br/api/v2/proposicoes/{prop_id}/votacoes"
            votacoes_response = requests.get(votacoes_url)
            
            if votacoes_response.status_code == 200:
                votacoes_data = votacoes_response.json().get('dados', [])
                
                for votacao in votacoes_data:
                    # Get detailed voting records for this votacao
                    votacao_detalhe_url = f"https://dadosabertos.camara.leg.br/api/v2/votacoes/{votacao['id']}/votos"
                    detalhe_response = requests.get(votacao_detalhe_url)
                    
                    if detalhe_response.status_code == 200:
                        detalhe_data = detalhe_response.json().get('dados', [])
                        
                        for voto in detalhe_data:
                            # Only include if it's a deputy record
                            if 'deputado' in voto:
                                vote_record = {
                                    'id_votacao': votacao['id'],
                                    'data_votacao': votacao.get('data'),
                                    'descricao_votacao': votacao.get('descricao'),
                                    'proposicao_id': prop_info['id'],
                                    'proposicao_sigla': prop_info['sigla_tipo'],
                                    'proposicao_numero': prop_info['numero'],
                                    'proposicao_ano': prop_info['ano'],
                                    'proposicao_ementa': prop_info['ementa'],
                                    'deputado_id': voto['deputado'].get('id'),
                                    'deputado_nome': voto['deputado'].get('nome'),
                                    'deputado_partido': voto['deputado'].get('siglaPartido'),
                                    'deputado_uf': voto['deputado'].get('siglaUf'),
                                    'voto': voto.get('tipoVoto')
                                }
                                votes.append(vote_record)
        
        # Be respectful to the API
        time.sleep(0.5)
    
    return votes

def save_to_csv(data, filename):
    """
    Save data to CSV file
    """
    if not data:
        print(f"No data to save for {filename}")
        return
    
    fieldnames = data[0].keys()
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
    
    print(f"Saved {len(data)} records to {filename}")

def main():
    print("Starting real data collection...")
    
    # Collect deputies information
    print("Collecting deputies data...")
    deputies = get_all_deputies()
    
    # Extract proposition IDs from deputies' activities
    # For now, we'll use a sample of recent propositions
    sample_propositions = list(range(104333, 104343))  # Sample range of proposition IDs
    
    # Collect votes data
    print("Collecting votes data...")
    votes = get_votes_for_propositions(sample_propositions)
    
    # Save data to CSV files
    save_to_csv(deputies, 'deputies.csv')
    save_to_csv(votes, 'votes_real.csv')
    
    print("Data collection completed!")

if __name__ == "__main__":
    main()