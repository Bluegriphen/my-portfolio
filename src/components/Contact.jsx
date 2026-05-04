import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
   const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

     emailjs.send(
      "service_0xdbtih",
      "template_a19pca8",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "uNy-Ul6mk2HDizhlf"
    )
    .then(()=>{
       setLoading(false);
      alert("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });

    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong. Please try again ❌");
    });


    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-400/10 blur-3xl"></div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Let’s build something amazing together 🚀
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">

        {/* LEFT INFO */}
        <div className="space-y-6">
          {[
            { title: "Email", value: "priyankabasolanki994@gmail.com" },
            { title: "Phone", value: "+91 7285030271" },
            { title: "Location", value: "Ahmedabad, India" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f172a] p-5 rounded-xl border border-gray-800 
                         hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 
                         transition"
            >
              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 
                     hover:shadow-lg hover:shadow-cyan-400/10 transition"
        >

          {/* NAME */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded-lg 
                         focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded-lg 
                         focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#020617] border border-gray-700 rounded-lg 
                         focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 py-3 rounded-lg font-semibold 
                       hover:bg-cyan-500 hover:scale-[1.02] 
                       transition duration-300 shadow-lg shadow-cyan-400/20"
          >
             {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;