import React from "react";

const ProjectDetailsMapper = (props) => {
  return (
    <>
      {props.data.map((tech) => (
        <div className="flex flex-col py-5 gap-2">
          <div>
            <h4 className="text-2xl font-semibold">{tech.Title}</h4>
            <p className="px-2">{tech.Desc}</p>
          </div>
          {tech.Bullets.map((Bul) => (
            <li className="px-5 list-none py-2">
              <span className="font-bold">{Bul.Header}</span>
              {Bul.Desc}
            </li>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProjectDetailsMapper;
