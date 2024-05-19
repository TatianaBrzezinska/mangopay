import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ContactContext } from "@/context/ContactContext";

const ContactDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { contacts } = useContext(ContactContext);
  const contact = contacts.find((c) => c.id === id);

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Contact Details
      </Typography>
      {contact ? (
        <div>
          <Typography variant="h5">
            {contact.firstName} {contact.lastName}
          </Typography>
          <Typography variant="body1">{contact.email}</Typography>
        </div>
      ) : (
        <Typography variant="body1">Contact not found</Typography>
      )}
    </Box>
  );
};

export default ContactDetailsPage;
