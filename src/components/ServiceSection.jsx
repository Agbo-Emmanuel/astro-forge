import { motion } from "framer-motion";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import trumpet from "../assets/trumpet.png";
import globe from "../assets/globe.png";

const ServiceSection = () => {
  const services = [
    {
      title: "Website Development",
      desc: "We build fast, scalable and visually stunning websites tailored to your brand and business goals.",
      img: web,
    },
    {
      title: "Mobile App Development",
      desc: "From concept to launch, we create intuitive and high-performing mobile applications.",
      img: mobile,
    },
    {
      title: "Content Creation & Social Media Strategy",
      desc: "Boost your online presence with strategic content and growth-focused social media management.",
      img: trumpet,
    },
    {
      title: "Remote Work Outsourcing",
      desc: "Hire skilled remote talents to scale your business operations efficiently and cost-effectively.",
      img: globe,
    },
  ];

  return (
    <main className="w-full px-6 md:px-20 pt-16 bg-gray-100 flex flex-col md:gap-10 gap-6">
      <h1 className="md:text-4xl text-2xl text-gray-900 font-semibold">
        Our Services
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-10">
        {services.map((service, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-xl shadow-md hover:shadow-md border border-gray-300 transition md:p-6 p-3 flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full h-20 md:h-30 rounded-lg overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 md:text-left text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed md:text-left text-center">
              {service.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default ServiceSection;
