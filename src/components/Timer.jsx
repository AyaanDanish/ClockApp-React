import { CircularProgress, Typography, Box } from "@mui/material";
import { getTotalSeconds } from "./utils/utilities";
import PropTypes from "prop-types";

const Timer = ({
  sessionTime,
  breakTime,
  initialSession,
  initialBreak,
  isBreakTime,
}) => {
  const isBreakTimeLow = getTotalSeconds(breakTime) < 60;
  const isSessionTimeLow = getTotalSeconds(sessionTime) < 60;

  const normalise = (value) =>
    (value * 100) /
    getTotalSeconds(isBreakTime ? initialBreak : initialSession);

  return (
    <Box id="timer-container">
      <CircularProgress
        variant="determinate"
        value={
          isBreakTime
            ? normalise(getTotalSeconds(breakTime))
            : normalise(getTotalSeconds(sessionTime))
        }
        size="300px"
        sx={{ color: "primary.darkBlue" }}
      />
      <Box id="timelabel-container">
        <Typography variant="h5" fontWeight={400}>
          {isBreakTime ? "Break" : "Session"}
        </Typography>
        <Typography
          variant="h3"
          fontWeight={400}
          textAlign={"center"}
          sx={
            (isBreakTime && isBreakTimeLow) ||
            (!isBreakTime && isSessionTimeLow)
              ? {
                  color: "red",
                  animation: "flash 1s",
                  animationIterationCount: "infinite",
                }
              : {}
          }
        >
          {isBreakTime ? breakTime : sessionTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;

Timer.propTypes = {
  sessionTime: PropTypes.string.isRequired,
  breakTime: PropTypes.string.isRequired,
  initialSession: PropTypes.string.isRequired,
  initialBreak: PropTypes.string.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
};
