"use client";
import { Testimonial } from "@/types";
import Image from "next/image";
import { FaCommentAlt } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div className=" ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        touchRatio={0.9}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center lg:w-11/12 mx-auto ">
              <FaCommentAlt className="text-4xl text-primary mb-4" />
              <p className="mb-6">{testimonial.feedback}</p>

              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full size-14 object-cover mb-2"
              />
              <h3 className="text-lg font-medium text-primary mb-1">
                - {testimonial.name}
              </h3>
              <span className="text-sm">{testimonial.position}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
