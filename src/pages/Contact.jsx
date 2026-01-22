import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiChevronDown } from "react-icons/hi";
import services_hero from "../assets/services_hero.png";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <HiMail className="text-amber-500 text-2xl" />,
      title: "Email",
      value: "info@astroforge.com",
      link: "mailto:info@astroforge.com"
    },
    {
      icon: <HiPhone className="text-amber-500 text-2xl" />,
      title: "Phone",
      value: "+234 812 345 6789",
      link: "tel:+2348123456789"
    },
    {
      icon: <HiLocationMarker className="text-amber-500 text-2xl" />,
      title: "Address",
      value: (
        <span>
          123 Lagos Island St, <br />
          Victoria Island, Lagos, <br />
          Nigeria
        </span>
      ),
      link: "#"
    }
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-48 pb-32 flex flex-col items-center justify-center relative bg-blue-950 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${services_hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            Let's discuss how we can help bring your digital vision to life
          </p>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.05)_0%,transparent_50%)] pointer-events-none" />
      </section>

      {/* Contact Content */}
      <section className="w-full py-24 px-6 md:px-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-950 mb-4">Contact Information</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Reach out to us through any of these channels, and we'll respond within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="p-3 bg-amber-50 rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 mb-1">{info.title}</h3>
                    <p className="text-gray-500 font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-blue-950 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-amber-500">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-blue-950 mb-8">Send Us a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Name*</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Email*</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-950 mb-2">Company</label>
                <input 
                  type="text" 
                  placeholder="Your Company Name"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-blue-950 mb-2">Service Interested In*</label>
                  <div className="relative">
                    <select 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                    <HiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-bold text-blue-950 mb-2">Budget Range</label>
                  <div className="relative">
                    <select 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium appearance-none cursor-pointer"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="starter">$5k - $15k</option>
                      <option value="professional">$15k - $50k</option>
                      <option value="enterprise">$50k+</option>
                    </select>
                    <HiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-950 mb-2">Message*</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 font-medium resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-amber-500 text-blue-950 font-bold rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
