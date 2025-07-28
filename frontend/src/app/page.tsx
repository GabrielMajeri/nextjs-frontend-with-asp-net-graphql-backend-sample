import { Suspense } from "react";
import WeatherForecastDisplay from "./components/weather-forecast-display";
import RefreshButton from "./components/refresh-button";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <WeatherForecastDisplay />
      <RefreshButton />
    </main>
  );
}
