import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ContactDataGrid from "@/components/ContactDataGrid";
import { generateFakeContacts } from "@/utils/fakerData";

const HomePage: React.FC = () => {
  const contacts = generateFakeContacts(10);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Welcome to Contactz!
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <AddContactBtn color="primary">+ Add Contact</AddContactBtn>
      </Box>

      <Wrapper>
        <ContactDataGrid
          contacts={filteredContacts}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </Wrapper>
    </Box>
  );
};

export default HomePage;

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
}));

const AddContactBtn = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.8)} ${theme.spacing(3)}`,
}));
