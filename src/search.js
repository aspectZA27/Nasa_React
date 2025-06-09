import React, { useState } from "react";
import "./search.css";

function Search() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [imgStyle, setImgStyle] = useState({
    maxWidth: "100vw",
    cursor: "pointer",
  });

  const fetchApod = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_NASA_API_KEY; // Don't expose in production!
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="container">
      <form onSubmit={fetchApod}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data && (
        <div className="apod-result">
          <img src={data.url} alt={data.title} style={imgStyle} />
          <h1>{data.title}</h1>
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
