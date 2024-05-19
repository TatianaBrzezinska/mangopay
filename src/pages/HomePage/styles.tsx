import { Box, Button, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
}));

export const AddContactBtn = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.8)} ${theme.spacing(3)}`,
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
