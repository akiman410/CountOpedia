import { useEffect, useState } from "react";
import attackImg from "./images/attack.png";
import defenseImg from "./images/defend.png";

function Counter() {
  const [count, setCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  function handleIncrement() {
    const newValue = count + 1;
    setCount(newValue);
    // if (count >= 5) {
    //   setGameStatus("You Won!");
    // } else {
    //   setGameStatus(" ");
    // }
  }
  function handleDecrement() {
    const newValue = count - 1;
    setCount(newValue);
    // if (count <= -5) {
    //   setGameStatus("You Lost!");
    // } else {
    //   setGameStatus(" ");
    // }
  }
  useEffect(() => {
    if (count <= -5) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGameStatus("You Lost!");
    } else if (count >= 5) {
      setGameStatus("You Won!");
    } else {
      setGameStatus("");
    }
  }, [count]);

  function handleRandomPlay() {
    const playMode = Math.round(Math.random());
    if (playMode == 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  }
  function handleReset() {
    setCount(0);
    setGameStatus("");
  }
  function handleLog() {
    console.log(count);
  }

  return (
    <div className="container">
      <div className="row text-white text-center">
        <h1>Game Score : {count}</h1>
        <p>You win at +5 points and lose at -5 points</p>
        {gameStatus.length > 0 && <h3>Game Status :{gameStatus} </h3>}

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attackImg}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={handleIncrement}
          ></img>
        </div>
        <div className="col-6 col-md-3 offset-md-0">
          <img
            src={defenseImg}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={handleDecrement}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            onClick={handleRandomPlay}
            className="btn btn-success m-2 w-100"
          >
            Random Play
          </button>
          <button onClick={handleReset} className="btn btn-danger m-2 w-100">
            Reset
          </button>
          <button onClick={handleLog} className="btn btn-warning m-2 w-100">
            Log
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
