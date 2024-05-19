import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import { Contact } from "@/types";

import ContactForm from "../ContactForm";

interface AddContactModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (contact: Contact) => void;
}

const AddContactModal: React.FC<AddContactModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle fontSize={24}>Add Contact</DialogTitle>
      <DialogContent>
        <ContactForm
          onSave={(contact) => {
            onSave(contact);
            onClose();
          }}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddContactModal;
