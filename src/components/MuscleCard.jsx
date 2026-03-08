export default function ({ onClick, muscle }) {
  return (
    <>
      <div className="card bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 shadow-sm p-0.5 mb-2.5">
        <figure className="sm:px-6 md:px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{muscle.name}</h2>
          <div className="card-actions">
            <button
              className="btn backdrop-blur-2xl bg-pink-300 hover:bg-purple-500  transition duration-400 rounded-2xl p-1.5 mb-1 hover:scale-105"
              onClick={() => onClick(muscle)}
            >
              Explore excercises
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
