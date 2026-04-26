import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // later we connect backend or email

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-10 py-20">
      
      <h2 className="text-3xl font-bold text-center">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Let’s build something amazing together 🚀
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        
        {/* LEFT INFO */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400">
              priyankabasolanki994@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-400">
              +91 7285030271
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400">
              Ahmedabad, India
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] p-6 rounded-xl border border-gray-700"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;