import { FC } from 'react'
import { parseISO, getDay } from 'date-fns';


type Props = {
    dateTime: string,
    icon: string,
    tempMax: number,
    tempMin: number,
}
export const fahrenheitToCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1)
}
const ItemWeather: FC<Props> = ({ dateTime, icon, tempMax, tempMin }) => {
    const dateOfWeek = () => {
        const date = parseISO(dateTime);
        const dayOfWeek = getDay(date);

        const dayOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return dayOfWeekNames[dayOfWeek]
    }

    console.log(`../../images/${icon}.png`)
    return (
        <div className="item-weather">
            <p>{dateOfWeek()}</p>
            <div className="item-weather-img">
                <img className="item-weather-img" src={`./images/${icon}.png`} />
            </div>
            <p>{fahrenheitToCelsius(tempMax)}° / {fahrenheitToCelsius(tempMin)}°</p>
        </div>
    )
}

export default ItemWeather
