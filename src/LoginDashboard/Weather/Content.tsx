import axios from "axios";
import { useState } from "react";

interface WeatherData {
  name: string;

  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
  weather?: {
    id: number;
    main: string;
  }[];
}

const Content = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d2a6cd8f12ced07af50d7fc9ad266a99`;

  const searchLocation = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setLocation("");
    }
  };

  return (
    <>
      <div className="bg-[url('./assets/clouds.jpg')] bg-no-repeat bg-cover h-screen">
        <div className="p-2 flex items-center justify-center">
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            className="p-2 bg-white rounded-3xl shadow-2xl"
          />
        </div>
        <div className="text-white flex flex-col h-full justify-between ">
          <div className="p-4">
            <div>
              <p className="text-2xl">
                {data?.name ? data.name : "Location not found"}
              </p>
            </div>
            <div>
              <h1 className="text-8xl font-bold">
                {data?.main?.temp.toFixed()}℉
              </h1>
            </div>
             <div className="float-right">
              <p className="text-xl relative transition-transform rotate-90">
                {data?.weather ? <p>{data.weather[0].main}</p> : null}
              </p>
            </div>
          </div>
          <div className="flex justify-center p-2 mb-14">
            <div className="p-4 w-96 flex items-center justify-center gap-6 bg-white backdrop-brightness-10 bg-opacity-10 rounded-2xl ">
              <div>
                <p className="text-2xl font-bold">
                  {data?.main?.feels_like.toFixed()}℉
                </p>
                <p>Feels like</p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {data?.main?.humidity.toFixed()}%{" "}
                </p>
                <p>Humidity</p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {data?.wind?.speed.toFixed()}MPH
                </p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
