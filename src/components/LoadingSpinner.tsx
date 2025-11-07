const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="loading weather-card p-6 max-w-lg w-full h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;