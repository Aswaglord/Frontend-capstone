import { useState } from "react";

const SwapiQuery = () => {
  const [personId, setPersonId] = useState("");
  const [personData, setPersonData] = useState("");
  const [homeworldUrl, setHomeworldUrl] = useState("");
  const [homeworldData, setHomeworldData] = useState("");

  const getSwapiData = () => {
    fetch(`https://www.swapi.tech/api/people/${personId}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonData(data.result.properties);
        setHomeworldUrl(data.result.properties.homeworld);
      })
      .catch((err) => console.error("error getting swapi data: ", err));

    setHomeworldData("");
    setPersonData("");
  };

  const getSwapiHomeworld = () => {
    fetch(homeworldUrl)
      .then((res) => res.json())
      .then((data) => setHomeworldData(data.result.properties.name));
  };

  return (
    <div className="swapi-container">
      <div
        style={{ visibility: personData.height > 1 ? "visible" : "hidden" }}
        className="character-container"
      >
        <h1>Height: {personData.height}</h1>
        <h1>mass: {personData.mass}</h1>
        <h1>hair color: {personData.hair_color}</h1>
        <h1>skin color: {personData.skin_color}</h1>
        <h1>eye color: {personData.eye_color}</h1>
        <h1>birth year: {personData.birth_year}</h1>
        <h1>gender: {personData.gender}</h1>
        <h1>created: {personData.created}</h1>
        <h1>edited: {personData.edited}</h1>
        <h1>name: {personData.name}</h1>
      </div>

      <div
        style={{ visibility: homeworldData.length > 0 ? "visible" : "hidden" }}
      >
        <h1>Homeworld: {homeworldData}</h1>
      </div>
      <div className="input-container">
        <label htmlFor="">Enter a num (1-83): </label>
        <input
          type="text"
          onChange={(e) => {
            setPersonId(e.target.value);
          }}
        />
        <div>
          <button onClick={() => getSwapiData()}>display Data</button>
          <button
            disabled={homeworldUrl.length > 0 ? false : true}
            onClick={() => getSwapiHomeworld()}
          >
            Homeworld Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapiQuery;
