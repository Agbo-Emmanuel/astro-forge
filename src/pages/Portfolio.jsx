import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services_hero from "../assets/services_hero.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Website", "Mobile App", "Content"];

  const projects = [
    {
      id: 1,
      category: "Website",
      client: "MR CUSTOMA",
      title: "E-commerce Platform",
      challenge: "Build a scalable e-commerce platform for 10,000+ products with affiliate marketing options",
      solution: "Custom-built platform with advanced filtering and cart management and created a platform for affiliates and business owners",
      results: "300% increase in online sales within 6 months",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      id: 2,
      category: "Mobile App",
      client: "FitLife",
      title: "Fitness Tracking App",
      challenge: "Create an engaging fitness app with real-time tracking",
      solution: "Cross-platform app with AI-powered workout recommendations",
      results: "50,000+ downloads in first 3 months",
      tech: ["React Native", "Firebase", "Tensorflow"]
    },
    {
      id: 3,
      category: "Content",
      client: "EcoWear",
      title: "Social Media Campaign",
      challenge: "Build brand awareness for a sustainable fashion startup",
      solution: "Multi-platform content strategy with influencer partnerships",
      results: "500% growth in followers, 200% increase in engagement",
      tech: ["Instagram", "TikTok", "LinkedIn", "Canva"]
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section 
        className="w-full pt-48 pb-32 flex flex-col items-center justify-center relative bg-blue-950 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${services_hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Decorative Light Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium text-center">
            Explore our successful projects and see how we've helped businesses grow
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-12 border-b border-gray-100 sticky top-20 bg-white z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-base font-medium transition-all duration-300 border-2 cursor-pointer
                ${filter === cat 
                  ? "bg-blue-950 text-white border-blue-950 shadow-lg" 
                  : "bg-white text-gray-600 border-gray-100 hover:border-blue-950 hover:text-blue-950"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 px-6 md:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full group"
                >
                  {/* Image Area */}
                  <div className="w-full aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-blue-950/5 group-hover:bg-blue-950/0 transition-colors duration-300" />
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-1.5 bg-amber-500/10 text-amber-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-blue-950 mb-6 group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>

                    <div className="space-y-6 flex-grow">
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Results:</h4>
                        <p className="text-amber-500 text-sm font-bold leading-relaxed">{project.results}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-8 pt-6 border-t border-gray-50">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-[10px] font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Success Story CTA Section */}
      <section className="w-full py-24 bg-blue-950 text-white overflow-hidden relative">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-950/50 opacity-50" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Be Our Next Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-12"
          >
            Let's create something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-12 py-4 bg-amber-500 text-blue-950 font-bold rounded-xl text-lg hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
