import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import CarouselComponent from "../Carousel/Carousel";
import { Link } from "react-router-dom";
const Portfolio = () => {
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
    <div className="h-auto  bg-black">
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
        className="mx-28 2xl:mx-72 py-32"
      >
        <div className="mx-24 pb-4 flex flex-col items-center">
          <CarouselComponent />
          <Link to="/workspace">
            <button className="bg-red-600 text-white py-2 px-7 rounded-lg hover:text-red-600 border-2 border-red-600 hover:bg-black">
              More
            </button>
          </Link>
        </div>
        <div>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-white font-bold text-4xl">Tools</h1>
          </div>
          <div>
            <h1 className="text-white my-3 text-xl ml-20 font-semibold">
              Language
            </h1>
            <ul className=" grid md:grid-cols-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className=" border-2 border-gray-700 hover:border-yellow-500 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiJavascript className=" hover:text-yellow-500 text-gray-700 p-10 w-full h-full" />
                </li>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 border-gray-700 hover:border-blue-500 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiTypescript className="hover:text-blue-500 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 hover:border-red-500 border-gray-700 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiHtml5 className="hover:text-red-500 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 hover:border-blue-600 border-gray-700 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiCss3 className="hover:text-blue-600 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
            </ul>
          </div>
          <div>
            <h2 className="text-white my-3 text-xl ml-20 font-semibold">
              Framework
            </h2>
            <ul className="grid grid-cols-3 ">
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 hover:border-green-300 border-gray-700 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiTailwindcss className="hover:text-green-300 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 hover:border-blue-300 border-gray-700 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <SiReact className="hover:text-blue-300 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <li className="border-2 hover:border-green-500 border-gray-700 rounded-lg mx-16 2xl:mx-20 flex flex-col items-center h-36">
                  <FaVuejs className="hover:text-green-500 text-gray-700 p-9 w-full h-full" />
                </li>
              </motion.div>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
