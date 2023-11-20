function Result({ setResult, score, setScore }) {
  function handleResult() {
    setResult(false);
    setScore(0);
  }
  return (
    <div className="result">
      {score >= 12 ? <p>You won 🎉</p> : <p>Game over retry 💔 </p>}

      <button onClick={handleResult}>New Game</button>
    </div>
  );
}

export default Result;
