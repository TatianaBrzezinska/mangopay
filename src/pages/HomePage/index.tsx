import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";

import ContactDataGrid from "@/components/ContactDataGrid";
import Wrapper from "@/components/Layout/Wrapper";
import {
  AddContactModal,
  DeleteContactModal,
  EditContactModal,
} from "@/components/Modals";
import { ContactContext } from "@/context/ContactContext";
import { Contact } from "@/types";

import { AddContactBtn, Title } from "./styles";

const HomePage: React.FC = () => {
  const { contacts, addContact, updateContact, deleteContact } =
    useContext(ContactContext);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<null | Contact>(null);
  const [deletingContact, setDeletingContact] = useState<null | Contact>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setEditModalOpen(true);
  };

  const handleDelete = (contact: Contact) => {
    setDeletingContact(contact);
    setDeleteModalOpen(true);
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
        <AddContactBtn
          variant="outlined"
          onClick={() => setAddModalOpen(true)}
          size="large"
        >
          + Add Contact
        </AddContactBtn>
      </Box>

      <Wrapper>
        <ContactDataGrid
          contacts={filteredContacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Wrapper>
      <AddContactModal
        open={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={addContact}
      />
      {editingContact && (
        <EditContactModal
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          contact={editingContact}
          onSave={updateContact}
        />
      )}
      {deletingContact && (
        <DeleteContactModal
          open={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          contact={deletingContact}
          onDelete={deleteContact}
        />
      )}
    </Box>
  );
};

export default HomePage;
