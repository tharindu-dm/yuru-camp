import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledFormControl = styled(FormControl)`
  margin: 10px 0 !important;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason for contact';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', reason: '', subject: '', message: '' });
    }
  };

  // Real-time form validation
  useEffect(() => {
    const newErrors = {};
    if (formData.name && formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    setErrors(newErrors);
  }, [formData]);

  // Save form data to local storage
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  // Load form data from local storage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        name="phone"
        label="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />
      <StyledFormControl error={!!errors.reason}>
        <InputLabel>Reason for Contact</InputLabel>
        <Select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          label="Reason for Contact"
        >
          <MenuItem value="reservation">Reservation</MenuItem>
          <MenuItem value="feedback">Feedback</MenuItem>
          <MenuItem value="inquiry">Inquiry</MenuItem>
          <MenuItem value="help">Help/Support</MenuItem>
        </Select>
        {errors.reason && <Typography color="error">{errors.reason}</Typography>}
      </StyledFormControl>
      <TextField
        name="subject"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        error={!!errors.subject}
        helperText={errors.subject}
        margin="normal"
      />
      <TextField
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
        Submit
      </Button>
      {isSubmitted && (
        <Typography color="primary" style={{ marginTop: 10 }}>
          Form submitted successfully!
        </Typography>
      )}
    </FormContainer>
  );
};

export default ContactForm;