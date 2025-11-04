import { HeroType } from "@/types";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import { FaEnvelope, FaHeart, FaPhoneAlt } from "react-icons/fa";
import AnimatedHeadline from "./AnimatedHeadline";
import DynamicIcon from "./DynamicIcon";
import WaterRipple from "./WaterRipple";

const Hero = () => {
  const heroData: HeroType = getData("hero") as HeroType;

  return (
    <WaterRipple className="bg-dark p-8 md:pb-20 md:[clip-path:polygon(0_0,100%_0,100%_80%,25%_100%,0_80%)]">
      <section>
        <div className="grid md:grid-cols-3 items-center gap-y-12">
          <div className="md:col-span-2 flex items-center gap-x-4">
            <div className="size-32 relative ">
              <Image
                src={heroData.image}
                alt={heroData.name}
                width={176}
                height={176}
                className="rounded-full object-cover size-full relative z-10"
              />
              <div className="absolute bottom-0 right-0 size-8 rounded-full bg-primary text-white flex items-center justify-center z-20">
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
          <div className="md:col-span-1">
            <ul className="flex flex-col gap-y-2">
              <li className="flex">
                <b className="flex items-center gap-x-2 mr-1">
                  <FaPhoneAlt /> Phone:
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
                  className="size-9 rounded-full bg-secondary flex items-center justify-center hover:shadow-[0_4px_14px_0_rgba(184,82,96,0.8)] transition-shadow duration-300"
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
    </WaterRipple>
  );
};

export default Hero;
