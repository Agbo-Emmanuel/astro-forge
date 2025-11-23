import guy_coding from "../assets/guy_coding.jpg";

const NewsLetterSign = () => {
  return (
    <>
      <main
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${guy_coding})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <section className="relative w-full px-6 md:px-20 py-20 md:py-32 flex flex-col gap-8">
          <h1 className="text-gray-100 text-4xl md:text-6xl font-semibold leading-tight md:leading-[1.2]">
            Want Insights on <br /> Digital Growth?
          </h1>

          <div>
            <p className="text-gray-200 text-lg md:text-xl font-medium">
              Newsletter Signup
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
              <input
                placeholder="Enter your email address"
                className="w-full md:w-[350px] h-[50px] border border-gray-200/70 rounded-md px-4 text-gray-100 bg-white/10 backdrop-blur-sm placeholder-gray-300 outline-none"
              />

              <button className="w-full md:w-auto px-8 py-3 bg-amber-500 rounded-md text-lg font-medium hover:bg-amber-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsLetterSign;
