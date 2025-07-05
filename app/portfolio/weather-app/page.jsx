export default function WeatherAppRedirect() {
  return (
    <iframe
      src="https://ernstudy.github.io/weather-app"
      width="100%"
      height="100%"
      style={{
        border: "none",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        scrollbarWidth: "none",
        zIndex: 9999,
      }}
      title="Weather App"
    />
  );
}
