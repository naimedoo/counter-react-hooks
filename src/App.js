import './App.css';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const decrementMount = () => {
     setCount(count - 1);
  }
  const incrementMount = () => {
     setCount(count + 1);
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={decrementMount}>-</button>
    <button onClick={incrementMount}>+</button>
    </>
  )
}

export default App;
