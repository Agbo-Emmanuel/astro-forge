import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="relative w-full min-h-screen bg-blue-950 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-40 pb-16 md:gap-10 gap-2 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-10 h-10 rounded-full bg-amber-500 blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-24 left-32 w-6 h-6 rounded-full bg-amber-500 blur-[2px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-32 right-24 w-8 h-8 rounded-full bg-amber-500 blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-14 right-10 w-12 h-12 rounded-full bg-amber-500 blur-sm"
      />

      <motion.article
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col md:gap-6 gap-3"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white text-4xl md:text-7xl lg:text-8xl font-semibold md:leading-28 leading-12 text-center md:text-left"
        >
          We Forge Your Digital Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white text-base md:text-lg lg:text-xl max-w-lg md:text-left text-center"
        >
          End-to-end websites, apps, content & talent built to scale. Start
          fast, grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row md:gap-6 gap-4 mt-6"
        >
          <button className="px-8 py-3 bg-amber-500 rounded-md text-lg font-medium hover:bg-amber-600 transition cursor-pointer">
            Get a Quote
          </button>

          <button className="px-8 py-3 border border-gray-200 text-white rounded-md text-lg font-medium hover:bg-white hover:text-blue-950 transition cursor-pointer">
            View Our Work
          </button>
        </motion.div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-max flex justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] 
              rounded-full bg-red-500 shadow-2xl"
        />
      </motion.article>
    </main>
  );
};

export default Hero;
