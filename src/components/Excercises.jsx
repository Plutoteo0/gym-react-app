export default function Excercises({ muscle, Close, addToPlan, plan }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="flex flex-col bg-white w-80 p-6 rounded-lg shadow">
          <header className="flex justify-between items-center">
            <h1>{`${muscle.name} excercises`}</h1>
            <h1 onClick={() => Close()} className="text-right">
              X
            </h1>
          </header>
          <div className="flex flex-col space-y-2 overflow-y-auto p-2 bg-gray-100 rounded">
            {muscle.excercises.map((e, i) => (
              <div key={i}>
                <span className="flex justify-between items-center">
                  {e}
                  <button
                    onClick={() => addToPlan(muscle.name + ": " + e)}
                    className="btn cursor-pointer bg-green-500 bg-opacity-70 hover:bg-green-700 text-white rounded-lg p-1.5 transition duration-300 hover:scale-105"
                  >
                    Add to plan
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
