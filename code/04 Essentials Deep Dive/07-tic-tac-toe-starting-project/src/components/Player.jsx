import { useState } from "react";

export default function Player({ initialName, symbol }) {
  let [playerName, setPlayerName] = useState(initialName);
  let [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    // example of two-way binding
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}