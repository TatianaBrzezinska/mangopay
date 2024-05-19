import { AppBar, styled, Toolbar, Typography } from "@mui/material";

import theme from "@/theme";

const Header: React.FC = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.primary.main}
        >
          Contactz
        </Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;

const CustomAppBar = styled(AppBar)({
  backgroundColor: theme.palette.common.white,
  boxShadow: "none",
});
