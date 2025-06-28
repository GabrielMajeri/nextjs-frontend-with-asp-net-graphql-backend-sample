const weatherApiUrl: string =
  process.env.WEATHER_API_URL ?? "http://localhost:5180";

type WeatherForecast = {
  date: string;
  summary: string;
  temperatureC: number;
  temperatureF: number;
};

type GetWeatherForecastResponse = WeatherForecast[];

export default async function WeatherForecastDisplay() {
  let errorMessage = "unknown error";

  let data: GetWeatherForecastResponse = [];
  try {
    console.log("Fetching weather forecast...");

    const response = await fetch(`${weatherApiUrl}/WeatherForecast`, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(
        `Error response: ${response.status} ${response.statusText}`,
      );
    }

    // Notice: no validation is performed for the shape of the returned data
    data = await response.json();
  } catch (e) {
    if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === "string") {
      errorMessage = e;
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Weather Forecast</h2>
      {data.length > 0 ? (
        <WeatherForecastTable forecasts={data} />
      ) : (
        <p className="text-red-500">Error while loading data: {errorMessage}</p>
      )}
    </div>
  );
}

function WeatherForecastTable({ forecasts }: { forecasts: WeatherForecast[] }) {
  return (
    <table>
      <thead>
        <tr className="border-b">
          <th className="px-1 border-r">Date</th>
          <th className="px-1 border-r">Summary</th>
          <th className="px-1">Temperature (Celsius)</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map((forecast) => (
          <tr key={forecast.date} className="text-center">
            <td className="border-r px-2 py-1">{forecast.date}</td>
            <td className="border-r px-2 py-1">{forecast.summary}</td>
            <td className="px-2 py-1">{forecast.temperatureC}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
