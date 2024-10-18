export const handleSubmit = async (e, url, formData) => {
    e.preventDefault(e);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setModal({
          show: true,
          message: "Form submitted successfully!",
          isSuccess: true,
        });
        setFormData(formData);

        toggleModal()

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