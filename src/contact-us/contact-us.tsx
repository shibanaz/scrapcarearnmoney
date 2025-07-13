import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const schema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  emailid: yup.string().email('Invalid email').required('Email is required'),
  phonenumber: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  comments: yup.string().required('Comments are required'),
});

type FormData = yup.InferType<typeof schema>;

const ContactForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const {
  mutate,         // to trigger the mutation
  isLoading,      // to show loading spinner
  isSuccess,      // (optional) for success UI
  isError,        // (optional) for error UI
  error,          // (optional) error object
} = useMutation({
  mutationFn: (formData: FormData) =>
    axios.post('/api/contact', formData),
  onSuccess: () => {
    setFormSubmitted(true);
    reset();
  },
  onError: () => {
    alert('Failed to submit form.');
  },
});

  // Optional: auto-hide the alert after 4 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding:0
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: 'lightgreen',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Typography variant="h5" color="white" gutterBottom>
          Contact Form
        </Typography>

        {/* ✅ Success Alert */}
        {formSubmitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Form submitted successfully!
          </Alert>
        )}

        <TextField
          fullWidth
          label="First Name"
          margin="normal"
          {...register('firstname')}
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />

        <TextField
          fullWidth
          label="Last Name"
          margin="normal"
          {...register('lastname')}
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
        />

        <TextField
          fullWidth
          label="Email ID"
          margin="normal"
          {...register('emailid')}
          error={!!errors.emailid}
          helperText={errors.emailid?.message}
        />

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          {...register('phonenumber')}
          error={!!errors.phonenumber}
          helperText={errors.phonenumber?.message}
        />

        <TextField
          fullWidth
          label="Comments"
          margin="normal"
          multiline
          rows={4}
          {...register('comments')}
          error={!!errors.comments}
          helperText={errors.comments?.message}
        />

        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
