import lights from "./assets/lights.svg";
import lightBeams from "./assets/light-beams.svg";
import "./App.css";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let heroRef = useRef([]);

  let imgConRef = useRef();
  let imgRef = useRef();
  let textRef = useRef([]);

  let imgConRef2 = useRef();
  let imgRef2 = useRef();
  let textRef2 = useRef([]);

  let secRef1 = useRef();
  let secRef2 = useRef();

  useEffect(() => {
    let tl = gsap.timeline({ delay: 0.5 });
    tl.from(heroRef.current, 1.5, {
      y: 250,
      ease: "Power3.easeOut",
      stagger: 0.1,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: secRef1.current,
        start: "center bottom",
        ease: "power2",
        toggleActions: "play none none",
        markers: true,
      },
    });
    timeline.from(
      imgRef.current,
      1.5,
      {
        scale: 1.75,
        xPercent: 100,
        ease: "Power3.easeInOut",
      },
      0
    );
    timeline.from(
      imgConRef.current,
      1.5,
      {
        xPercent: -100,
        ease: "Power3.easeInOut",
      },
      0
    );
    timeline.from(
      textRef.current,
      1.5,
      {
        y: 150,
        ease: "Power3.easeOut",
        stagger: 0.1,
      },
      0.5
    );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: secRef2.current,
        start: "center bottom",
        ease: "power2",
        toggleActions: "play none none",
        markers: true,
      },
    });
    timeline2.from(
      imgRef2.current,
      1.5,
      {
        scale: 1.75,
        xPercent: 100,
        ease: "Power3.easeInOut",
      },
      0
    );
    timeline2.from(
      imgConRef2.current,
      1.5,
      {
        xPercent: -100,
        ease: "Power3.easeInOut",
      },
      0
    );
    timeline2.from(
      textRef2.current,
      1.5,
      {
        y: 150,
        ease: "Power3.easeOut",
        stagger: 0.1,
      },
      0.5
    );

    // revealRefs.current.forEach((el, index) => {
    //   const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //       id: `section-${index + 1}`,
    //       trigger: el,
    //       start: "top center+=100",
    //       toggleActions: "play none none",
    //       markers: true,
    //     },
    //   });
    //   tl2.from(
    //     imgConRef.current,
    //     1.5,
    //     {
    //       xPercent: -100,
    //       ease: "Power3.easeInOut",
    //     },
    //     0
    //   );
    //   tl2.from(
    //     imgRef.current,
    //     1.5,
    //     {
    //       scale: 1.75,
    //       xPercent: 100,
    //       ease: "Power3.easeInOut",
    //     },
    //     0
    //   );
    //   tl2.from(
    //     textRef.current,
    //     1.5,
    //     {
    //       x: -20,
    //       opacity: 0,
    //       ease: "Power4.easeInOut",
    //       stagger: 0.1,
    //     },
    //     0.5
    //   );

    // gsap.from(el, {
    //   duration: 1,
    //   autoAlpha: 0,
    //   ease: "Power3.easeInOut",
    //   scrollTrigger: {
    //     id: `section-${index + 1}`,
    //     trigger: el,
    //     start: "top center+=100",
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // });
  }, []);

  return (
    <div className="app">
      <div
        id="noise"
        className="fixed -top-1/2 -left-1/2 pointer-events-none z-0"
      ></div>
      <section id="hero">
        <header className="flex w-3/4 m-auto py-12 gap-12 items-center justify-between z-50 relative overflow-hidden">
          <a
            href="/"
            id="logo"
            className="text-white text-3xl"
            ref={(element) => {
              heroRef.current[0] = element;
            }}
          >
            Logo
          </a>
          <nav>
            <ul
              className="flex gap-12 text-white uppercase"
              ref={(element) => {
                heroRef.current[1] = element;
              }}
            >
              <a
                href="/"
                className="overflow-hidden h-5 transition ease-in-out group"
              >
                <li className="group-hover:-translate-y-5 transition ease-in-out">
                  link
                </li>
                <li className="group-hover:-translate-y-6 transition ease-in-out">
                  link
                </li>
              </a>
              <a
                href="/"
                className="overflow-hidden h-5 transition ease-in-out group"
              >
                <li className="group-hover:-translate-y-5 transition ease-in-out">
                  link
                </li>
                <li className="group-hover:-translate-y-6 transition ease-in-out">
                  link
                </li>
              </a>
              <a
                href="/"
                className="overflow-hidden h-5 transition ease-in-out group"
              >
                <li className="group-hover:-translate-y-5 transition ease-in-out">
                  link
                </li>
                <li className="group-hover:-translate-y-6 transition ease-in-out">
                  link
                </li>
              </a>
            </ul>
          </nav>
        </header>
        <div className="w-3/4 m-auto flex flex-col 2xl:py-32 md:py-16">
          <div className="2xl:w-1/2 md:w-3/5">
            <div className="overflow-hidden">
              <h1
                className="text-white md:text-7xl mb-6 font-semibold"
                ref={(element) => {
                  heroRef.current[2] = element;
                }}
              >
                Lorem ipsum dolor sit amet cons ectetur
              </h1>
            </div>
            <div className="overflow-hidden">
              <p
                className="text-blue-100 w-5/6 mb-8"
                ref={(element) => {
                  heroRef.current[3] = element;
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            <div className="overflow-hidden">
              <a
                href="/"
                className="inline-flex gap-4 text-white items-center 2xl:mt-4 md:mt-0 group"
                ref={(element) => {
                  heroRef.current[4] = element;
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-blue-600 border border-solid border-blue-500 group-hover:bg-transparent transition ease-in-out overflow-hidden relative font-bold">
                  <FiArrowRight />
                </div>
                <div className="uppercase overflow-hidden h-5 transition ease-in-out">
                  <div className="group-hover:-translate-y-5 transition ease-in-out text-sm">
                    {" "}
                    Learn More About Us
                  </div>
                  <div className="group-hover:-translate-y-5 transition ease-in-out text-sm">
                    {" "}
                    Learn More About Us
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex gap-2 w-1/2 2xl:mt-40 md:mt-24">
            <div className="w-1/2 overflow-hidden">
              <div
                ref={(element) => {
                  heroRef.current[5] = element;
                }}
              >
                <div className="numbers text-white mb-4 tracking-widest text-sm ">
                  01
                </div>
                <p className="text-blue-100  mb-8 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip commodo consequat.
                </p>
              </div>
            </div>
            <div className="w-1/2 overflow-hidden">
              <div
                ref={(element) => {
                  heroRef.current[6] = element;
                }}
              >
                <div className="numbers text-white mb-4 tracking-widest text-sm ">
                  02
                </div>
                <p className="text-blue-100  mb-8 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={lights}
          id="lights"
          className="absolute w-2/3 right-0 top-0 pointer-events-none"
          alt="lights"
        />{" "}
        <img
          src={lightBeams}
          id="light-beams"
          className="absolute w-1/3 right-32 top-0 pointer-events-none"
          alt="lights"
        />
      </section>

      <section ref={secRef1}>
        <div className="w-3/4 m-auto flex md:py-32 gap-24 justify-center items-center">
          <div className="w-1/2">
            <div className="h-96 w-full relative overflow-hidden">
              <figure
                className="w-full h-full overflow-hidden relative"
                ref={imgConRef}
              >
                <img
                  className="w-full h-full"
                  alt="test"
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  ref={imgRef}
                />
              </figure>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-5/6">
              <div class="overflow-hidden">
                <h2
                  className="text-5xl font-semibold text-white mb-4"
                  ref={(element) => {
                    textRef.current[0] = element;
                  }}
                >
                  Quis nostrud exercitation ullamco
                </h2>
              </div>
              <div class="overflow-hidden">
                <p
                  className="text-blue-100 w-5/6"
                  ref={(element) => {
                    textRef.current[1] = element;
                  }}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={secRef2}>
        <div className="w-3/4 m-auto flex md:py-32 gap-24 justify-center items-center">
          <div className="w-1/2">
            <div className="ml-20">
              <div class="overflow-hidden">
                <h2
                  className="text-5xl font-semibold text-white mb-4"
                  ref={(element) => {
                    textRef2.current[0] = element;
                  }}
                >
                  Quis nostrud exercitation ullamco
                </h2>
              </div>
              <div class="overflow-hidden">
                <p
                  className="text-blue-100 w-5/6"
                  ref={(element) => {
                    textRef2.current[1] = element;
                  }}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-96 w-full relative overflow-hidden">
              <figure
                className="w-full h-full overflow-hidden relative"
                ref={imgConRef2}
              >
                <img
                  className="w-full h-full"
                  alt="test"
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  ref={imgRef2}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
