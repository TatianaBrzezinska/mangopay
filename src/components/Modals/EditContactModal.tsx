import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import { Contact } from "@/types";

import ContactForm from "../ContactForm";

interface EditContactModalProps {
  open: boolean;
  onClose: () => void;
  contact: Contact;
  onSave: (contact: Contact) => void;
}

const EditContactModal: React.FC<EditContactModalProps> = ({
  open,
  onClose,
  contact,
  onSave,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <ContactForm
          contact={contact}
          onSave={(updatedContact) => {
            onSave(updatedContact);
            onClose();
          }}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditContactModal;
