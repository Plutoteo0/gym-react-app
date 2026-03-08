export default function Plan({ plan, removeFromPlan, isOpen, toggleOpen }) {
  return (
    <>
      <div>
        <button onClick={toggleOpen}>Click to see your plan</button>
      </div>
      <div>
        {isOpen && (
          <ul>
            {plan.map((p) => (
              <li key={p.id}>
                {p.exercise}
                <button onClick={() => removeFromPlan(p.id)}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
