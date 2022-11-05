import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerFn = setInterval(() => setTimer((timer) => timer + 1), 1000);

    return () => {
      clearInterval(timerFn);
    };
  }, []);

  const onIncrement = (event) => {
    setCounter((counter) => counter + 1);
  };
  const onDecrement = (event) => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="App">
      <span>Counter: {counter}</span>
      <div className="change-counter">
        <button onClick={onIncrement}>Increment</button>
        {counter !== 0 && <button onClick={onDecrement}>Decrement</button>}
      </div>

      <div>
        <span>Timer : {timer} Sec</span>
      </div>
    </div>
  );
}
