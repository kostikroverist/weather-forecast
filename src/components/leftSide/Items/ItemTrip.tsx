import { FC } from 'react'
import './itemTrip.css'


type PropsItem = {
    id: string | undefined;
    townName: string,
    img: string,
    dateStartTrip: string,
    dateEndTrip: string,
    onItemClick: (id: string | undefined) => void;
}
const ItemTrip: FC<PropsItem> = ({ townName, dateStartTrip, dateEndTrip, img, onItemClick, id }) => {
    return (
        <div className="item-trip" onClick={() => onItemClick(id)}>
            <div className="img-trip" >
                <img className="img-trip" src={img} alt={townName} />
            </div>
            <div className="text-container">
                <p className="name-town-trip">{townName}</p>
                <p className="date-trip">{dateStartTrip} - {dateEndTrip}</p>
            </div>
        </div>
    )
}

export default ItemTrip
