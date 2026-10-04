interface SectionSkeletonProps {
  lines?: number;
}

const SectionSkeleton = ({ lines = 3 }: SectionSkeletonProps) => (
  <div className="animate-pulse space-y-3 rounded-2xl border border-brand-200 bg-white p-6">
    {Array.from({ length: lines }, (_, i) => (
      <div key={i} className="h-4 rounded bg-brand-100" style={{ width: `${90 - i * 15}%` }} />
    ))}
  </div>
);

export default SectionSkeleton;
