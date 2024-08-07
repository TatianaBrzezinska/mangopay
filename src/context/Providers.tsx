import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/theme";

import { ContactProvider } from "./ContactContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactProvider>{children}</ContactProvider>
    </ThemeProvider>
  );
};

export default Providers;
