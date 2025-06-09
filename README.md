# AstroLens 🚀

A React web app to explore NASA's Astronomy Picture of the Day (APOD).  
Search for APOD images by date, view today's image, and enjoy a space-themed UI!

## Features

- 🌌 View the Astronomy Picture of the Day (APOD)
- 🔎 Search for APOD images by any date
- 🖼️ Responsive, modern, and space-inspired design
- ⚛️ Built with React and NASA's public API

## Demo

[Live on GitHub Pages](https://aspectZA27.github.io/Nasa_React)

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/apsectZA27/Nasa_React.git
cd Nasa_React
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up your NASA API key

Create a `.env` file in the project root:

```
REACT_APP_NASA_API_KEY=your_nasa_api_key_here
```

You can get a free API key from [https://api.nasa.gov/](https://api.nasa.gov/).

### 4. Start the development server

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build and Deploy

To build for production:

```sh
npm run build
```

To deploy to GitHub Pages:

```sh
npm run deploy
```

---

## Project Structure

```
src/
  ├── App.js
  ├── home.js
  ├── search.js
  ├── apod.js
  ├── App.css
  ├── search.css
  ├── apod.css
  └── ...
public/
  └── index.html
.env
```

---

## Security Note

- **Never commit your `.env` file or API keys to public repositories.**
- This project uses NASA's demo API key for learning purposes only.

---

## License

MIT

---

## Credits

- [NASA APOD API](https://api.nasa.gov/)
- [React](https://react.dev/)
- UI inspired by the cosmos ✨

---

Enjoy exploring the universe! 🌠
