import { Box, styled } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

export const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4, 6),
}));
