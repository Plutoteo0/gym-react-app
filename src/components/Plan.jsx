export default function Plan({
  plan,
  removeFromPlan,
  isOpen,
  toggleOpen,
  clearPlan,
}) {
  return (
    <>
      <div className="max-w-sm mx-auto mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={toggleOpen}
            className="bg-blue-500 text-white px-4 py-2 rounded hover: bg-blue-600"
          >
            {isOpen ? "Hide Plan" : "Show Plan"}
          </button>
        </div>
        <button
          onClick={() => {
            clearPlan();
          }}
          className={`px-3 py-1 rounded ${
            plan.length
              ? "bg-red-500 text-white hover:bg-red-700 transition-colors"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {plan.length ? "Clear plan" : "No exercises added yet"}
        </button>
        <h2 className="text-lg font-bold mb-3">
          Training plan: {plan.length}{" "}
          {plan.length === 1 ? "exercise" : "exercises"}
        </h2>
        {isOpen && (
          <ul className="flex flex-col gap-3 max-h-64 overflow-auto">
            {plan.map((p) => (
              <li
                key={p.id}
                className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
              >
                <span>{p.exercise}</span>
                <button
                  onClick={() => removeFromPlan(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
