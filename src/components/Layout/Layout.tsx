import { Box, Container, CssBaseline } from '@mui/material';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      <Box component="main" flexGrow={1} p={3}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
