import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="bg-gradient-to-r from-primaryPurple to-brightRed text-white py-8">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg text-primaryPurple"
        >
          <div className="mb-4">
            <label className="block font-bold mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Attachment</label>
            <input type="file" {...register("file")} className="w-full" />
          </div>
          <button
            type="submit"
            className="bg-brightRed text-white py-2 px-4 rounded-lg hover:bg-orange transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
