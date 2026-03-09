import MuscleCard from "./components/MuscleCard";
import { muscles } from "./data/muscles";
import { useState, useEffect } from "react";
import Excercises from "./components/Excercises";
import Plan from "./components/Plan";

function App() {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const [plan, setPlan] = useState(() => {
    const savedPlan = localStorage.getItem("plan");
    return savedPlan ? JSON.parse(savedPlan) : [];
  });

  useEffect(() => {
    localStorage.setItem("plan", JSON.stringify(plan));
  }, [plan]);

  const [isOpen, setIsOpen] = useState(false);

  const addToPlan = (exercise) => {
    setPlan((prevPlan) => [...prevPlan, { exercise, id: Date.now() }]);
  };

  const removeFromPlan = (id) => {
    setPlan((prevPlan) => prevPlan.filter((e) => e.id !== id));
  };

  const handleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const Close = () => {
    setSelectedMuscle(null);
  };

  const clearPlan = () => {
    setPlan([]);
  };

  return (
    <>
      <div>
        <Plan
          plan={plan}
          removeFromPlan={removeFromPlan}
          muscleExercise={muscles}
          isOpen={isOpen}
          toggleOpen={() => setIsOpen(!isOpen)}
          clearPlan={clearPlan}
        />
      </div>
      <div className="p-8 flex flex-wrap justify-center gap-6">
        {muscles.map((m) => (
          <MuscleCard key={m.id} muscle={m} onClick={handleClick} />
        ))}
      </div>
      {selectedMuscle && (
        <Excercises
          muscle={selectedMuscle}
          Close={Close}
          addToPlan={addToPlan}
          plan={plan}
        />
      )}
    </>
  );
}

export default App;
