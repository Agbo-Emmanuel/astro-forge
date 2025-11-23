import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimony = () => {
  const testimonies = [
    {
      name: "Rachel",
      role: "Founder, SaaS Startup",
      message:
        "The mobile app launch was flawless - UX, dev, QA, all in sync. We were live faster than expected.",
    },
    {
      name: "James",
      role: "CMO, D2C Brand",
      message:
        "Astroforge rebuilt our entire ecom presence - results in just 6 weeks! Their speed and design clarity are unmatched.",
    },
    {
      name: "Anil",
      role: "Ops Manager, SMB",
      message:
        "Their remote dev team felt like an extension of ours. On time, high quality, zero micromanagement.",
    },
    {
      name: "Priya",
      role: "Marketing Lead, Wellness Brand",
      message:
        "Content, scheduling, analytics - it all works beautifully now. Their social team knows what performance means.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-gray-100 flex flex-col md:gap-10 gap-6">
      <article className="flex flex-col md:gap-3 gap">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Trusted by startups, brands & growing businesses
        </p>
      </article>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next", // custom next button
          prevEl: ".custom-prev", // custom prev button
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full overflow-hidden"
      >
        {testimonies.map((testimony, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="bg-gray-200 border border-gray-300 rounded-2xl shadow-md hover:shadow-md transition-all duration-300 md:p-6 p-3 flex flex-col gap-3 md:gap-4"
            >
              <FaQuoteLeft className="text-blue-950 text-3xl" />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1">
                {testimony.message}
              </p>
              <div className="mt-4">
                <h4 className="text-gray-900 font-semibold text-lg md:text-xl">
                  {testimony.name}
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                  {testimony.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom arrows */}
        <button className="custom-prev w-[50px] h-[50px] flex justify-center items-center text-gray-100 text-2xl absolute top-1/2 -translate-y-1/2 z-20 bg-blue-950 p-4 rounded-full shadow-md cursor-pointer">
          <IoIosArrowBack />
        </button>
        <button className="custom-next w-[50px] h-[50px] flex justify-center items-center text-gray-50 text-2xl absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-blue-950 p-4 rounded-full shadow-md cursor-pointer">
          <IoIosArrowForward />
        </button>
      </Swiper>
    </section>
  );
};

export default Testimony;
