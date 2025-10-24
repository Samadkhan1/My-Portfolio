import { useState } from "react";
import Navbar from "./components/navbar";
import image1 from "./images/hero-image2.png";
import reactLogo from "./images/react-logo.png";
import javascriptLogo from "./images/javascript-logo.png";
import tailwindCssLogo from "./images/Tailwind CSS.png";
import wooxTravels from "./images/woox-travels.jpg";
import DRFirm from "./images/DR-firm.jpg"
import ecommerce from './images/e-commerce-site.jpg'
import swissGold from "./images/swiss-gold.jpg"

const App = () => {
  const [scroll, setscroll] = useState(0);

  window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    setscroll(scrolled);
  });

  let maxscroll = document.body.scrollHeight - window.innerHeight;
  let percentage = (scroll / maxscroll) * 100;

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="h-2 fixed w-full">
        <div
          style={{ width: `${percentage}%` }}
          className={` bg-red-500  h-full`}
        ></div>
      </div>
      <button className=" z-20" onClick={scrollTop}>
        <img
          className={
            scroll > 551
              ? "fixed right-4 bottom-4 w-12"
              : "hidden right-4 bottom-4 w-12"
          }
          src="https://cdn-icons-png.flaticon.com/128/14025/14025545.png"
          alt="Back to top"
        />
      </button>
      <Navbar />
      <section className="px-8  md:px-16 py-8 flex flex-col md:flex-row transition-all text-gray-800  items-center justify-between bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <div className="w-full md:w-[50%]  flex flex-col items-start">
          <h1 className="x-font  text-3xl md:text-[2.50rem] ">
            Welcome To My Web Development Portfolio
          </h1>
          <p className="font-light mt-4 text-black dark:text-gray-200">
            I'm Abdul Samad, a passionate web developer bassed in Pakistan,
            Here, you'll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
          <a
            href="/"
            className="bg-red-500 text-gray-200 py-3 px-5 mt-10 rounded-lg hover:bg-red-400"
          >
            Download CV
          </a>
        </div>
        <div className="w-full mt-5 md:w-[50%] flex justify-center md:justify-end">
          <img src={image1} className="w-full md:w-[80%]" alt="Hero-Image" />
        </div>
      </section>
      <section
        id="about"
        className="bg-gray-100 h-auto dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-center"
      >
        <div>
          <p>MY SKILLS</p>
          <h1 className="x-font text-3xl mt-5">WHAT I DO</h1>
          <p className="mt-5 px-4">
            I'm not just a developer; I'm a digital dreamweaver. Crafting
            immersive online experiences is not just a job but my calling.
            <br /> Discover below more about me.
          </p>
        </div>
        <div className="mt-5 px-4 md:px-8 flex flex-row flex-wrap items-center justify-evenly ">
          <div className="max-w-[300px] my-2 mx-2 bg-gray-200 dark:bg-gray-700     px-4  md:px-8 py-8  flex flex-col items-center justify-between rounded-lg">
            <div className="w-full h-[50%]">
              <img
                src={javascriptLogo}
                alt="React JS"
                className="w-full rounded-lg"
              />
            </div>
            <p className="mt-4">
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
          <div className="max-w-[300px] my-2 mx-2 bg-gray-200 dark:bg-gray-700     px-4  md:px-8 py-8  flex flex-col items-center justify-between rounded-lg">
            <div className="w-full h-[50%]">
              <img
                src={tailwindCssLogo}
                className="w-full rounded-lg"
                alt="Tailwind CSS"
              />
            </div>
            <p className="mt-4">
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
          <div className="max-w-[300px] my-2 mx-2 bg-gray-200 dark:bg-gray-700     px-4  md:px-8 py-8  flex flex-col items-center justify-between rounded-lg">
            <div className="w-full h-[50%]">
              <img
                src={reactLogo}
                alt="React JS"
                className="w-full  rounded-lg"
              />
            </div>
            <p className="mt-4">
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className=" bg-gray-100 dark:text-gray-200 dark:bg-gray-800"
      >
        <div className="text-center  pt-16 px-4 md:px-8">
          <h1 className="text-4xl x-font">MY PROJECTS</h1>
          <p className="mt-2">
            If you have a website idea that needs to come to life or that
            requires a facelift, I'm here to turn your digital dreams into
            reality.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap px-4 md:px-16 items-center justify-center">
          <div className="max-w-[400px] min-w-[300px]  my-2 mx-2 bg-gray-200 dark:bg-gray-700  pb-5 ">
            <div
              style={{ backgroundImage: `url(${wooxTravels})` }}
              className="h-52 w-full bg-center bg-cover bg-no-repeat"
            ></div>
            <div className="px-5 ">
              <h1 className="text-2xl mt-5 font-semibold">WOOX Travels</h1>
              <a
                href="https://woox-travells.netlify.app/"
                className="inline-block text-gray-200 hover:bg-red-400 bg-red-500 px-5 py-2 rounded-lg font-semibold mt-3"
              >
                View Live
              </a>
            </div>
          </div>
          <div className="max-w-[400px] min-w-[300px]  my-2 mx-2 bg-gray-200 dark:bg-gray-700  pb-5 ">
            <div
              style={{ backgroundImage: `url(${DRFirm})` }}
              className="h-52 w-full bg-center bg-cover bg-no-repeat"
            ></div>
            <div className="px-5 ">
              <h1 className="text-2xl mt-5 font-semibold">Devis Robert Law Firm</h1>
              <a
                href="https://robert-law-firm.nexgenrcm.com/"
                className="inline-block text-gray-200 hover:bg-red-400 bg-red-500 px-5 py-2 rounded-lg font-semibold mt-3"
              >
                View Live
              </a>
            </div>
          </div>
          <div className="max-w-[400px] min-w-[300px]  my-2 mx-2 bg-gray-200 dark:bg-gray-700  pb-5 ">
            <div
              style={{ backgroundImage: `url(${ecommerce})` }}
              className="h-52 w-full bg-center bg-cover bg-no-repeat"
            ></div>
            <div className="px-5 ">
              <h1 className="text-2xl mt-5 font-semibold">XT Store (Next JS)</h1>
              <a
                href="https://e-commerce-mu-five-75.vercel.app/"
                className="inline-block text-gray-200 hover:bg-red-400 bg-red-500 px-5 py-2 rounded-lg font-semibold mt-3"
              >
                View Live
              </a>
            </div>
          </div>
          <div className="max-w-[400px] min-w-[300px]  my-2 mx-2 bg-gray-200 dark:bg-gray-700  pb-5 ">
            <div
              style={{ backgroundImage: `url(${swissGold})` }}
              className="h-52 w-full bg-center bg-cover bg-no-repeat"
            ></div>
            <div className="px-5 ">
              <h1 className="text-2xl mt-5 font-semibold">Swiss Gold</h1>
              <a
                href="https://swiss-gold-seven.vercel.app/"
                className="inline-block text-gray-200 hover:bg-red-400 bg-red-500 px-5 py-2 rounded-lg font-semibold mt-3"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="bg-gray-100 dark:bg-gray-800 pt-10 dark:text-gray-200"
      >
        <div className="text-center ">
          <h1 className="text-4xl x-font px-3">CONTACT ME</h1>
          <p className="mt-3 px-3">
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-3 md:px-10 lg:px-20 mt-10">
          <div className="w-full md:w-[50%] flex flex-col justify-between text-gray-200 bg-gray-700  p-6 md:p-10">
            <div className="">
              <h1 className="text-2xl md:text-4xl x-font ">
                Contact Information
              </h1>
              <div className="flex items-center mt-8">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/128/3616/3616215.png"
                  alt="Phone"
                />
                <p className="ml-1">+92 327 7973293</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/128/6806/6806987.png"
                  alt="E-mail"
                />
                <p className="ml-1">samadkhan10206@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl md:text-4xl x-font">Links</h1>
              <div className="flex items-center mt-5">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/128/10090/10090288.png"
                  alt="GitHub"
                />
                <a
                  href="https://github.com/Samadkhan1"
                  className="ml-2  underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] p-5 md:p-10">
            <h1 className="text-2xl md:text-4xl x-font">Message</h1>
            <form>
              <div className="mt-5 flex flex-col md:flex-row md:row justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent  py-3 px-2 border-b-[1px] border-gray-400 w-full md:w-[48%]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent  py-3 px-2 border-b-[1px] border-gray-400 w-full mt-5 md:mt-0 md:w-[48%]"
                />
              </div>
              <input
                type="email"
                placeholder="E-Mail"
                className="mt-5 bg-transparent  py-3 px-2 border-b-[1px] border-gray-400 w-full"
              />
              <textarea
                rows={3}
                placeholder="Message"
                className="mt-5 bg-transparent  py-2 px-2 border-b-[1px] border-gray-400 w-full"
              />
              <button
                type="submit"
                className="bg-red-500 text-gray-200 p-2 mt-5 w-full rounded-lg "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="dark:bg-gray-800 dark:text-gray-200 bg-gray-100 p-10 text-center">
        © 2025 Abdul Samad Khan. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
