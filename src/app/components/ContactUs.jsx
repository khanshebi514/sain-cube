'use client'
import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Modal from "./Modal";

export default function ContactUs() {
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    email: '',
    whatsapp: '',
    message_body: '',
  });

  const [modal, setModal] = useState({ show: false, message: '', isSuccess: true });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setModal({
          show: true,
          message: 'Form submitted successfully!',
          isSuccess: true,
        });
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          country: '',
          email: '',
          whatsapp: '',
          message_body: '',
        });
      } else {
        setModal({
          show: true,
          message: 'Failed to submit the form.',
          isSuccess: false,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModal({
        show: true,
        message: 'Error submitting form.',
        isSuccess: false,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-[600px] m-auto bg-[#161e1e] p-10">
        <h1 className="text-2xl font-semibold capitalize text-white my-10">
          Request a Free Consultation
        </h1>

        <div className="w-full space-y-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <Input
              label="First Name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <Input
              label="Company/Organization"
              type="text"
              placeholder="Company name (optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <Input
              label="Country"
              type="text"
              placeholder="Your Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <Input
              label="Email"
              type="email"
              placeholder="abc@mail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="WhatsApp No."
              type="text"
              placeholder="+923123456786"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2 flex-col">
            <label className="text-white font-semibold mb-2">Message</label>
            <textarea
              name="message_body"
              id="message_body"
              placeholder="Describe your AI project or ask us about our services..."
              className="rounded-lg bg-[#202428] p-2 text-white border-[1px] border-gray-700 outline-none h-[150px]"
              value={formData.message_body}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mt-10">
          <Button type="submit" btnText="Submit" />
        </div>
        {modal.show && (
          <Modal
            message={modal.message}
            isSuccess={modal.isSuccess}
            onClose={() => setModal({ ...modal, show: false })}
          />
        )}
      </form>
    </div>
  );
}