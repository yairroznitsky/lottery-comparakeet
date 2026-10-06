interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

const StarRating = ({ rating, max = 5, className = "" }: StarRatingProps) => {
  const clamped = Math.min(max, Math.max(0, rating));
  const wholeStars = Math.floor(clamped);
  const remainder = clamped - wholeStars;
  const roundUpToFull = remainder >= 0.85 ? 1 : 0;
  const fullStars = Math.min(max, wholeStars + roundUpToFull);
  const hasHalf =
    roundUpToFull === 0 && remainder >= 0.25 && remainder < 0.85;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={`Rated ${clamped} out of ${max}`}
    >
      <span className="inline-flex text-amber-500" aria-hidden>
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {hasHalf ? <span className="text-amber-400">★</span> : null}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="text-brand-200">
            ★
          </span>
        ))}
      </span>
      <span className="text-sm font-semibold tabular-nums text-brand-900">
        {clamped.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
