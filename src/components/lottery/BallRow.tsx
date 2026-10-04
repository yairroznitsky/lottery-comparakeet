import type { ParsedBalls } from "@/types/lottery";

interface BallRowProps {
  balls: ParsedBalls;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-7 min-w-7 px-0.5 text-xs",
  md: "h-9 min-w-9 px-0.5 text-sm",
  lg: "h-11 min-w-11 px-1 text-base",
};

const BallRow = ({ balls, size = "md", className = "" }: BallRowProps) => {
  const ballClass = sizeClasses[size];

  if (balls.main.length === 0 && balls.bonus.length === 0) {
    return (
      <span className="text-sm italic text-brand-500">Results pending</span>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 ${className}`}
      role="group"
      aria-label="Winning numbers"
    >
      {balls.main.map((n) => (
        <span
          key={`m-${n}`}
          className={`inline-flex items-center justify-center rounded-full bg-gradient-to-b from-brand-500 to-brand-700 font-bold text-white shadow-sm ring-1 ring-brand-600/30 ${ballClass}`}
        >
          {n}
        </span>
      ))}
      {balls.bonus.length > 0 ? (
        <>
          <span className="px-0.5 text-sm font-semibold text-brand-500" aria-hidden>
            +
          </span>
          {balls.bonus.map((n) => (
            <span
              key={`b-${n}`}
              className={`inline-flex items-center justify-center rounded-full bg-gradient-to-b from-amber-400 to-amber-600 font-bold text-white shadow-sm ring-1 ring-amber-600/30 ${ballClass}`}
            >
              {n}
            </span>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default BallRow;
