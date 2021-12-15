import lights from "./assets/lights.svg";
import lightBeams from "./assets/light-beams.svg";
import "./App.css";
import { FiArrowRight } from "react-icons/fi";

function App() {
  return (
    <div className="app">
      <div
        id="noise"
        class="fixed -top-1/2 -left-1/2 pointer-events-none z-0"
      ></div>
      <section id="hero">
        <header className="flex w-3/4 m-auto py-12 gap-12 items-center justify-between z-50 relative">
          <a href="/" id="logo" className="text-white text-3xl">
            Logo
          </a>
          <nav>
            <ul className="flex gap-12 text-white uppercase">
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
            <h1 className="text-white md:text-7xl mb-6 font-semibold">
              Lorem ipsum dolor sit amet cons ectetur
            </h1>
            <p className="text-white w-5/6 opacity-70 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a
              href="/"
              className="inline-flex gap-4 text-white items-center 2xl:mt-4 md:mt-0 group"
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
          <div className="flex gap-2 w-1/2 2xl:mt-40 md:mt-24">
            <div className="w-1/2">
              <div className="numbers text-white mb-4 tracking-widest text-sm">
                01
              </div>
              <p className="text-white opacity-70 mb-8 text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip commodo consequat.
              </p>
            </div>
            <div className="w-1/2">
              <div className="numbers text-white mb-4 tracking-widest text-sm">
                02
              </div>
              <p className="text-white opacity-70 mb-8 text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip commodo consequat.
              </p>
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

      <section>
        <div className="w-3/4 m-auto flex md:py-32 gap-24 justify-center items-center">
          <div className="w-1/2">
            <img
              className="w-full"
              alt="test"
              src="https://media.newyorker.com/photos/60d7831254673ca79c73fdf7/master/w_120,c_limit/LewisKraus-UFOreport.jpg"
            />
          </div>
          <div className="w-1/2">
            <div className="w-5/6">
              <h2 className="text-5xl font-semibold text-white mb-4">
                Quis nostrud exercitation ullamco
              </h2>
              <p className="text-white w-5/6 opacity-70 mb-8">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-3/4 m-auto flex md:py-32 gap-24 justify-center items-center">
          <div className="w-1/2">
            <div className="ml-20">
              <h2 className="text-5xl font-semibold text-white mb-4">
                Quis nostrud exercitation ullamco
              </h2>
              <p className="text-white w-5/6 opacity-70 mb-8">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="w-full"
              alt="test"
              src="https://media.newyorker.com/photos/60d7831254673ca79c73fdf7/master/w_120,c_limit/LewisKraus-UFOreport.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
