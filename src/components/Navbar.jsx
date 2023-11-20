import ScoreBoard from "./ScoreBoard";

function Navbar({ score, highScore }) {
  return (
    <nav className="navbar">
      <h1>Memory Test</h1>
      <p className="rule">Dont click the image more than once!!!</p>
      <ScoreBoard
        score={score}
        highScore={highScore}
      />
    </nav>
  );
}

export default Navbar;
