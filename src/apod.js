import React, { useEffect, useState } from "react";
import "./apod.css";

function Apod() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const apiKey = process.env.REACT_APP_NASA_API_KEY; // Ensure this is set in your .env file

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch APOD");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, [apiKey]);

  return (
    <div className="apod-container">
      <h1>APOD</h1>
      <p>Below you can find the APOD (ASTRONAMY PICTURE OF THE DAY)</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div className="apod-result">
          <h2>{data.title}</h2>
          {data.media_type === "image" ? (
            <img src={data.url} alt={data.title} />
          ) : (
            <iframe
              title="APOD Video"
              src={data.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", minHeight: 400 }}
            />
          )}
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Apod;
