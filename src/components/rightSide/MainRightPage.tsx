import { EventData } from '../../types/TripsTypes'
import { WeatherData } from '../../types/WeatherTypes'
import { fahrenheitToCelsius } from '../leftSide/Items/ItemWeather'
import TimeToTripComponent from './TimeToTripComponent'
import './mainRightPage.css'
import { FC, useEffect, useState } from 'react'


export interface Timer {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

type Props = {
    trip: EventData | null | undefined
}



const MainRightPage: FC<Props> = ({ trip }) => {


    const { townName, dateStartTrip } = trip || {};

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const apiKey = 'UTGN7LA7B9RBAX8RRGMM96DWE&taskId=b30a512563e2dffe6ffa44e33fdd6b6d';
    const currentDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        if (townName && dateStartTrip) {
            const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${townName}/${currentDate}?key=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then((data: WeatherData) => {
                    setWeatherData(data);
                })
                .catch(error => {
                    console.error('Помилка при отриманні погодних даних:', error);
                });
        }
    }, [apiKey, currentDate, townName, dateStartTrip]);
    const getDayofWeek = () => {

        const today = new Date();

        const dayOfWeekNumber = today.getDay();

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return daysOfWeek[dayOfWeekNumber];
    }
    if (!weatherData) {
        return <div className="">Loading...</div>;
    }

    const temperature = weatherData.days[0].tempmax;
    const icon = weatherData.days[0].icon;
    const tempC = fahrenheitToCelsius(temperature)
    console.log(icon);
    return (
        <div className="mainRightBlock">
            <h4>{getDayofWeek()}</h4>
            <div className="d-flex">
                <div className="item-weather-img">
                    <img className="item-weather-img" src={`./images/${icon}.png`} />
                </div>
                <p>{tempC}<span className="celsiy-o">°</span><span className="celsiy-c">ᶜ</span></p>
            </div>

            <p>{townName}</p>
            <TimeToTripComponent dateStartTrip={dateStartTrip!} />
        </div>
    );
};
export default MainRightPage
