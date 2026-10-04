const PageLoadingState = () => {
  return (
    <div
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="max-w-3xl animate-pulse space-y-4">
        <div className="h-4 w-24 rounded bg-brand-200" />
        <div className="h-10 w-3/4 rounded bg-brand-200" />
        <div className="h-4 w-40 rounded bg-brand-200" />
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full rounded bg-brand-100" />
          <div className="h-4 w-full rounded bg-brand-100" />
          <div className="h-4 w-5/6 rounded bg-brand-100" />
        </div>
      </div>
      <span className="sr-only">Loading content…</span>
    </div>
  );
};

export default PageLoadingState;
