import React from "react";

import FooterNav from "../Data/FooterNav";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="py-6 px-8 font-Headings flex h-[70vh] gap-5 md:flex-col">
        <div className="w-1/2 md:w-full">
          <img
            className="h-full rounded-xl"
            src="https://t3.ftcdn.net/jpg/06/28/10/84/360_F_628108474_sAZSPQHeFpOCuqxwPAdqaDBtQffuPERM.jpg"
            alt=""
          />
        </div>

        <div className="w-1/2 flex flex-col gap-5 md:w-full">
          <div className="h-1/2 bg-grey rounded-xl p-5 flex flex-col justify-between md:h-fit gap-5">
            <div>
              <h1 className="text-4xl">
                Culinary <span className="text-primary">Canavs</span>
              </h1>
              <p className="w-[90%] text-muted mt-5">
                Explore Culinary Canvas, a dynamic recipe web application
                expertly built to showcase modern front-end development. Crafted
                with ReactJS, it demonstrates robust component architecture,
                efficient state management for seamless user interactions, and
                dynamic content delivery via API integration. Tailwind CSS
                ensures a beautiful, clean, and fully responsive user interface
                across all devices. This project serves as a comprehensive
                example of advanced web development capabilities.
              </p>
            </div>
            <div className="flex gap-5 md:flex-col">
              <input
                className="w-full py-2 px-5 outline-none  border-b-4 border-border bg-transparent"
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email Address"
              />
              <button className="px-5 py-2 bg-primary text-white rounded-2xl ">
                Subscribe
              </button>
            </div>
          </div>

          <div className="h-1/2 bg-[#222222] text-white p-5 flex flex-col justify-between rounded-xl md:h-fit gap-10">
            <div className="flex justify-between md:flex-col gap-10 text-center">
              {FooterNav.map((element, index) => (
                <div className="flex flex-col space-y-2" key={index}>
                  <h4 className="font-bold">{element.FooterHeader}</h4>
                  {element.FooterNavs.map((NavLinks, i) => (
                    <Link
                      to={NavLinks.FooterLinks}
                      key={i}
                      className="text-gray-500"
                      href=""
                    >
                      {NavLinks.FooterTitle}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <hr className="mb-5" />
              <div className="flex justify-between md:flex-col text-center gap-5">
                <p>Copyright © 2025 Culinary Canavs</p>
                <p>
                  A Project By{" "}
                  <a href="https://www.linkedin.com/in/varadnaik/">
                    Varad Sandeep Naik
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
