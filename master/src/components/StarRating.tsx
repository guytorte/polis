import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export function StarRating({ rating, maxRating = 5, size = 16 }: StarRatingProps) {
  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of ${maxRating}`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'star-filled fill-current' : 'star-empty'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
