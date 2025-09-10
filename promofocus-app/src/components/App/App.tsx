import { useState } from 'react'
import './App.css'
import Timer from '../Timer'

export enum TimerType {
    POMODORO = 1500,
    SHORT_BREAK = 300,
    LONG_BREAK = 900,
}

const App: React.FC = () => {
    const [timerType, setTimerType] = useState<TimerType>(TimerType.POMODORO)

  return (
    <div className='app-content'>
      <h1>Promofocus APP</h1>
      <div className="timer-button-section">
        <button onClick={() => setTimerType(TimerType.POMODORO)}>Pomodoro</button>
        <button onClick={() => setTimerType(TimerType.SHORT_BREAK)}>Short break</button>
        <button onClick={() => setTimerType(TimerType.LONG_BREAK)}>Long break</button>
      </div>
      <div className='timer-section'>
        <Timer type={timerType} />
      </div>
    </div>
  )
}

export default App
