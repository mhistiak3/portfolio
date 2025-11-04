"use client";
import { PortfolioType } from "@/types";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import { FaCommentAlt } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
  const portfolioData: PortfolioType = getData("portfolio") as PortfolioType;
  return (
    <section className="section">
      <h2 className="section-heading text-lg text-white">Portfolio & Work</h2>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} loop={true}>
            {portfolioData.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center text-center lg:w-11/12 mx-auto">
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
      </div>
    </section>
  );
};

export default Portfolio;
