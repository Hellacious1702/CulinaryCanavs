import React from "react";
import AboutArray from "../Data/AboutPage";
import AboutDetailsMapper from "./AboutDetailsMapper";

const About = () => {
  return (
    <>
      <section className="py-6 px-8 font-Headings bg-background text-dark flex flex-col gap-10">
        <div>
          <h1 className="text-6xl font-bold">
            The Heart Behind{" "}
            <span className="text-primary">Culinary Canavs</span>
          </h1>
        </div>

        <div className="flex gap-5 flex-col">
          <h4 className="text-5xl font-semibold">
            Our Mission<span className="text-primary">.</span>
          </h4>
          <p className="px-6 w-[90vw]">
            Our Culinary Mission At Culinary Canvas, we believe that the kitchen
            is the heart of every home – a place for creativity, nourishment,
            and connection. Our journey began with a simple yet profound
            realization: in a world overflowing with information, finding truly
            inspiring, reliable, and accessible recipes can often feel
            overwhelming. We envisioned a space where the joy of cooking is
            amplified, and the barriers to creating delicious meals are
            thoughtfully removed.
            <br />
            <br />
            This is why our mission is clear: to empower every individual,
            regardless of their culinary experience, to transform their kitchen
            into a vibrant art studio, where every dish is a masterpiece in the
            making. We are dedicated to simplifying the art of cooking,
            transforming potentially daunting tasks into enjoyable experiences.
            <br />
            <br />
            Through Culinary Canvas, you'll discover a meticulously curated
            collection of recipes, spanning a diverse spectrum of cuisines and
            occasions. Each recipe is more than just a list of ingredients and
            steps; it's a carefully tested guide designed for clarity, success,
            and delicious outcomes. We prioritize easy-to-follow instructions,
            practical tips, and beautiful visuals to ensure that your time at
            the Culinary Canvas is always rewarding.
            <br />
            <br /> We aspire to be your trusted culinary companion, inspiring
            you to explore new flavors, master timeless techniques, and
            confidently adapt dishes to your unique taste. Beyond just recipes,
            we aim to foster a community where food lovers can find inspiration,
            share triumphs, and deepen their appreciation for the incredible
            power of a home-cooked meal.
            <br />
            <br />
            Join us at Culinary Canvas, and let's rediscover the magic of
            cooking together, one incredible recipe at a time. Your next
            culinary adventure awaits!
          </p>
        </div>

        <div className="flex gap-10 flex-col">
          <h4 className="text-5xl font-semibold">
            Your Culinary Toolkit<span className="text-primary">.</span>
          </h4>
          <div className="flex gap-5 md:flex-col-reverse">
            <div className="px-6 w-1/2 md:w-full">
              <p>
                At Culinary Canvas, we've meticulously designed a platform that
                brings the joy and artistry of cooking directly to your
                fingertips. Here’s a glimpse into the rich tapestry of flavors
                and tools you’ll find:
              </p>
              <AboutDetailsMapper data={AboutArray.Discover} />
            </div>
            <img
              className="w-1/2 rounded-xl md:w-full"
              src="https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-10 flex-col ">
          <h4 className="text-5xl font-semibold">
            Our Guiding Principles<span className="text-primary">.</span>
          </h4>
          <div className="flex flex-row-reverse gap-5 md:flex-col-reverse">
            <div className="px-6  w-1/2 md:w-full">
              <p>
                At Culinary Canvas, every feature, every recipe, and every
                design choice is rooted in a set of core values that define who
                we are and what we stand for. These principles are the
                brushstrokes that create our platform's unique character:
              </p>
              <AboutDetailsMapper data={AboutArray.Principles} />
            </div>

            <img
              className="w-1/2 rounded-xl md:w-full"
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Intsant-Pot-Texas-Style-Chili-Mac_H1.jpg.rend.hgtvcom.1280.1280.85.suffix/1700604212111.webp"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
