import { Box, Button, Typography } from '@mui/material';

import ContactDataGrid from '../components/ContactDataGrid';
import { generateFakeContacts } from '../utils/fakerData';

const HomePage: React.FC = () => {
  const contacts = generateFakeContacts(10);
  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Welcome to Contactz
      </Typography>
      <Button variant="contained" color="primary">
        Add Contact
      </Button>
      <ContactDataGrid
        contacts={contacts}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </Box>
  );
};

export default HomePage;
