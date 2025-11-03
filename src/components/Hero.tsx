import { HeroType } from "@/types";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import { FaEnvelope, FaHeart, FaPhone } from "react-icons/fa";
import AnimatedHeadline from "./AnimatedHeadline";
import DynamicIcon from "./DynamicIcon";

const Hero = () => {
  const heroData: HeroType = getData("hero");

  return (
    <section className="bg-dark p-8 pb-20 [clip-path:polygon(0_0,100%_0,100%_80%,25%_100%,0_80%)]">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 flex items-center gap-x-4">
          <div className="size-32 relative">
            <Image
              src={heroData.image}
              alt={heroData.name}
              width={176}
              height={176}
              className="rounded-full object-cover size-full"
            />
            <div className="absolute bottom-0 right-0 size-8 rounded-full bg-heading text-white flex items-center justify-center">
              <FaHeart />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-text mb-3">
              {heroData.name}
            </h1>
            <AnimatedHeadline headlines={heroData.roles} />
          </div>
        </div>
        <div className="col-span-1">
          <ul className="flex flex-col gap-y-2">
            <li className="flex">
              <b className="flex items-center gap-x-2 mr-1">
                <FaPhone /> Phone:
              </b>
              <a href={`tel:${heroData.phone}`} className="font-light">
                {heroData.phone}
              </a>
            </li>
            <li className="flex">
              <b className="flex items-center gap-x-2 mr-1">
                <FaEnvelope /> Email:
              </b>
              <a href={`mailto:${heroData.email}`} className="font-light">
                {heroData.email}
              </a>
            </li>
          </ul>

          <ul className="mt-6 flex items-center gap-x-3">
            {heroData.socials.map((social) => (
              <li
                key={social.name}
                className="size-9 rounded-full bg-primary flex items-center justify-center hover:shadow-[0_4px_14px_0_rgba(184,82,96,0.8)] transition-shadow duration-300"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white cursor-pointer"
                >
                  <DynamicIcon icon={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
