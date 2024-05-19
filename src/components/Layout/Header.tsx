import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Contactz</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
