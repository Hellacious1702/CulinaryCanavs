import React from "react";
import ProjectDetailsMapper from "./ProjectDetailsMapper";
import PorjectCore from "../Data/ProjectPage";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <section className="py-6 px-8 font-Headings bg-background text-dark flex flex-col gap-10">
        <div className="text-6xl font-bold">
          <h1>
            Project Overview:{" "}
            <span className="text-primary">Culinary Canvas</span>
          </h1>
        </div>

        <div className="flex gap-5 flex-col">
          <h4 className="text-5xl font-semibold">
            About This Demo Project<span className="text-primary">.</span>
          </h4>
          <p className="px-5 w-[90vw]">
            Welcome to Culinary Canvas – a comprehensive web application
            meticulously designed and developed to showcase modern front-end
            engineering expertise. Far beyond a simple collection of recipes,
            this platform serves as a vibrant, interactive portfolio piece,
            demonstrating proficiency in building dynamic, responsive, and
            aesthetically pleasing user interfaces.
            <br />
            <br />
            The primary purpose of Culinary Canvas is to provide a tangible
            example of my capabilities in creating robust web solutions with
            leading industry technologies. It stands as a testament to my skill
            in transforming design concepts into functional, user-centric
            experiences, handling data integration, and ensuring a seamless
            browsing journey. This project is a living demonstration of how
            theoretical knowledge translates into practical, real-world
            application development. <br />
            <br /> Through Culinary Canvas, I aim to illustrate my command over
            component-based architecture, efficient state management, and the
            implementation of a utility-first CSS framework for rapid and
            consistent styling. The choice of a recipe application provides a
            rich context to explore various UI patterns, data presentation
            challenges, and user interaction flows inherent in modern web
            development. It allows for a clear display of how I approach
            problem-solving and deliver a polished, responsive product from
            conception to execution.
          </p>
        </div>

        <div className="flex gap-5 flex-col">
          <h4 className="text-5xl font-semibold">
            The Technical Core: ReactJS, Tailwind CSS & API Integration
            <span className="text-primary">.</span>
          </h4>
          <p className="px-5 w-[90vw]">
            The robust and dynamic nature of Culinary Canvas is powered by a
            modern, industry-standard technology stack chosen for its
            efficiency, scalability, and developer experience. This section
            highlights the key technologies that underpin the application's
            architecture and user interface:
            <ProjectDetailsMapper data={PorjectCore} />
          </p>
        </div>

        <div className="flex gap-5 flex-col">
          <div className="flex items-center justify-between">
            <h4 className="text-5xl font-semibold">
              About the Developer<span className="text-primary">.</span>
            </h4>
            <Link
              to={"/Contact"}
              className="text-xl px-5 py-2 bg-primary text-white rounded-xl md:hidden"
            >
              Contact
            </Link>
          </div>
        </div>
        <p className="px-5 w-[90vw]">
          Culinary Canvas is the creation of{" "}
          <a
            className="text-primary font-semibold"
            href="https://www.linkedin.com/in/varadnaik/"
            target="_blank"
          >
            Varad Naik
          </a>
          , an aspiring and dedicated web developer with a passion for crafting
          intuitive, efficient, and visually appealing web applications. This
          project stands as a testament to my commitment to mastering modern
          front-end technologies and delivering high-quality user experiences.{" "}
          <br />
          <br />
          My journey in web development is driven by a fascination with
          problem-solving and the art of bringing ideas to life through code.
          With a strong foundation in ReactJS for dynamic user interfaces and
          Tailwind CSS for streamlined, responsive design, I focus on building
          robust applications that are both functional and delightful to use.
          The integration of external APIs, as demonstrated here with the
          DummyJSON Recipes API, further highlights my ability to handle complex
          data flows. <br />
          <br /> I am always eager to learn new technologies, tackle exciting
          challenges, and contribute to innovative projects.
        </p>
      </section>
    </>
  );
};

export default Project;
