import React from "react";

const AboutDetailsMapper = (props) => {
  return (
    <>
      {props.data.map((element) => (
        <ul className="px-10 py-5">
          <li>
            <span className="font-semibold">{element.Title}</span>
            {element.Desc}
          </li>
        </ul>
      ))}
    </>
  );
};

export default AboutDetailsMapper;
