import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

import NavLinks from "../Data/NavLinks";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ getSearch, handleSearchChange, searchVal }) => {
  const [activeNav, setActiveNav] = useState("Recipes");
  const [menuState, setMenuState] = useState(false);

  const handleNav = (NavHeader) => {
    setActiveNav(NavHeader);
    setMenuState(false);
  };

  return (
    <>
      <section className="py-6 px-8 font-Headings bg-background text-dark">
        <nav className="flex justify-between items-center text-xl">
          <h1>
            Culinary <span className="text-primary">Canavs</span>
          </h1>

          <div className="flex space-x-8 md:hidden">
            {NavLinks.map((element, index) => (
              <Link
                className={element.NavHeader === activeNav ? "font-bold" : ""}
                key={index}
                to={element.NavLink}
                onClick={() => setActiveNav(element.NavHeader)}
              >
                {element.NavHeader}
              </Link>
            ))}
          </div>

          <div className=" flex items-center space-x-5 text-base md:hidden">
            <div className="hidden space-x-3">
              <input
                className="border-none outline-none py-2 px-4 rounded-full bg-border"
                type="text"
                placeholder="Search..."
                value={searchVal}
                onChange={(e) => handleSearchChange(e)}
              />
              <button
                className="bg-border py-2 px-4 rounded-3xl"
                onClick={() => getSearch()}
              >
                <FontAwesomeIcon icon={faSearchengin} />
              </button>
            </div>

            <FontAwesomeIcon
              className="py-2 px-4 rounded-full bg-[#222222]"
              icon={faUser}
              style={{ color: "#ffffff" }}
            />
          </div>

          <div
            className="hidden md:block"
            onClick={() => setMenuState(!menuState)}
          >
            {menuState === true ? (
              <FontAwesomeIcon icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </div>
        </nav>
        {menuState === true ? (
          <nav>
            <div className="hidden md:flex flex-col p-5 text-2xl gap-5">
              {NavLinks.map((element, index) => (
                <Link
                  className={element.NavHeader === activeNav ? "font-bold" : ""}
                  key={index}
                  to={element.NavLink}
                  onClick={() => handleNav(element.NavHeader)}
                >
                  {element.NavHeader}
                </Link>
              ))}
            </div>
          </nav>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Navbar;
