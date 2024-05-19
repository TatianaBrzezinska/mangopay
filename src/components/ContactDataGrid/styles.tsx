import { IconButton, styled, Typography } from "@mui/material";

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    border: `1px solid ${theme.palette.common.light}`,
    backgroundColor: theme.palette.common.lightGrey,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.common.light,
    },
    "&:active": {
      backgroundColor: theme.palette.common.light,
    },
    "& .MuiTouchRipple-root span": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const CustomHeader = styled(Typography)(({ theme }) => ({
  pr: 2,
  color: theme.palette.common.grey,
  fontWeight: 600,
}));
