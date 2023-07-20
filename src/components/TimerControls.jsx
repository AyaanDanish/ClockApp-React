import { Box } from "@mui/material";
import { MyButton } from "./CustomButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const TimerControls = ({ timerOn, setTimerOn, handleReset }) => {
  return (
    <Box id="timer-controls">
      <MyButton
        variant="contained"
        onClick={() => setTimerOn((prev) => !prev)}
        id="pause-play-btn"
      >
        <FontAwesomeIcon
          icon={timerOn ? faCirclePause : faPlayCircle}
          size="xs"
          id="pause-play-icon"
        />
      </MyButton>

      <MyButton variant="contained" onClick={handleReset} id="reset-btn">
        <FontAwesomeIcon icon={faArrowsRotate} size="xs" id="reset-icon" />
      </MyButton>
    </Box>
  );
};

export default TimerControls;

TimerControls.propTypes = {
  timerOn: PropTypes.bool.isRequired,
  setTimerOn: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
