import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

const CaseStudy = () => {
  const caseStudy = [
    {
      title: "EcomRevamp 2.0",
      desc: "D2C Retail",
      img: "",
    },
    {
      title: "LaunchMate MVP",
      desc: "Saas / Startups",
      img: "",
    },
    {
      title: "ContentOps Boost",
      desc: "Marketing / Media",
      img: "",
    },
  ];

  return (
    <main className="w-full px-6 md:px-20 p-16 bg-blue-950 flex flex-col md:gap-10 gap-6 rounded-t-[60px]">
      <article className="flex flex-col md:gap-3 gap">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-100">
          Featured Work / Case Studies
        </h2>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Explore how we’ve forged digital solutions for others
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
        {caseStudy.map((study, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-200 border border-gray-300 rounded-2xl shadow-md hover:shadow-md transition-all duration-300 md:p-6 p-3 flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full h-20 md:h-40 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={study.img}
                alt={study.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 md:text-left text-center">
              {study.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed md:text-left text-center">
              {study.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <article className="w-full flex justify-center mt-8">
        <button className="flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 bg-transparent hover:bg-blue-900 transition-colors duration-300 rounded-lg shadow-md text-white font-semibold text-lg md:text-xl cursor-pointer">
          <span>View All Projects</span>
          <IoMdArrowForward className="text-2xl md:text-3xl" />
        </button>
      </article>
    </main>
  );
};

export default CaseStudy;
