interface PageErrorStateProps {
  error: unknown;
  onRetry?: () => void;
}

const PageErrorState = ({ error, onRetry }: PageErrorStateProps) => {
  const message =
    error instanceof Error
      ? error.message
      : "Something went wrong while loading content.";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-lg rounded-xl border border-red-200 bg-red-50 p-6 text-red-950">
        <h1 className="font-display text-xl font-semibold">
          Could not load content
        </h1>
        <p className="mt-2 text-sm text-red-900/90">{message}</p>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-4 rounded-md bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-900"
          >
            Try again
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PageErrorState;
