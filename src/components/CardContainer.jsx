import { useState } from "react";
import CardItem from "./CardItem";
import Result from "./Result";

function CardContainer({
  score,
  charData,
  setCharData,
  setScore,
  setHighScore,
  setResult,
  result,
}) {
  const [clickCounts, setClickCounts] = useState({});

  function handleClick(charId) {
    setClickCounts((prevcounts) => ({
      ...prevcounts,
      [charId]: (prevcounts[charId] || 0) + 1,
    }));

    setScore((prev) => {
      const currentClickCount = clickCounts[charId] || 0;

      if (currentClickCount < 1) {
        return prev + 1;
      } else {
        setResult(true);

        setHighScore((prevScore) => {
          if (score >= prevScore) {
            return score;
          } else {
            return prevScore;
          }
        });

        setClickCounts({});
        return 0;
      }
    });

    setCharData((prevdata) => {
      return prevdata.toSorted(() => Math.random() - 0.5);
      // const shuffledData = [...prevdata].sort(() => Math.random() - 0.5);
      // return shuffledData;
    });
  }
  return result || score == 12 ? (
    <Result
      score={score}
      setResult={setResult}
      setScore={setScore}
    />
  ) : (
    <ul className="grid-container">
      {charData.map((char) => (
        <CardItem
          charInfo={char}
          key={char.id}
          handleClick={handleClick}
          clickCounts={clickCounts}
        />
      ))}
    </ul>
  );
}

export default CardContainer;
