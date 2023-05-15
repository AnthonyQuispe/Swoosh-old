import "./GoogleInfoModal.scss";

const GoogleInfoModal = ({ onStartGame }) => {
  const handleStartGame = (event) => {
    event.preventDefault();
    onStartGame();
  };

  return (
    <form className="google-info">
      <h3 className="google-info__header">Choose</h3>
      <div className="google-info__players">
        <p className="google-info__text">Players</p>
        <input
          type="number"
          name="Players1"
          id="Players1"
          className="google-info__players--input"
          required
          min={1}
          placeholder="1"
        />
        <p className="google-info__text">vs </p>
        <input
          type="number"
          name="Players2"
          id="Players2"
          className="google-info__players--input"
          required
        />
      </div>
      <div className="google-info__players">
        <p className="google-info__countdown">Countdown </p>
        <input
          type="number"
          name="Players"
          id="Players"
          className="google-info__players--input"
          required
        />
        <p className="google-info__countdown">min</p>
      </div>
      <div className="google-info__skill">
        <p className="google-info__skill">Skill Level </p>
        <select className="google-info__select">
          <option value="">Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Elite">Elite</option>
        </select>
      </div>
      <button className="google-info__start" onClick={handleStartGame}>
        Start Game
      </button>
    </form>
  );
};

export default GoogleInfoModal;
