import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import TitleHeader from "../components/TitleHeader";
import HeroExperience from "../components/HeroModels/HeroExperience"; // Changed import
import { socialImgs } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const socialLinksRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Add elements to social links ref array
  const addToSocialLinksRef = (el) => {
    if (el && !socialLinksRef.current.includes(el)) {
      socialLinksRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animation for social links
    gsap.fromTo(
      socialLinksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center section-padding">
      <div className="max-w-8xl w-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-16">
          <div className="xl:col-span-5">
            <div className="card-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Form fields remain unchanged */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    className="p-3 rounded-lg bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="p-3 rounded-lg bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-300 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="p-3 rounded-lg bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                  />
                </div>

                <button
  type="submit"
  className="relative p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden"
  disabled={loading}
>
  <span className="relative z-10">
    {loading ? "Sending..." : "Send Message"}
  </span>
  {!loading && (
    <svg
      className="w-5 h-5 relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )}
  {/* Glow effect on hover */}
  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</button>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-center text-gray-400 mb-4 font-medium">
                    Connect with me:
                  </p>
                  <div className="flex justify-center gap-4 bg-gray-900 p-4 rounded-lg">
                    {/* Social icons remain unchanged */}
                    <a
                      ref={addToSocialLinksRef}
                      href="https://wa.me/+94711911015"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-md flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition-colors duration-200"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp text-green-400 text-2xl"></i>
                    </a>
                    <a
                      ref={addToSocialLinksRef}
                      href="https://github.com/your-github-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-md flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github text-white text-2xl"></i>
                    </a>
                    {socialImgs
                      .filter(social => social.name !== "x")
                      .map((social, index) => (
                        <a
                          key={index}
                          ref={addToSocialLinksRef}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 p-3 rounded-md flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition-colors duration-200"
                          aria-label={social.name}
                        >
                          {social.name === "insta" ? (
                            <i className="fab fa-instagram text-pink-400 text-2xl"></i>
                          ) : social.name === "fb" ? (
                            <i className="fab fa-facebook text-blue-400 text-2xl"></i>
                          ) : social.name === "linkedin" ? (
                            <i className="fab fa-linkedin text-blue-400 text-2xl"></i>
                          ) : null}
                        </a>
                      ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden hover:cursor-grab">
              <HeroExperience /> {/* Replaced ContactExperience with HeroExperience */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;