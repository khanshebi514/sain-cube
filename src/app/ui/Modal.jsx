import { useState } from "react";
import Input from "./Input";
import emailjs from "emailjs-com";
import ModalMessage from "../components/ModalMessage";
import { createPortal } from "react-dom";

export default function Modal({ toggleModal }) {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
  });

  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = (e) => {
    e.preventDefault();
    toggleModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_b1kvilg";
    const templateID = "template_7ng7yhe";
    const userID = "fyLY0iIBgaWi45I3C"; // Use the User ID from EmailJS

    try {
      // Use EmailJS to send an email
      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );

      if (response.status === 200) {
        setModal({
          show: true,
          message: "Form submitted successfully!",
          isSuccess: true,
        });
        setFormData({
          full_name: "",
          company_name: "",
          email: "",
          phone: "",
        });

        toggleModal();
      } else {
        setModal({
          show: true,
          message: "Failed to submit the form.",
          isSuccess: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModal({
        show: true,
        message: "Error submitting form.",
        isSuccess: false,
      });
    }
  };

  return createPortal (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-10">
      <div className=" bg-[#555] p-8 rounded shadow-lg" style={{maxWidth:'500px'}}>
        <h2 className="text-2xl mb-4 text-primary">Free Consultancy</h2>
        <p className="text-base font-semibold text-white">
          Enter your details here:
        </p>
        <form onSubmit={handleSubmit} className="mt-3">
          <Input
            label="Full Name"
            type="text"
            placeholder="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />

          <Input
            label="Company Name"
            type="text"
            placeholder="Company Name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center mt-5">
            <button
              type="submit"
              className="px-5 py-3 bg-primary hover:bg-slate-500 text-white rounded-md"
            >
              Submit
            </button>

            <button
              className="px-5 py-3 bg-red-600 text-white rounded-md hover:bg-slate-500"
              onClick={handleClose}
            >
              Close
            </button>
          </div>

          {modal.show && (
            <ModalMessage
              message={modal.message}
              isSuccess={modal.isSuccess}
              onClose={() => setModal({ ...modal, show: false })}
            />
          )}
        </form>
      </div>
    </div>, document.getElementById('modal')
  );
}