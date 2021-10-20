import { useEffect, useState } from "react";

function Timer({setStop, questionNumber}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
      if(timer === 0){
          return setStop(true)
      }
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    // writing clean-up code
    return () => clearInterval(interval)
  }, [timer, setStop]);

  useEffect(()=>{
    setTimer(30)
  }, [questionNumber]);

  return timer;

}

export default Timer;
