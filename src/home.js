import React from "react";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to AstroLens</h1>
      <p>
        Explore the wonders of space with our Astronomy Picture of the Day
        (APOD) feature.
      </p>
      <p>Use the search feature to find images from specific dates.</p>
      <p>Enjoy your journey through the cosmos!</p>
      <br />
      <h2>How to Use:</h2>
      <ul>
        <li>
          <strong>Search APOD:</strong> Enter a date to find the Astronomy
          Picture of the Day for that date.
        </li>
        <li>
          <strong>APOD:</strong> View the latest Astronomy Picture of the Day.
        </li>
      </ul>
      <h3>Disclaimer:</h3>
      <p>
        This is a demo application. The NASA API key is not secure and should
        not be used in production. Please obtain your own API key from{" "}
        <a href="https://api.nasa.gov/">NASA's API portal</a> for any real
        applications.
      </p>
    </div>
  );
}

export default Home;
