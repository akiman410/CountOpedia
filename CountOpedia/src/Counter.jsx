import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(function (prev) {
      return prev + 1;
    });
    console.log(count);
  }

  function handleDecrement() {
    setCount((prev) => {
      return prev - 1;
    });
    console.log(count);
  }
  return (
    <div className="row text-white container">
      <div>Counter : {count}</div>
      <button onClick={handleIncrement} className="btn btn-success m-2">
        +1
      </button>
      <button onClick={handleDecrement} className="btn btn-danger m-2">
        -1
      </button>
    </div>
  );
}

export default Counter;
