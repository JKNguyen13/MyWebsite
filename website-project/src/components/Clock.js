import React, {useEffect, useState, useE, useS} from 'react'
import './ClockStyle.css';

function Clock() {
  const [clockState, setClockState] = useState();
  
  useEffect(() => {
    setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleDateString());
    }, 1000)


  }, [])

  const [timeClockState, setTimeClockState] = useState();
  
  useEffect(() => {
    setInterval(() => {
        const time = new Date();
        setTimeClockState(time.toLocaleTimeString());
    }, 1000)


  }, [])
  
    return (

    <><div className="Date">{clockState}</div>
    <div className="Clock">{timeClockState}</div></>

  )
}

export default Clock
