import { Toolbar, Typography } from "@mui/material";

import theme from "@/theme";

import { CustomAppBar, CustomLink } from "./styles";

const Header: React.FC = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <CustomLink to="/">
          <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.primary.main}
          >
            Contactz
          </Typography>
        </CustomLink>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
