import { Avatar, Button, styled } from "@mui/material";

export const BackButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: 0,
  fontWeight: 400,
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  "&:active": {
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  "& .MuiTouchRipple-root span span": {
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: 200,
  height: 200,
  position: "relative",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[300]}`,
}));

export const StyledImg = styled("img")<{ imageLoaded: boolean }>(
  ({ imageLoaded }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: imageLoaded ? "block" : "none",
  }),
);
