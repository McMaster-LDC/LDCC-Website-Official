import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Submit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const formElement = document.getElementById("form");
    const formDatabase = new FormData(formElement);

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw7wYEqswJQlp_ozAtg6_C9LuRfjbZJjvQYjr8wE0VwH2lDC546M4oRVLgwO5qp_9cRRQ/exec",
        {
          method: "POST",
          body: formDatabase,
        }
      );

      const data = await response.text();
      console.log("Success:", data);

      // Redirect user to another page on success
      navigate("/Confirmation");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <main className="flex flex-col bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10 pb-10">
      <section className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-start max-w-screen-lg w-full">
          <h1 className="flex justify-start max-w-screen-lg w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950">
            Early Registration Form
          </h1>
        </div>

        <article className="flex flex-col items-between max-w-screen-lg w-full -mt-4">
          <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
            Registration will open soon! 
          </h2>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-2">
            Keep an eye out for updates on our social media platforms and website for when registration opens.
          </p>
        </article>

        <form id="form" onSubmit={(e) => Submit(e)} className="flex flex-col items-center max-w-screen-lg w-full gap-6 -mt-4">
          {/* First Name and Last Name */}
          <section className="grid grid-cols-2 gap-x-6 gap-y-6 w-full">
            <div className="flex flex-col">
              <label htmlFor="FName" className="block text-sm font-medium text-purple-950 mb-2">
                First Name
              </label>
              <input
                id="FName"
                placeholder="First Name"
                name="FName"
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="LName" className="block text-sm font-medium text-purple-950 mb-2">
                Last Name
              </label>
              <input
                id="LName"
                placeholder="Last Name"
                name="LName"
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
          </section>

          {/* McMaster Email and Student Number */}
          <section className="grid grid-cols-1 gap-y-6 w-full">
            <div className="grid">
              <label htmlFor="Email" className="block text-sm font-medium text-purple-950 mb-2">
                McMaster Email
              </label>
              <input
                id="Email"
                placeholder="name@mcmaster.ca"
                name="Email"
                type="email"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
            <div className="grid">
              <label htmlFor="StNum" className="block text-sm font-medium text-purple-950 mb-2">
                Student Number
              </label>
              <input
                id="Number"
                placeholder="123456789"
                name="Number"
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
          </section>

          {/* Program and Level */}
          <section className="grid grid-cols-2 gap-x-6 gap-y-6 w-full">
            <div className="flex flex-col">
              <label htmlFor="Program" className="block text-sm font-medium text-purple-950 mb-2">
                Program
              </label>
              <input
                id="Program"
                placeholder="ie. Software Engineering"
                name="Program"
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Level" className="block text-sm font-medium text-purple-950 mb-2">
                Level
              </label>
              <input
                id="Level"
                placeholder="ie. 2"
                name="Level"
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
              />
            </div>
          </section>

          {/* Write Here (Textarea) */}
          <section className="flex flex-col w-full">
            <label htmlFor="WriteHere" className="block text-sm font-medium text-purple-950 mb-2">
              What are you looking to gain at the conference? What would you like to see at this event? (Ex. Coop panels, presentations, networking, etc.)
            </label>
            <textarea
              id="Message"
              placeholder="Write here.."
              name="Message"
              required
              className="w-full p-4 h-40 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md resize-none overflow-auto"
            ></textarea>
          </section>

          {/* Submit button */}
          <section className="grid grid-cols-1 gap-y-6 w-full">
            <div className="flex text-center justify-center">
            <button type="submit" disabled className={`w-full p-4 rounded-2xl cursor-not-allowed text-white font-medium cursor-disabled bg-gray-500`}>
              Form Closed. Keep an eye out for updates!
            </button>

            </div>
          </section>

        </form>
      </section>
    </main>
  );
};

export default Register;
