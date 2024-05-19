import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import { Contact } from "@/types";

interface DeleteContactModalProps {
  open: boolean;
  onClose: () => void;
  contact: Contact;
  onDelete: (id: string) => void;
}

const DeleteContactModal: React.FC<DeleteContactModalProps> = ({
  open,
  onClose,
  contact,
  onDelete,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        <Typography sx={{ my: 2 }}>
          Are you sure you want to delete contact{" "}
          <b>
            {contact.firstName} {contact.lastName}
          </b>
          ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          color="secondary"
          size="large"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onDelete(contact.id);
            onClose();
          }}
          color="error"
          size="large"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactModal;
