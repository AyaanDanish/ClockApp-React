import { Box, Typography } from "@mui/material";
import { MyButton } from "./CustomButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SetTimePanel = ({
  initialSession,
  initialBreak,
  setInitialTime,
  timerOn,
}) => {
  return (
    <Box id="set-time-panel">
      <Typography variant="h5" sx={{ gridArea: "session" }} fontWeight={"bold"}>
        Session Length
      </Typography>
      <MyButton
        sx={{ gridArea: "sesh-up" }}
        variant="contained"
        onClick={() => setInitialTime(true, 1)}
        disabled={timerOn}
      >
        <FontAwesomeIcon icon={faPlus} size="2xs" />
      </MyButton>
      <Typography
        variant="h4"
        sx={{
          gridArea: "sesh-time",
          flex: 1,
          textAlign: "center",
          width: "100px",
        }}
      >
        {initialSession}
      </Typography>
      <MyButton
        sx={{ gridArea: "sesh-down" }}
        variant="contained"
        onClick={() => setInitialTime(true, -1)}
        disabled={timerOn}
      >
        <FontAwesomeIcon icon={faMinus} size="2xs" />
      </MyButton>
      <Typography variant="h5" sx={{ gridArea: "break" }} fontWeight={"bold"}>
        Break Length
      </Typography>
      <MyButton
        sx={{ gridArea: "break-up" }}
        variant="contained"
        onClick={() => setInitialTime(false, 1)}
        disabled={timerOn}
      >
        <FontAwesomeIcon icon={faPlus} size="2xs" />
      </MyButton>
      <Typography
        variant="h4"
        sx={{
          gridArea: "break-time",
          flex: 1,
          textAlign: "center",
          width: "100px",
        }}
      >
        {initialBreak}
      </Typography>
      <MyButton
        sx={{ gridArea: "break-down" }}
        variant="contained"
        onClick={() => setInitialTime(false, -1)}
        disabled={timerOn}
      >
        <FontAwesomeIcon icon={faMinus} size="2xs" />
      </MyButton>
    </Box>
  );
};

export default SetTimePanel;

SetTimePanel.propTypes = {
  initialSession: PropTypes.string.isRequired,
  initialBreak: PropTypes.string.isRequired,
  setInitialTime: PropTypes.func.isRequired,
  timerOn: PropTypes.bool.isRequired,
};
