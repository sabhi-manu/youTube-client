const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <p className="text-red-500 text-lg mb-4">⚠️ {message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorState;