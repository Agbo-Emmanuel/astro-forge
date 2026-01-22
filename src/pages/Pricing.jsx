import React from "react";
import { motion } from "framer-motion";
import { HiCheck, HiX, HiStar } from "react-icons/hi";
import services_hero from "../assets/services_hero.png";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      subtitle: "Perfect for small businesses",
      price: "5,000",
      bestFor: ["Startups", "Small Businesses", "Personal Brands"],
      buttonText: "Get Started",
      featured: false,
      features: [
        { name: "5-page responsive website", included: true },
        { name: "Mobile-optimized design", included: true },
        { name: "Basic SEO setup", included: true },
        { name: "Contact form integration", included: true },
        { name: "30 days of support", included: true },
        { name: "E-commerce functionality", included: false },
        { name: "Custom CMS", included: false },
        { name: "Advanced analytics", included: false }
      ]
    },
    {
      name: "Professional",
      subtitle: "For growing businesses",
      price: "15,000",
      bestFor: ["Growing Companies", "E-commerce", "Service Providers"],
      buttonText: "Most Popular",
      featured: true,
      features: [
        { name: "Up to 15-page website", included: true },
        { name: "Advanced responsive design", included: true },
        { name: "Full SEO optimization", included: true },
        { name: "E-commerce integration", included: true },
        { name: "Custom CMS setup", included: true },
        { name: "Advanced analytics", included: true },
        { name: "90 days of support", included: true },
        { name: "Performance optimization", included: true }
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Custom solutions at scale",
      price: "Custom",
      priceLabel: "pricing",
      bestFor: ["Large Enterprises", "Complex Projects", "Multi-site Solutions"],
      buttonText: "Contact Sales",
      featured: false,
      features: [
        { name: "Unlimited pages", included: true },
        { name: "Custom design system", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Multi-language support", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Priority support (24/7)", included: true },
        { name: "Custom features & APIs", included: true },
        { name: "White-label options", included: true }
      ]
    }
  ];

  const addOns = [
    {
      category: "Development",
      items: [
        { name: "Mobile App/iOS", desc: "Native or cross-platform mobile applications", price: "$20,000+" },
        { name: "Progressive Web App (PWA)", desc: "App-like experience in the browser", price: "$8,000+" },
        { name: "API Development", desc: "Custom REST or GraphQL APIs", price: "$5,000+" },
        { name: "Third-party Integrations", desc: "Connect with external services", price: "$2,000+" }
      ]
    },
    {
      category: "Design",
      items: [
        { name: "Custom Illustrations", desc: "Unique branded illustrations", price: "$1,500+" },
        { name: "Logo Design", desc: "Complete brand identity", price: "$1,500+" },
        { name: "UI/UX Audit", desc: "Comprehensive usability analysis", price: "$3,000+" },
        { name: "Design System", desc: "Scalable component library", price: "$5,000+" }
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Content Strategy", desc: "Monthly content planning and creation", price: "$2,000/month" },
        { name: "Social Media Management", desc: "Daily posting and engagement", price: "$1,500/month" },
        { name: "SEO Campaign", desc: "Ongoing SEO optimization", price: "$3,000/month" },
        { name: "Email Marketing", desc: "Campaign design and automation", price: "$1,000/month" }
      ]
    },
    {
      category: "Support & Maintenance",
      items: [
        { name: "Basic Maintenance", desc: "Updates and security patches", price: "$500/month" },
        { name: "Premium Maintenance", desc: "Priority support + monthly updates", price: "$1,500/month" },
        { name: "Hosting & Infrastructure", desc: "Managed cloud hosting", price: "$200+/month" },
        { name: "Performance Monitoring", desc: "24/7 uptime monitoring", price: "$800/month" }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in the starting price?",
      answer: "The starting price includes all features listed in your chosen package. Additional costs may apply for add-on services or custom features beyond the package scope."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans with 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "What if I need something custom?",
      answer: "Our Enterprise package is fully customizable. We'll work with you to understand your unique requirements and create a tailored solution with transparent pricing."
    },
    {
      question: "How long does a typical project take?",
      answer: "Starter packages typically take 4-6 weeks, Professional 8-12 weeks, and Enterprise projects are scoped individually. Timeline depends on project complexity and client feedback cycles."
    },
    {
      question: "What happens after the support period ends?",
      answer: "After your included support period, you can choose from our monthly maintenance plans starting at $500/month, or opt for on-demand support at our standard hourly rate."
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
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            Choose the perfect package for your business needs. No hidden fees, just honest pricing.
          </p>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.05)_0%,transparent_50%)] pointer-events-none" />
      </section>

      {/* Pricing Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
            >
              Website Packages
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500"
            >
              Select the package that best fits your business goals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col relative rounded-3xl p-8 bg-white transition-all duration-300 border-2
                  ${pkg.featured 
                    ? "border-amber-500 shadow-2xl scale-105 z-10" 
                    : "border-gray-100 shadow-sm hover:shadow-xl"
                  }
                `}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-950 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <HiStar /> Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-blue-950 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{pkg.subtitle}</p>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                      {pkg.priceLabel || "Starting at"}
                    </span>
                    <div className="flex items-baseline gap-1">
                      {pkg.price !== "Custom" && <span className="text-2xl font-bold text-blue-950">$</span>}
                      <span className="text-5xl font-extrabold text-blue-950">{pkg.price}</span>
                    </div>
                    <span className="text-gray-400 text-xs font-medium">per project</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <HiCheck className="text-amber-500 text-lg mt-0.5" />
                      ) : (
                        <HiX className="text-blue-950/30 text-lg mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
                      Best for:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pkg.bestFor.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-[10px] font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer
                    ${pkg.featured 
                      ? "bg-amber-500 text-blue-950 hover:bg-amber-400" 
                      : "bg-blue-950 text-white hover:bg-blue-900"
                    }
                  `}>
                    {pkg.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-gray-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
            >
              Add-On Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500"
            >
              Enhance your package with additional services tailored to your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {addOns.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-blue-950 mb-8 px-2 flex items-center gap-3">
                  <div className="w-2 h-8 bg-amber-500 rounded-full" />
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div 
                      key={i} 
                      className={`pb-6 ${i !== category.items.length - 1 ? "border-bottom border-gray-100" : ""}`}
                      style={{ borderBottom: i !== category.items.length - 1 ? '1px solid #f3f4f6' : 'none' }}
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight uppercase tracking-wide">
                          {item.name}
                        </h4>
                        <span className="text-amber-600 font-extrabold text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-[80%] font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-blue-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Let's discuss your project and find the right solution for your needs
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-8 py-4 bg-amber-500 text-blue-950 font-bold rounded-xl hover:bg-amber-400 transition-all duration-300 w-full sm:w-auto cursor-pointer">
              Get a Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto cursor-pointer">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(30,64,175,0.1)_0%,transparent_50%)] pointer-events-none" />
      </section>
    </main>
  );
};

export default Pricing;
