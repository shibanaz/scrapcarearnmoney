import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './CDForm.css';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  buyerType: string;
  state: string;
  maker: string;
  model: string;
};

const CDForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    buyerType: '',
    state: '',
    maker: '',
    model: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const service_id = 'service_9qlut09'; // from dashboard
    const public_key ='O1yl5Qkl-5Ym7Py2t';
    emailjs.send(
    service_id, // from dashboard
    'template_1weuy1j', // from dashboard
    {
        name: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        buyerType: formData.buyerType ,
        state: formData.state,
        maker: formData.maker,
        model: formData.model,
    },
    public_key // your public key
    ).then(() => {
      alert('Form Submitted');
    setFormData({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    buyerType: '',
    state: '',
    maker: '',
    model: '',
    });  
      }
     )
  };

  return (
    <div className="cd-form-container">
      <h2>Buy Certificate Of Deposit</h2>
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
          <label>Car Buyer Type <span>*</span></label>
          <div className="radio-group">
            <label>
              <input type="radio" name="buyerType" value="individual" onChange={handleChange} required />
              Individual
            </label>
            <label>
              <input type="radio" name="buyerType" value="proprietor" onChange={handleChange} />
              Proprietor
            </label>
            <label>
              <input type="radio" name="buyerType" value="company" onChange={handleChange} />
              Company (PVT LTD, LLP, PLC etc)
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>State<span>*</span></label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamil-nadu">Tamil Nadu</option>
          </select>
        </div>

        <div className="form-group">
          <label>Vehicle Maker <span>*</span></label>
          <input
            type="text"
            name="maker"
            placeholder="e.g., Toyota, Mahindra"
            value={formData.maker}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Vehicle Model <span>*</span></label>
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CDForm;
