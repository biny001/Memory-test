import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Result from "./components/Result";

export default function App() {
  const [charData, setCharData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);
  const [result, setResult] = useState(false);

  useEffect(function () {
    async function GetCharData() {
      try {
        const res = await fetch(
          "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]"
        );
        const data = await res.json();

        setCharData(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    GetCharData();
  }, []);

  return (
    <div>
      <Navbar
        score={score}
        highScore={highScore}
      />

      <CardContainer
        charData={charData}
        setCharData={setCharData}
        setScore={setScore}
        setHighScore={setHighScore}
        score={score}
        setResult={setResult}
        result={result}
      />
    </div>
  );
}
