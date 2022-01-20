/* eslint-disable jsx-a11y/alt-text */
import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import foto from "../../Assets/Foto2.jpg";
import data from "../../dummyAbout.json";
import { motion } from "framer-motion";
const About = () => {
  const animate = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-20%",
  });

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    }
  }, [animate, inView]);

  return (
    <motion.div
      ref={contentRef}
      animate={animate}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
      className="h-auto 2xl:h-screen mx-72"
    >
      <div className="w-full flex flex-col items-center">
        <img className="z-0  mt-32 absolute h-3/6  rounded-lg" src={foto} />
      </div>
      <div className="flex mt-32 h-3/6">
        <div className="w-3/6">
          <div className="mt-20 z-30 relative  text-7xl font-bold ">
            <h1>Bonifacius</h1>
            <h1 className="ml-48">Charis R.</h1>
          </div>
        </div>
        <div className="mt-20 w-2/6 ml-44 font-semibold">
          <h1 className="text-4xl">
            Based in <span className="font-bold">Indonesia</span>,
          </h1>
          <h1 className="text-3xl w-5/6"> currently studying </h1>
          <h1 className="text-3xl  text-red-600 font-bold">
            Computer Science.
          </h1>
          <p className="mt-6">
            Always been interested in web development and cloud! My life-long
            dream is actually to be a software engineer and a cloud engineer. I
            am always eager to join internships and competitions as I wish to
            broaden my knowledge, skill and experience.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2">
        <div className="mx-20">
          <p className="font-semibold text-justify">
            Being a website developer is a something that fun to do. You can
            spend your creativity and idea, do whatever you want in your
            website. And you can't stop learning programming because there's
            always something new everyday.
          </p>
          <h1 className="mt-4 font-bold text-2xl">
            HTML, JavaScript, and CSS are my drawing tools. Plain website is my
            canvas.
          </h1>
        </div>
        <div className="mx-40">
          <h1 className="font-bold text-lg">My Experience</h1>
          <ul>
            {data?.data.map((item) => {
              return (
                <li className="flex">
                  <p className="rounded-full mr-2 text-4xl ">&#183;</p>
                  <div>
                    <h1 className="mt-2 font-semibold text-lg">
                      {item.experience}
                    </h1>
                    <p className="ml-1">{item.job}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
