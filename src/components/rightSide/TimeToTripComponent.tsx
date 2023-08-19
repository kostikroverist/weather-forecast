import { FC, useEffect, useState } from 'react'


type Props = {
    dateStartTrip: string
}
const TimeToTripComponent: FC<Props> = ({ dateStartTrip }) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {

        const interval = setInterval(() => {
            const targetDate = new Date(dateStartTrip!);
            const currentDate = new Date();

            const timeDifference = targetDate.getTime() - currentDate.getTime();
            
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);

    }, [dateStartTrip]);

    //функція яка приймає час старту поїздки і вертає скільки до неї часу
    return (
        <div className="time-to-trip">
            <div>
                <p>{timeRemaining.days}</p>
                <p>Day</p>
            </div>
            <div>
                <p>{timeRemaining.hours}</p>
                <p>HOURS</p>

            </div>
            <div>
                <p>{timeRemaining.minutes}</p>
                <p>Minute</p>

            </div>
            <div>
                <p>{timeRemaining.seconds}</p>
                <p>Seconds</p>
            </div>
        </div>
    )
}

export default TimeToTripComponent
