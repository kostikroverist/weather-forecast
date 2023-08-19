import { FC } from "react";
import ItemTrip from "./ItemTrip"
import { EventData } from "../../../types/TripsTypes";
import AddNewItems from "./AddNewItems";


type Props = {
    eventDataList: EventData[]
    isLoading: boolean,
    addTrip: (eventData: EventData) => void
    closeModal: () => void
    openModal: () => void
    modalIsOpen: boolean
    handleItemClick: (id: string | undefined) => void
}

const ItemsTrip: FC<Props> = ({ addTrip, closeModal, openModal, modalIsOpen, eventDataList, isLoading, handleItemClick }) => {


    return (
        <div className="items-container scrollable-container">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                eventDataList.map((item) => (
                    <ItemTrip
                        id={item.id}
                        key={item.id}
                        townName={item.townName}
                        dateStartTrip={item.dateStartTrip}
                        dateEndTrip={item.dateEndTrip}
                        img={item.img}
                        onItemClick={handleItemClick}
                    />
                ))

            )
            }
            <AddNewItems addTrip={addTrip} closeModal={closeModal} openModal={openModal} modalIsOpen={modalIsOpen} />

        </div>
    );
};

export default ItemsTrip
