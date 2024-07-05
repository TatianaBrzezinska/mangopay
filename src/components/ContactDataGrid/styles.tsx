import { IconButton, styled, Typography } from "@mui/material";

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      backgroundColor: theme.palette.grey[300],
    },
    "& .MuiTouchRipple-root span": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const CustomHeader = styled(Typography)(({ theme }) => ({
  pr: 2,
  color: theme.palette.grey[700],
  fontWeight: 600,
}));
