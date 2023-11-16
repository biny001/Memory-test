import ScoreBoard from "./ScoreBoard";

function Navbar({ score, highScore }) {
  return (
    <nav className="navbar">
      <h1>Memory Test</h1>
      <ScoreBoard
        score={score}
        highScore={highScore}
      />
    </nav>
  );
}

export default Navbar;
