"use server";

type WeatherForecast = {
  date: string;
  summary: string;
  temperatureC: number;
  temperatureF: number;
};

type GetWeatherForecastResponse = WeatherForecast[];

async function WeatherForecastDisplay() {
  const response = await fetch("http://localhost:5180/WeatherForecast", {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    return (
      <div>
        <h2>Weather Forecast</h2>
        <p>Error while loading data: {response.status}</p>
      </div>
    );
  }

  // Notice: no validation is performed for the shape of the returned data
  const body: GetWeatherForecastResponse = await response.json();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Weather Forecast</h2>
      <table>
        <thead>
          <tr className="border-b">
            <th className="px-1 border-r">Date</th>
            <th className="px-1 border-r">Summary</th>
            <th className="px-1">Temperature (Celsius)</th>
          </tr>
        </thead>
        <tbody>
          {body.map((forecast) => (
            <tr key={forecast.date} className="text-center">
              <td className="border-r px-2 py-1">{forecast.date}</td>
              <td className="border-r px-2 py-1">{forecast.summary}</td>
              <td className="px-2 py-1">{forecast.temperatureC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function Home() {
  return (
    <main className="h-screen flex flex-row justify-center items-center">
      <WeatherForecastDisplay />
    </main>
  );
}
