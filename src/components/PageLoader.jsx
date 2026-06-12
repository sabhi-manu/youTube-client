// src/components/PageLoader.jsx

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-red-500"></div>
    </div>
  );
};

export default PageLoader;