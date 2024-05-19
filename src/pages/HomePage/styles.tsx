import { Button, styled, Typography } from "@mui/material";

export const AddContactBtn = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
