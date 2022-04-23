import { useState } from "react";

const Eval = () => {
  const [answer, setAnswer] = useState(null);
  const [expression, setExpression] = useState(null);

  const handleExpression = () => {
    setAnswer(eval(expression));
  };

  return (
    <div className="eval-container">
      <h1>{answer}</h1>
      <input
        type="text"
        onChange={(event) => setExpression(event.target.value)}
      />
      <button onClick={() => handleExpression()}>Solve</button>
    </div>
  );
};

export default Eval;
