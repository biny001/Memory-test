import { useState } from "react";
import CardItem from "./CardItem";

function CardContainer({
  score,
  charData,
  setCharData,
  setScore,
  setHighScore,
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
  return (
    <ul className="grid-container">
      {charData.map((char) => (
        <CardItem
          charInfo={char}
          key={char.id}
          handleClick={handleClick}
          clickCounts={clickCounts}
        />
      ))}

      <CardItem />
    </ul>
  );
}

export default CardContainer;
