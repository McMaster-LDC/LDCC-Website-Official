
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Headroom from "react-headroom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/2026-icon.png";

const navLinks = [
  { title: "About", path: "/About" },
  { title: "Agenda", path: "/Agenda" },
  { title: "Sponsors", path: "/Sponsors" },
  { title: "Team", path: "/Team" },
  { title: "FAQ", path: "/FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }

      if (event.key === "Tab") {
        const menu = document.getElementById("ldc-mobile-menu");
        const focusable = menu?.querySelectorAll(
          'a[href], button:not([disabled])'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const handleNavigate = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Headroom style={{ zIndex: 100 }}>
        <nav
          aria-label="Main navigation"
          className="relative w-full border-b-[3px] border-black bg-[var(--mainbeige)] shadow-[0_4px_0_var(--mainyellow)]"
        >
          {/* Equal side columns ensure true centering */}
          <div
            className="
              flex h-[65px] w-full items-center justify-between
              px-6
              lg:grid
              lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
              lg:gap-3 lg:px-8
            "
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={handleNavigate}
              aria-label="LDC Home"
              className="flex shrink-0 items-center justify-self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mainmaroon)]"
            >
              <img
                src={Logo}
                alt="LDC Logo"
                className="h-14 w-auto max-w-[110px] select-none object-contain transition-transform duration-200 hover:scale-105"
                draggable="false"
              />
            </Link>

            {/* Perfectly centered desktop links */}
            <ul className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-2">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={handleNavigate}
                    className={({ isActive }) =>
                      `inline-flex min-h-11 items-center justify-center
                      whitespace-nowrap border-b-[3px] px-2.5 pt-[3px]
                      text-[12px] font-extrabold uppercase
                      tracking-[0.06em] transition-colors duration-200
                      xl:px-3 xl:text-[13px]
                      ${
                        isActive
                          ? "border-[var(--mainmaroon)] text-[var(--mainmaroon)]"
                          : "border-transparent text-black/75 hover:border-[var(--mainyellow)] hover:text-[var(--mainmaroon)]"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right-aligned desktop actions */}
            <div className="hidden shrink-0 items-center justify-self-end gap-3 lg:flex">
              <Link
                to="/UploadResume"
                onClick={handleNavigate}
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap border-2 border-[var(--mainmaroon)] px-3 text-xs font-extrabold uppercase tracking-[0.04em] text-[var(--mainmaroon)] transition-colors duration-200 hover:bg-[var(--mainmaroon)] hover:text-white xl:px-4"
              >
                Upload Resume
              </Link>

              <Link
                to="/Register"
                onClick={handleNavigate}
                className="group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap border-2 border-black bg-[var(--mainyellow)] px-3 text-xs font-black uppercase tracking-[0.04em] text-black shadow-[3px_3px_0_#000] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 xl:px-4"
              >
                Register
                <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="ldc-mobile-menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center border-2 border-black bg-[var(--mainyellow)] text-2xl text-[var(--mainmaroon)] shadow-[3px_3px_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden"
            >
              <FiMenu aria-hidden="true" />
            </button>
          </div>
        </nav>
      </Headroom>

      {/* Full-screen mobile navigation */}
      {open &&
        createPortal(
          <div
            id="ldc-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[200] flex h-[100dvh] w-screen flex-col overflow-y-auto bg-[var(--mainbeige)] lg:hidden"
          >
            <div className="flex min-h-full w-full flex-col">

              {/* Header */}
              <div className="flex h-[65px] shrink-0 items-center justify-between border-b-[3px] border-black px-6">
                <Link
                  to="/"
                  onClick={handleNavigate}
                  aria-label="LDC Home"
                >
                  <img
                    src={Logo}
                    alt="LDC Logo"
                    className="h-14 w-auto max-w-[110px] object-contain"
                    draggable="false"
                  />
                </Link>

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => {
                    setOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  className="flex h-11 w-11 items-center justify-center border-2 border-black bg-[var(--mainyellow)] text-2xl text-[var(--mainmaroon)] shadow-[3px_3px_0_#000]"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>

              {/* Centered mobile navigation */}
              <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-8 sm:px-12">

                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="h-[3px] w-8 bg-[var(--mainmaroon)]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--mainmaroon)]">
                    Explore LDC
                  </span>
                  <span className="h-[3px] w-8 bg-[var(--mainmaroon)]" />
                </div>

                <nav aria-label="Mobile pages">
                  <ul className="flex flex-col">
                    {navLinks.map((item) => (
                      <li
                        key={item.path}
                        className="border-b border-black/20"
                      >
                        <NavLink
                          to={item.path}
                          onClick={handleNavigate}
                          className={({ isActive }) =>
                            `group relative flex min-h-[68px] w-full
                            items-center justify-center py-3
                            text-center transition-colors duration-200
                            ${
                              isActive
                                ? "text-[var(--mainmaroon)]"
                                : "text-black hover:text-[var(--mainmaroon)]"
                            }`
                          }
                        >
                          <span
                            className="text-[clamp(2.2rem,9vw,3.5rem)] uppercase leading-none tracking-[0.025em]"
                            style={{
                              fontFamily: '"Bangers", Impact, sans-serif',
                            }}
                          >
                            {item.title}
                          </span>

                          <FiArrowUpRight
                            aria-hidden="true"
                            className="absolute right-0 text-xl transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Bottom actions */}
              <div className="w-full shrink-0 border-t-2 border-black/15 px-6 py-6">
                <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-3">
                  <Link
                    to="/UploadResume"
                    onClick={handleNavigate}
                    className="flex min-h-14 items-center justify-center border-2 border-[var(--mainmaroon)] px-2 text-center text-xs font-extrabold uppercase tracking-[0.04em] text-[var(--mainmaroon)] transition-colors hover:bg-[var(--mainmaroon)] hover:text-white"
                  >
                    Upload Resume
                  </Link>

                  <Link
                    to="/Register"
                    onClick={handleNavigate}
                    className="flex min-h-14 items-center justify-center gap-2 border-2 border-black bg-[var(--mainyellow)] px-2 text-center text-xs font-black uppercase tracking-[0.04em] text-black shadow-[3px_3px_0_#000]"
                  >
                    Register
                    <FiArrowUpRight aria-hidden="true" className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
