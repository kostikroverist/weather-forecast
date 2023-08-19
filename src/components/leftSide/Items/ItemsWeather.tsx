import { EventData } from "../../../types/TripsTypes"
import { DayData } from "../../../types/WeatherTypes"
import ItemWeather from "./ItemWeather"
import { FC, useState, useEffect } from 'react'

type Props = {
    trip: EventData | null | undefined
}

const urlKey: string = 'key=UTGN7LA7B9RBAX8RRGMM96DWE&taskId=b30a512563e2dffe6ffa44e33fdd6b6d'

const ItemsWeather: FC<Props> = ({ trip }) => {
    const { townName, dateStartTrip, dateEndTrip } = trip || {};

    const [weatherData, setWeatherData] = useState<DayData[]>();

    useEffect(() => {
        const urlWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${townName}/${dateStartTrip}/${dateEndTrip}?`

        const request = urlWeather + urlKey;
        console.log(request)
        fetch(request)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data.days);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [townName, dateStartTrip, dateEndTrip]);



    return (
        <div className="weather-container">
            {weatherData ? (
                weatherData.map(day => (
                    <ItemWeather
                        key={day.datetime}
                        dateTime={day.datetime}
                        tempMax={day.tempmax}
                        tempMin={day.tempmin}
                        icon={day.icon}
                    />
                ))
            ) : (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
        </div>
    );
};

export default ItemsWeather;