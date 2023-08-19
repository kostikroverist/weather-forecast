import Modal from 'react-modal';
import { FormEvent, useState, FC } from 'react'
import { EventData } from '../../../types/TripsTypes';

const customStyles = {
    content: {
        width: '550px',
        height: '450px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const EventDataInput = {
    "img": '',
    "townName": '',
    "dateStartTrip": '',
    "dateEndTrip": '',
}

type Props = {
    addTrip: (eventData: EventData) => void
    closeModal: () => void
    openModal: () => void
    modalIsOpen: boolean
}
const AddNewItems: FC<Props> = ({ addTrip, closeModal, openModal, modalIsOpen }) => {

    const [inputChange, setInputChange] = useState(EventDataInput);


    const handleChange = (event: FormEvent) => {
        event.preventDefault();
        addTrip(inputChange);
        closeModal();
    }



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "dateStartTrip" || name === "dateEndTrip") {
            const dateObject = new Date(value);

            const year = dateObject.getFullYear();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const day = dateObject.getDate().toString().padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;

            setInputChange({ ...inputChange, [name]: formattedDate });
        } else {
            setInputChange({ ...inputChange, [name]: value });
        }
    }


    return (
        <>
            <button className="btn-add-trip" onClick={openModal}>
                <p>+</p>
                <p>Add trip</p>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className="modal-btn-close">
                    <button className='btn-close' onClick={closeModal}>X</button>
                </div>
                <form onSubmit={handleChange} className='form-style'>
                    <label className='label-style'>City</label><br />
                    <input type="text" name="townName" className='input-style' onChange={handleInputChange} value={inputChange.townName} />

                    <label className='label-style'>Start Date</label><br />
                    <input type="date" name="dateStartTrip" placeholder="Start Date" className='input-style input-type-data' onChange={handleInputChange} value={inputChange.dateStartTrip} />

                    <label className='label-style'>End Date</label><br />

                    <input type="date" name="dateEndTrip" className='input-style input-type-data' onChange={handleInputChange} value={inputChange.dateEndTrip} />

                    <div className="button-container">
                        <button className='btn-form' type="button" onClick={closeModal}>Close</button>
                        <button className='btn-form save' type="submit" >Send</button>
                    </div>
                </form>
            </Modal >
        </>

    )
}

export default AddNewItems
