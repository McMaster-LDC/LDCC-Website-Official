
import "./Hero.css";

import LDCBanner from "/src/assets/Bg-Fc.png";
import LDCBannerMob from "/src/assets/Bg-Mc.png";

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdArrowOutward } from "react-icons/md";

const Hero = () => {
  const dateOfEvent = "January 30, 2027";

  const links = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ldc_maceng/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mcmaster-engineering-leadership-development-conference-9169aa29b/?originalSubdomain=ca",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:ldcc@macengsociety.ca",
      icon: <MdEmail />,
    },
  ];

  return (
    <section className="ldc-hero relative isolate flex h-screen w-full justify-center overflow-hidden px-5 pt-10 text-center sm:px-8 md:pt-12 lg:pt-10">

=      <img
        src={LDCBanner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-screen w-full bg-cover bg-bottom pt-10 opacity-90 select-none md:flex"
      />

      <img
        src={LDCBannerMob}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex h-screen w-full bg-cover bg-bottom pt-32 opacity-90 select-none md:hidden"
      />

      {/* Gradient above background images */}
      <div
        className="ldc-gradient-overlay pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">

        {/* Badge */}
        <div className="hero-reveal hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6D8DA] bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#9F1B27]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#243F60] sm:text-[11px]">
            McMaster Engineering Presents
          </span>
        </div>

        {/* Main title */}
        <h1 className="hero-reveal hero-title ldc-title flex flex-col items-center">
          <span>Leadership</span>
          <span>Development</span>
          <span className="ldc-title-accent">
            Conference '27
          </span>
        </h1>

        {/* Event details */}
        <div className="hero-reveal hero-details mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs font-semibold text-[#31516C] sm:text-sm md:mt-7 lg:text-base">
          <span>{dateOfEvent}</span>

          <span className="text-[#B77A7A]">•</span>

          <span>In-Person Event</span>

          <span className="text-[#B77A7A]">•</span>

          <span>McMaster University</span>
        </div>

        {/* Description */}
        <p className="hero-reveal hero-description mt-5 max-w-xl text-sm leading-relaxed text-[#294D6A] sm:text-base md:mt-6 lg:text-lg">
          Join us for McMaster’s{" "}
          <strong className="font-bold">
            annual student run engineering conference
          </strong>
        </p>

        {/* Sponsor button */}
        <a
          href="mailto:ldcc@macengsociety.ca"
          className="hero-reveal hero-sponsor group mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#741A2C] px-6 py-3 text-xs font-bold text-white shadow-[0_6px_14px_rgba(82,18,31,0.18)] transition-[background-color,box-shadow] duration-300 hover:bg-[#591322] hover:shadow-[0_10px_22px_rgba(82,18,31,0.25)] sm:text-sm"
        >
          Interested in becoming a sponsor?

          <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        {/* Social links */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {links.map((link, index) => (
            <span
              key={link.name}
              className="hero-social-entry"
              style={{
                animationDelay: `${0.75 + index * 0.12}s`,
              }}
            >
              <a
                href={link.url}
                aria-label={link.name}
                title={link.name}
                target={
                  link.name === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="hero-social-link flex h-10 w-10 items-center justify-center rounded-full bg-[#F7E5E7]/95 text-lg text-[#294D6A] transition-[background-color,color,box-shadow,transform] duration-300 hover:bg-[#741A2C] hover:text-white hover:shadow-lg sm:h-11 sm:w-11"
              >
                {link.icon}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
