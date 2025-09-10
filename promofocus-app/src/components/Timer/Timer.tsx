import { useEffect, useState } from 'react'
import './Timer.css'
import { TimerType } from '../App/App';

interface Props {
    type: TimerType;
}

const Timer: React.FC<Props> = ({ type }: Props) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setTimeLeft(type);
        setIsRunning(false);
    }, [type])

    useEffect(() => {
        let interval: number | undefined = undefined;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const startTimer = () => {
        setTimeLeft(type);
        setIsRunning(true);
    };

    return (
        <div>
            <div className='timer'>{formatTime(timeLeft)}</div>
            <button onClick={startTimer}>Démarrer</button>
        </div>
    )
}

export default Timer
