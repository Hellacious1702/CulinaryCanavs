import React from "react";

const Banner = () => {
  const background =
    "https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg";

  return (
    <>
      <section className="py-6 px-8 font-Headings bg-background">
        <div
          className="h-[50vh] rounded-lg bg-cover flex items-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="text-6xl ml-[5vw] font-bold text-white md:text-5xl">
            Explore <br />
            <span className="text-primary">Culinary</span> Insights
          </h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
