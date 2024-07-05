import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Wrapper from "@/components/Layout/Wrapper";
import { ContactContext } from "@/context/ContactContext";

import {
  BackButton,
  StyledAvatar,
  StyledImg,
} from "./styles";

const ContactDetailsPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { contacts } = useContext(ContactContext);
  const contact = contacts.find((c) => c.id === id);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setImageLoaded(false);
  }, [contact]);

  const avatarUrl = contact
    ? `https://robohash.org/${contact.id}?set=set2`
    : "";

  return (
    <Box padding={2}>
      <BackButton
        variant="text"
        size="large"
        color="secondary"
        startIcon={<ArrowBackIosNew />}
        onClick={handleBackClick}
      >
        Back
      </BackButton>
      <Wrapper>
        <Box
          paddingY={8}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={5}
        >
          <StyledAvatar>
            {!imageLoaded && <CircularProgress />}
            <StyledImg
              src={avatarUrl}
              alt="avatar"
              imageLoaded={imageLoaded}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
          </StyledAvatar>
          <Box>
            {contact ? (
              <>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="baseline"
                  gap={4}
                >
                  <Typography variant="h5">Name:</Typography>
                  <Typography variant="h2">
                    {contact.firstName} {contact.lastName}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="baseline"
                  gap={4}
                >
                  <Typography variant="h5">Email:</Typography>
                  <Typography variant="h4">{contact.email}</Typography>
                </Box>
              </>
            ) : (
              <Typography variant="h4">Contact not found</Typography>
            )}
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default ContactDetailsPage;
