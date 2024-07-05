import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Contact } from "@/types";

interface ContactFormProps {
  contact?: Contact;
  onCancel: () => void;
  onSave: (contact: Contact) => void;
}

type ContactFormSchema = Omit<Contact, "id">;

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ContactForm: React.FC<ContactFormProps> = ({
  contact,
  onCancel,
  onSave,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: yupResolver(schema),
    defaultValues: contact || { firstName: "", lastName: "", email: "" },
  });

  useEffect(() => {
    reset(contact || { firstName: "", lastName: "", email: "" });
  }, [contact, reset]);

  const onError = () => {
    setIsSubmitted(true);
  };

  const onSubmit: SubmitHandler<ContactFormSchema> = (data) => {
    setIsSubmitted(false);
    onSave({ ...data, id: contact?.id || Date.now().toString() });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
        <Button
          onClick={onCancel}
          variant="outlined"
          color="secondary"
          size="large"
        >
          Cancel
        </Button>
        <Button
          disabled={isSubmitted && Object.keys(errors).length > 0}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
