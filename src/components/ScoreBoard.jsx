function ScoreBoard({ score, highScore }) {
  return (
    <div className="stats">
      <p>Score:{score}</p>
      <p>highscore:{highScore}</p>
    </div>
  );
}

export default ScoreBoard;
