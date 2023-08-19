import useTrips from "../../hooks/useTrips"
import { EventData } from "../../types/TripsTypes"
import MainRightPage from "../rightSide/MainRightPage"
import HeaderComponent from "./HeaderComponent"
import ItemsTrip from "./Items/ItemsTrip"
import SearchComponent from "./SearchComponent"
import WeekWeatherTripComponent from "./WeekWeatherTripComponent"
import './mainLeftPage.css'
import { ChangeEvent, useState } from "react"

const MainLeftPage = () => {
    const { eventDataList, addTrip, closeModal, openModal, modalIsOpen, isLoading } = useTrips();
    const [trip, setTrip] = useState<EventData | null>();
    const [value, setValue] = useState<string>('');


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }


    const handleItemClick = (id: string | undefined) => {
        setTrip(eventDataList.find((el) => el.id === id))

    };

    const searchFilterEvent = eventDataList.filter((el) => el.townName.toLowerCase().includes(value.toLowerCase()))

    return (
        <>
            <div className="main-left-block ">
                <HeaderComponent title="Weather Forecast" />
                <SearchComponent placeholder="Search your trip" value={value} onChangeHandler={onChangeHandler} />
                <ItemsTrip handleItemClick={handleItemClick} eventDataList={searchFilterEvent} isLoading={isLoading} addTrip={addTrip} closeModal={closeModal} openModal={openModal} modalIsOpen={modalIsOpen} />
                <WeekWeatherTripComponent trip={trip} />
            </div>
            <MainRightPage trip={trip} />
        </>
    )
}

export default MainLeftPage
