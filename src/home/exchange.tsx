import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './CDForm.css';
import {
  Box, 
} from '@mui/material';
type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  regnum: string;
  chasisnum: string;
};

const ExchangeValue: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    regnum: '',
    chasisnum: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const service_id = 'service_rszf34t'; // from dashboard
    const public_key ='6Dm0EgV-d9r4IEECZ';
    emailjs.send(
    service_id, // from dashboard
    'template_vqn99tv', // from dashboard
    {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        regnum: formData.regnum ,
        chasisnum: formData.chasisnum,
    },
    public_key // your public key
    ).then(() => {
      alert('Form Submitted');
    setFormData({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    regnum: '',
    chasisnum: '',
    });  
      }
     )
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
    <div className="cd-form-container">
      <h2>Get Exchange Value</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="form-group two-columns">
          <label>Name <span>*</span></label>
          <div className="inline-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone <span>*</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="+91"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={10}
          />
        </div>

        <div className="form-group">
          <label>Email<span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Registration Number <span>*</span></label>
          <input
            type="text"
            name="regnum"
            placeholder="e.g., XXXXXX"
            value={formData.regnum}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Chasis Number <span>*</span></label>
          <input
            type="text"
            name="chasisnum"
            placeholder="Enter last 5digit chasis Number"
            value={formData.chasisnum}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </Box>
  );
};

export default ExchangeValue;
