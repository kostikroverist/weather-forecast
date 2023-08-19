import { EventData } from "../../types/TripsTypes"
import HeaderComponent from "./HeaderComponent"
import ItemsWeather from "./Items/ItemsWeather"
import { FC } from 'react'

type Props = {
    trip: EventData | null | undefined
}

const WeekWeatherTripComponent: FC<Props> = ({ trip }) => {
    return (
        <div>
            <HeaderComponent title="Week" />
            <ItemsWeather trip={trip} />
        </div>
    )
}

export default WeekWeatherTripComponent
