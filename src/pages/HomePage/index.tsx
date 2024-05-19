import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

import ContactDataGrid from "@/components/ContactDataGrid";
import { generateFakeContacts } from "@/utils/fakerData";

import { AddContactBtn, Title, Wrapper } from "./styles";

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
      <Title variant="h4">Welcome to Contactz!</Title>
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
          sx={{ width: "25%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <AddContactBtn variant="outlined">+ Add Contact</AddContactBtn>
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
