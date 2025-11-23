import { motion } from "framer-motion";
import tools from "../assets/tools.png";
import clock from "../assets/clock.png";
import people from "../assets/people.png";
import arrowcrown from "../assets/arrowcrown.png";

const WhyAstroForge = () => {
  const whyAstro = [
    {
      title: "Full-Stack Expertise",
      desc: "From wireframes to launch we build across web, mobile, and content.",
      img: tools,
    },
    {
      title: "Fast, Reliable Delivery",
      desc: "Lean teams, agile methods and timelines built to keep up with your goals.",
      img: clock,
    },
    {
      title: "Remote-First Execution",
      desc: "Our talent model is optimized for global teams, async work, and scale.",
      img: people,
    },
    {
      title: "Strategic Brand Building",
      desc: "We help you define, refine and elevate your brand to stand out in any market.",
      img: arrowcrown,
    },
  ];

  return (
    <main className="w-full px-6 md:px-20 py-20 bg-gray-100 flex flex-col md:gap-10 gap-6">
      <article className="flex flex-col md:gap-3 gap">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Why AstroForge?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Here’s why businesses trust us to build, innovate and deliver
          excellence.
        </p>
      </article>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10"
      >
        {whyAstro.map((service, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-200 border border-gray-300 rounded-2xl shadow-md hover:shadow-md transition-all duration-300 md:p-6 p-3 flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full h-20 md:h-30 rounded-xl overflow-hidden flex items-center justify-center">
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
      </motion.div>
    </main>
  );
};

export default WhyAstroForge;
