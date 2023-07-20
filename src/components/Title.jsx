import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box>
      <Typography
        variant="1"
        fontSize={"4rem"}
        fontWeight={300}
        fontStyle={"italic"}
      >
        Reactive 25+5 Clock
      </Typography>
      <Typography variant="h5" fontWeight={300} fontStyle={"italic"}>
        By Ayaan Danish
      </Typography>
    </Box>
  );
};

export default Title;
