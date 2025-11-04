"use client";
import { PortfolioType } from "@/types";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import { FaCommentAlt } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectGallery from "./ProjectGallery";
const Portfolio = () => {
  const portfolioData = getData("portfolio") as unknown as PortfolioType;
  const { testimonials, projects } = portfolioData;

  return (
    <section className="section">
      <h2 className="section-heading text-lg text-white">Portfolio & Work</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {/* Swiper */}
        <div className="md:mt-8 hidden md:block ">
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

        {/* gallery project */}
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
