/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import SetTimePanel from "./components/SetTimePanel";
import Timer from "./components/Timer";
import Title from "./components/Title";
import TimerControls from "./components/TimerControls";
import { decrementTime, getNewInitialTime } from "./components/utils/utilities";

const App = () => {
  const [initialSession, setInitialSession] = useState("25:00");
  const [sessionTime, setSessionTime] = useState(initialSession);

  const [initialBreak, setInitialBreak] = useState("05:00");
  const [breakTime, setBreakTime] = useState(initialBreak);

  const [timerOn, setTimerOn] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  //Decrements the break or session timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        isBreakTime
          ? setBreakTime((prev) => decrementTime(prev))
          : setSessionTime((prev) => decrementTime(prev));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreakTime, timerOn]);

  //Switches to break time when session time runs out
  useEffect(() => {
    if (sessionTime === "00:00") {
      const audio = new Audio("src/audio/Timer.mp3");
      audio.play();
      setIsBreakTime(true);
      setSessionTime("00:01");
    }

    if (breakTime === "00:00") {
      const audio = new Audio("src/audio/Timer.mp3");
      audio.play();
      handleReset();
    }
  }, [sessionTime, breakTime]);

  const setInitialTime = (forSession, change) => {
    if (forSession) {
      setInitialSession((prev) => getNewInitialTime(prev, change));
      setSessionTime(initialSession);
      setSessionTime((prev) => getNewInitialTime(prev, change));
    } else {
      setInitialBreak((prev) => getNewInitialTime(prev, change));
      setBreakTime(initialSession);
      setBreakTime((prev) => getNewInitialTime(prev, change));
    }
  };

  const handleReset = () => {
    setTimerOn(false);
    setIsBreakTime(false);
    setSessionTime(initialSession);
    setBreakTime(initialBreak);
  };

  return (
    <Container id="app-container">
      <Title />
      <Box id="clock-container">
        <Timer
          initialSession={initialSession}
          initialBreak={initialBreak}
          sessionTime={sessionTime}
          breakTime={breakTime}
          setTimerOn={setTimerOn}
          isBreakTime={isBreakTime}
        />
        <TimerControls
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          handleReset={handleReset}
        />
        <SetTimePanel
          initialSession={initialSession}
          initialBreak={initialBreak}
          setInitialTime={setInitialTime}
          timerOn={timerOn}
        />
      </Box>
    </Container>
  );
};

export default App;
