import { AppBar, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "none",
}));

export const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
