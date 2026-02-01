const StatCard = ({ icon, label, value }) => (
  <div className="bg-[#111] border border-gray-800 rounded-lg p-5">
    <div className="text-purple-500 text-xl mb-2">{icon}</div>
    <p className="text-sm text-gray-400">{label}</p>
    <h3 className="text-2xl font-semibold mt-1">
      {value.toLocaleString()}
    </h3>
  </div>
);

export default StatCard