import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import guy_coding from "../assets/guy_coding.jpg";
import mobile_app_dev from "../assets/mobile_app_dev.png";
import social_media_strategy from "../assets/social_media_strategy.png";
import remote_talent from "../assets/remote_talent.png";
import services_hero from "../assets/services_hero.png";

const Services = () => {
  return (
    <>
      <main className="w-full bg-gray-50">
        <section 
          className="w-full pt-40 pb-28 flex flex-col items-center justify-center relative bg-blue-950 text-white overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.9)), url(${services_hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Subtle Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6 text-center z-10"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 text-center max-w-3xl px-6 leading-relaxed z-10 text-gray-200"
          >
           Comprehensive digital solutions design to help your business thrive and dominate the digital landscape.
          </motion.p>
        </section>

        {/* Websites Section */}
        <section className="w-full px-6 md:px-20 py-20 ">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Websites</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Build powerful, responsive websites that drive results and provide an exceptional user experience across all devices.
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { title: "Corporate Sites", desc: "Professional websites for businesses" },
                  { title: "E-commerce", desc: "Online stores that convert" },
                  { title: "Landing Pages", desc: "High-converting landing pages" },
                  { title: "CMS Portals", desc: "Content management systems" }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <HiCheckCircle className="text-amber-500 text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950">{service.title}</h4>
                      <p className="text-gray-500">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={guy_coding} 
                  alt="Developer working on a website" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-950/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Mobile Apps Section */}
        <section className="w-full px-6 md:px-20 py-20 bg-white">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Mobile Apps</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Create stunning mobile experiences for iOS and Android that engage users and deliver value.
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { title: "Native Apps", desc: "iOS and Android development" },
                  { title: "Cross-platform", desc: "React Native solutions" },
                  { title: "App Design", desc: "UI/UX for mobile" },
                  { title: "App Maintenance", desc: "Ongoing support" }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <HiCheckCircle className="text-amber-500 text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950">{service.title}</h4>
                      <p className="text-gray-500">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={mobile_app_dev} 
                  alt="Mobile app development" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-950/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Content & Social Media Section */}
        <section className="w-full px-6 md:px-20 py-20 bg-gray-50">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Content & Social Media</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Engage your audience with compelling content strategies that build brand loyalty and drive conversions.
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { title: "Social Strategy", desc: "Strategic planning" },
                  { title: "Content Creation", desc: "Engaging content" },
                  { title: "Community Management", desc: "Audience engagement" },
                  { title: "Analytics", desc: "Performance tracking" }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <HiCheckCircle className="text-amber-500 text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950">{service.title}</h4>
                      <p className="text-gray-500">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={social_media_strategy} 
                  alt="Content and Social Media Strategy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-950/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Remote-Work Outsourcing Section */}
        <section className="w-full px-6 md:px-20 py-20 bg-white">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Remote-Work Outsourcing</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Access top-tier global talent for your projects without the operational overhead.
              </p>

              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { title: "Developers", desc: "Skilled developers" },
                  { title: "Designers", desc: "Creative talent" },
                  { title: "Project Managers", desc: "Expert PMs" },
                  { title: "QA Specialists", desc: "Quality assurance" }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <HiCheckCircle className="text-amber-500 text-2xl group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950">{service.title}</h4>
                      <p className="text-gray-500">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={remote_talent} 
                  alt="Remote talent network" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-950/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Process Section: The Forge Method™ */}
        <section className="w-full px-6 md:px-20 py-24 bg-blue-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our Process: The Forge Method™
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              A proven approach to delivering exceptional digital solutions
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[15%] left-0 w-full h-0.5 bg-amber-500/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { step: "1", title: "Discovery", desc: "Understand your goals and requirements" },
                { step: "2", title: "Design", desc: "Create wireframes and visual designs" },
                { step: "3", title: "Build", desc: "Develop with best practices" },
                { step: "4", title: "QA", desc: "Rigorous testing and refinement" },
                { step: "5", title: "Launch", desc: "Deploy and celebrate success" }
              ].map((item, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-blue-950 flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    {item.step}
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 w-full h-full hover:bg-white/10 transition-colors group">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
