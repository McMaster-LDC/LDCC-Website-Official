
import { useLayoutEffect, useRef, useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdArrowOutward } from "react-icons/md";

import "./Hero.css";
import eventInfo from "../../data/eventInfo";
import SPEEDLINE_PATHS from "./speedlinePaths";
import ComicCloud from "../../assets/comic-cloud.png";

const HALFTONE_DOTS = (() => {
  const dots = [];

  for (let row = 0, y = 0; y <= 1040; row++, y += 22) {
    for (let x = (row % 2) * 11; x <= 736; x += 22) {
      dots.push({ x, y });
    }
  }

  return dots;
})();

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

const PANEL =
  "border-2 border-black bg-[var(--mainbeige)] shadow-[4px_4px_0_var(--mainyellow)] font-['Moderustic',sans-serif] tracking-[0.06em] sm:tracking-[0.12em]";

const TITLE_OUTLINE =
  "[-webkit-text-stroke:clamp(1.5px,0.8vw,10px)_#000] [paint-order:stroke_fill]";

const Hero = () => {
  const heroRef = useRef(null);

  // Do not render dots before their dimensions are calculated.
  const [dotRadius, setDotRadius] = useState(null);

  // Calculate before paint to prevent stretched dots on first load.
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const resize = () => {
      const { width, height } = hero.getBoundingClientRect();

      if (!width || !height) return;

      const radius = Math.min(4, Math.max(1.25, width / 200));

      setDotRadius({
        rx: (radius * 736) / width,
        ry: (radius * 1040) / height,
      });
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[calc(100dvh-68px)] w-full flex-col overflow-hidden bg-[var(--mainmaroon)]"
    >
      {/* Background artwork */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 736 1040"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-content-fade">
            <stop
              offset="0%"
              stopColor="var(--mainmaroon)"
              stopOpacity="0.98"
            />
            <stop
              offset="60%"
              stopColor="var(--mainmaroon)"
              stopOpacity="0.9"
            />
            <stop
              offset="100%"
              stopColor="var(--mainmaroon)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* Halftone dots - rendered only once correctly sized */}
        {dotRadius && (
          <g fill="#000000" opacity="0.8">
            {HALFTONE_DOTS.map(({ x, y }, index) => (
              <ellipse
                key={index}
                cx={x}
                cy={y}
                rx={dotRadius.rx}
                ry={dotRadius.ry}
              />
            ))}
          </g>
        )}

        {/* Comic speedlines */}
        <g className="motion-safe:animate-[comic-rush_900ms_ease-out_both]">
          {SPEEDLINE_PATHS.map((path, index) => (
            <path
              key={index}
              d={path}
              fill={
                index % 3 === 0
                  ? "#000"
                  : "var(--mainyellow)"
              }
            />
          ))}
        </g>

        {/* Center fade */}
        <circle
          cx="368"
          cy="520"
          r="210"
          fill="url(#hero-content-fade)"
        />
      </svg>

      {/* Comic cloud */}
      <img
        src={ComicCloud}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[45%] z-[1] w-[min(99%,760px)] -translate-x-1/2 -translate-y-1/2 select-none"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-3 py-5 text-center sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="motion-safe:animate-[comic-drop_650ms_ease-out_50ms_both]">
          <span
            className={`${PANEL} inline-flex -rotate-2 items-center gap-2 px-3 py-1.5 text-xs font-extrabold uppercase text-[var(--mainmaroon)]`}
          >
            <span
              className="h-2 w-2 bg-[var(--mainmaroon)]"
              aria-hidden="true"
            />
            McMaster Engineering Presents
          </span>
        </div>

        {/* Event information */}
        <div
          className={`${PANEL} mt-[clamp(0.5rem,1.5svh,1rem)] flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 py-1.5 text-[clamp(0.56rem,1.05vw,0.83rem)] font-extrabold uppercase text-[var(--mainmaroon)] motion-safe:animate-[comic-drop_650ms_ease-out_150ms_both]`}
        >
          <span>{eventInfo.date}</span>
          <span aria-hidden="true">•</span>
          <span>IN PERSON EVENT</span>
          <span aria-hidden="true">•</span>
          <span>{eventInfo.location}</span>
        </div>

        {/* Main title */}
        <div className="mx-auto mt-5 w-full [container-type:inline-size]">
          <h1 className="grid w-full justify-items-center gap-[clamp(0.12rem,0.6svh,0.5rem)] font-['Bangers',Impact,sans-serif] font-normal uppercase leading-[0.88] tracking-[0.015em]">

            {/* Leadership */}
            <span
              className={`${TITLE_OUTLINE} -rotate-[1.5deg] whitespace-nowrap text-[clamp(3.5rem,8cqw,10rem)] text-[var(--mainyellow)] max-sm:text-[clamp(2.25rem,15cqw,5rem)]`}
            >
              <span className="block motion-safe:animate-[comic-drop_800ms_ease-out_250ms_both]">
                Leadership
              </span>
            </span>

            {/* Development */}
            <span className="rotate-[1deg] whitespace-nowrap">
              <span className="block motion-safe:animate-[comic-swipe_850ms_ease-out_400ms_both]">
                <span
                  className={`${TITLE_OUTLINE} block bg-[var(--mainyellow)] px-[0.16em] pb-[0.11em] pt-[0.13em] text-[clamp(4rem,10cqw,10.6rem)] leading-[0.92] text-[var(--mainmaroon)] [clip-path:polygon(2%_0%,100%_5%,98%_100%,0%_95%)] max-sm:text-[clamp(2.3rem,18cqw,4rem)]`}
                >
                  Development
                </span>
              </span>
            </span>

            {/* Conference and year */}
            <span className="flex -rotate-[1deg] items-center justify-center gap-[0.16em] whitespace-nowrap text-[var(--mainyellow)]">

              <span
                className={`${TITLE_OUTLINE} block text-[clamp(3.5rem,8cqw,8.5rem)] max-sm:text-[clamp(2.25rem,15cqw,5rem)] motion-safe:animate-[comic-drop_800ms_ease-out_620ms_both]`}
              >
                Conference
              </span>

              {/* Year sticker */}
              <span className="rotate-[7deg]">
                <span
                  className={`${TITLE_OUTLINE} block bg-[var(--mainyellow)] px-[0.12em] pb-[0.04em] pt-[0.1em] text-[clamp(2rem,4cqw,4.2rem)] leading-none text-[var(--mainmaroon)] max-sm:text-[clamp(1.1rem,5cqw,2rem)] motion-safe:animate-[comic-sticker_680ms_ease-out_950ms_both]`}
                >
                  '27
                </span>
              </span>

            </span>
          </h1>
        </div>

        {/* Description */}
        <p
          className={`${PANEL} mt-[clamp(0.75rem,2svh,1.4rem)] max-w-[620px] -rotate-1 px-4 py-2 text-[clamp(0.7rem,1.35vw,1rem)] font-medium uppercase leading-snug text-[var(--mainmaroon)] motion-safe:animate-[comic-drop_700ms_ease-out_950ms_both]`}
        >
          Join McMaster Engineering students at the
          <strong className="font-extrabold">
            {" "}largest student-run engineering conference!
          </strong>
        </p>

        {/* Sponsor CTA */}
        <div className="mt-4 motion-safe:animate-[comic-drop_700ms_ease-out_1050ms_both]">
          <a
            href="mailto:ldcc@macengsociety.ca?subject=LDC%202027%20Sponsorship"
            className={`${PANEL} group inline-flex max-w-[90vw] -rotate-1 items-center justify-center gap-2 px-4 py-2 text-center text-xs font-extrabold uppercase text-[var(--mainmaroon)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4`}
          >
            Interested in becoming a sponsor?

            <MdArrowOutward className="shrink-0 text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Social links */}
        <div className="mt-5 flex items-center justify-center gap-3 motion-safe:animate-[comic-drop_650ms_ease-out_1150ms_both]">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={link.name}
              title={link.name}
              className={`${PANEL} flex h-10 w-10 items-center justify-center text-xl text-[var(--mainmaroon)]
                transition-all duration-200 ease-out
                hover:-translate-y-1
                hover:rotate-0
                hover:bg-white
                hover:shadow-[6px_6px_0_var(--mainyellow)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                motion-reduce:transition-none
                ${index % 2 === 0 ? "-rotate-6" : "rotate-6"}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
