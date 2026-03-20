import { useState } from "react";
import contactImg from "../assets/contact-request.png";

const ContactForm = () => {
  const [form, setForm] = useState({
    pickup: "",
    destination: "",
    date: "",
    passengers: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // ✅ VALIDATION
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return "Enter a valid email (must include @)";
    }

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      return "Enter a valid phone number (min 10 digits)";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            number: form.phone,
            email: form.email,
            subject: "Website Lead",
            message: `
Pickup: ${form.pickup}
Destination: ${form.destination}
Date: ${form.date}
Passengers: ${form.passengers}

Message: ${form.message}
            `,
            site: "coachbusamerica.com",
          }),
        }
      );

      let data;
try {
  data = await res.json();
} catch {
  data = null;
}

      if (res.ok) {
        setSuccess(true);

        // RESET FORM
        setForm({
          pickup: "",
          destination: "",
          date: "",
          passengers: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setError("Network error!");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact-form"
      className="bg-white py-[60px] md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[80px]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[48px] items-center">

        {/* LEFT FORM */}
        <div>
          <p className="text-[#E53935] text-[12px] font-semibold uppercase tracking-[2px]">
            CONTACT FORM
          </p>

          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0B2A47] mt-2">
            Request a Quote
          </h2>

          <p className="text-gray-500 mt-3 text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] max-w-[500px]">
            Fill out the form below and our team will get back to you with a customized quote.
          </p>

          {error && (
            <div className="mt-4 text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="pickup" value={form.pickup} placeholder="Pickup address" className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
              <input name="destination" value={form.destination} placeholder="Destination" className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="date" name="date" value={form.date} className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
              <input name="passengers" value={form.passengers} placeholder="Passengers" className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} placeholder="Full name" className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
              <input type="email" name="email" value={form.email} placeholder="Email" className="input focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />
            </div>

            <input name="phone" value={form.phone} placeholder="Phone number" className="input w-full focus:ring-2 focus:ring-[#E53935]" onChange={handleChange} required />

            <textarea
              name="message"
              value={form.message}
              placeholder="Your message..."
              className="input w-full h-[100px] resize-none focus:ring-2 focus:ring-[#E53935]"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E53935] text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#c92f2f] hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get Quote Now"}
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">
          <img
            src={contactImg}
            alt="Contact"
            className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-semibold">
              Experience Premium Travel
            </h3>
            <p className="text-sm text-gray-200">
              Modern fleet with top amenities for your comfort
            </p>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm">
            <h3 className="text-lg font-bold text-[#0B2A47]">
              🎉 Success!
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Your quote request has been submitted successfully.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-4 bg-[#E53935] text-white px-4 py-2 rounded-lg hover:bg-[#c92f2f] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;