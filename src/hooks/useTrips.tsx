import { useState, useEffect } from "react"
import { EventData } from "../types/TripsTypes";
import axios from "axios";

const url = 'http://localhost:3004/data';

const useTrips = (fetchOnLoad = true) => {
    const [eventDataList, setEventDataList] = useState<EventData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataSend, setDataSend] = useState(false);

    const updateData = async () => {
        await axios.get<EventData[]>(url)
            .then(response => {
                setEventDataList([...response.data]);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        fetchOnLoad && updateData();
    }, [fetchOnLoad]);


    const addTrip = async (data: EventData) => {
        try {
            const response = await axios.post<EventData>(url, data);
            if (response.status === 201) {
                console.log('Trip added successfully:', response.data);
                await updateData();
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error adding trip:', error);
        }
    };
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return {
        eventDataList,
        isLoading,
        addTrip,
        modalIsOpen,
        openModal,
        closeModal,
        setIsOpen,
        dataSend, setDataSend
    };
};

export default useTrips;
