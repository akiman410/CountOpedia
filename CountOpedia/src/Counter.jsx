import { useState } from "react";
import attackImg from "./images/attack.png";
import defenseImg from "./images/defend.png";

function Counter() {
  const [gameState, setGameState] = useState({
    count: 0,
    gameStatus: "",
  });

  function handleIncrement() {
    const newCount = gameState.count + 1;
    const status =
      newCount >= 5 ? "You Won!!" : newCount <= -5 ? "You Lost!!" : "";
    setGameState({ count: newCount, gameStatus: status });
  }

  function handleDecrement() {
    const newCount = gameState.count - 1;
    const status =
      newCount <= -5 ? "You Lost!!" : newCount >= 5 ? "You Won!!" : "";
    setGameState({ count: newCount, gameStatus: status });
  }

  function handleRandomPlay() {
    const playMode = Math.round(Math.random());
    if (playMode == 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  }
  function handleReset() {
    setGameState({ count: 0, gameStatus: "" });
  }
  function handleLog() {
    console.log(gameState.count, gameState.gameStatus);
  }

  return (
    <div className="container">
      <div className="row text-white text-center">
        <h1>Game Score : {gameState.count}</h1>
        <p>You win at +5 points and lose at -5 points</p>
        {gameState.gameStatus.length > 0 && (
          <h3>Game Status :{gameState.gameStatus} </h3>
        )}

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
