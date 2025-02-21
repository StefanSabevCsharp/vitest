import useCount from "../../hooks/useCount";

export default function Counter() {
    const { count, increment, decrement } = useCount();

  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="counter">{count}</p>
      <button onClick={increment} style={{marginRight : "2em"}}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    
  );
}