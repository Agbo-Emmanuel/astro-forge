import React from "react";
import { motion } from "framer-motion";
import services_hero from "../assets/services_hero.png";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technology",
      color: "amber"
    },
    {
      id: 2,
      title: "Quality",
      description: "We deliver excellence in every project, big or small",
      color: "amber"
    },
    {
      id: 3,
      title: "Collaboration",
      description: "Your success is our success—we work as partners",
      color: "amber"
    },
    {
      id: 4,
      title: "Integrity",
      description: "Transparent communication and honest timelines",
      color: "amber"
    }
  ];

  const teamMembers = [
    {
      name: "Ejike Benjamin",
      role: "CEO & Founder",
      subRole: "Full Stack Programmer",
      description: "10+ years in programming-website and mobile app development"
    },
    {
      name: "Okoyeocha Kenneth",
      role: "Head of Design",
      subRole: "UI/UX Designer/Product Designer",
      description: "2 years+ in UI/UX design and product designer"
    },
    {
      name: "Sam Martinez",
      role: "Content Writer",
      subRole: "Marketing Specialist",
      description: "2 years+ in creating compelling digital content and strategy"
    },
    {
      name: "Jamie Park",
      role: "CTO",
      subRole: "System Architect",
      description: "Expert in scalable architectures and cloud infrastructure"
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
            About Astro Forge
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Forging digital excellence since 2025
          </p>
        </motion.div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.05)_0%,transparent_50%)] pointer-events-none" />
      </section>

      {/* Our Values Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <span className="text-2xl font-bold text-amber-600 group-hover:text-white">
                    {value.id}
                  </span>
                </div> 
                <h3 className="text-xl font-bold text-blue-950 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Culture Section */}
      <section className="w-full py-24 bg-blue-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Our Culture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            At Astroforge, we believe in fostering a collaborative, innovative environment where creativity thrives. We're remote-first, globally distributed, and united by our passion for creating exceptional digital experiences.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { label: "Team Members", value: "50+" },
              { label: "Projects Completed", value: "500+" },
              { label: "Satisfied Clients", value: "50+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <span className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-gray-400 uppercase tracking-widest font-semibold text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
            >
              Meet the Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500"
            >
              The people behind AstroForge's success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-4xl font-bold">AF</span>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-950 transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-amber-500 font-bold uppercase tracking-wider text-sm">
                      {member.role}
                    </span>
                    {member.subRole && (
                      <span className="text-amber-400 font-medium text-xs">
                        {member.subRole}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to forge the future?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Let's combine our expertise with your vision to create something extraordinary.
            </p>
            <button className="px-10 py-4 bg-amber-500 text-blue-950 font-bold cursor-pointer rounded-full hover:bg-amber-400 hover:scale-105 transition-all shadow-lg">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
