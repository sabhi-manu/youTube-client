const DashboardSkeleton = () => {
  return (
    <div className="p-6 animate-pulse">
      {/* Header */}
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="h-20 bg-gray-300 rounded-lg"></div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg p-4 space-y-3">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="h-10 bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkeleton;