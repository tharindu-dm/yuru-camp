import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import ContactForm from './ContactForm';

const Contact = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h2">Contact Us</Typography>
      {id ? (
        <Paper style={{ padding: 20, marginBottom: 20 }}>
          <Typography>Viewing contact details for ID: {id}</Typography>
        </Paper>
      ) : null}
      <ContactForm />
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6">Our Office</Typography>
        <Typography>123 Main St, Anytown, USA 12345</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: info@example.com</Typography>
      </Paper>
    </div>
  );
};

export default Contact;