import "./styles.css";
import Search from "./Search";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1> Weather App </h1>
      <Search city="Berlin" />
      <footer>
        This project was coded by Shanay Hazell and is {""}
        <a
          href="https://github.com/ShanayH/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        {/* later you can add a src to your personal page as well */}
      </footer>
    </div>
  );
}
