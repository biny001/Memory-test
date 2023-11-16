function CardItem({ charInfo, handleClick, clickCounts }) {
  if (!charInfo) return;
  return (
    <li
      className="card"
      onClick={() => handleClick(charInfo.id)}
    >
      <img
        src={charInfo.image}
        alt="Image 1"
      />
      <div className="description">
        <p>{charInfo?.name}</p>
        {/* <p>{clickCounts[charInfo.id]}</p> */}
      </div>
    </li>
  );
}

export default CardItem;
