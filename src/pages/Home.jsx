import Hero from "../components/Hero";
import { motion } from "framer-motion";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import trumpet from "../assets/trumpet.png";
import globe from "../assets/globe.png";

const Home = () => {
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
    <main className="w-full">
      <Hero />
      <section className="w-full px-6 md:px-20 py-16 bg-gray-100 flex flex-col gap-10">
        <h1 className="text-4xl text-gray-900 font-semibold">Our Services</h1>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-xl shadow-md hover:shadow-md border border-gray-300 transition p-6 flex flex-col gap-4"
            >
              {/* IMAGE */}
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
