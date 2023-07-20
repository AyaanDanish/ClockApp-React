import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const MyButton = styled(Button)(({ theme }) => ({
  fontSize: "35pt",
  fontWeight: "300",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  minWidth: "70px",
  minHeight: "70px",
  padding: 0,
  boxShadow: "none",
  transition: "0.15s",
  backgroundColor: theme.palette.primary.darkBlue,
  "&:hover": {
    borderRadius: "20px",
    filter: "brightness(1.5)",
    backgroundColor: theme.palette.primary.darkBlue,
  },
}));
