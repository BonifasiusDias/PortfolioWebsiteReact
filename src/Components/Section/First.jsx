import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";

const First = () => {
  // const animate = useAnimation();

  // const [contentRef, inView] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "-20%",
  // });

  // useEffect(() => {
  //   if (inView) {
  //     animate.start("visible");
  //   }
  // }, [animate, inView]);

  // const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  var today = new Date();
  var timenow = today.getHours();
  const [time, setTime] = useState();
  const timefunction = () => {
    console.log(timenow);
    if (6 <= timenow && timenow <= 18) {
      setTime(true);
    } else {
      setTime(false);
    }
  };

  useEffect(timefunction, []);

  return (
    <motion.div
      // ref={contentRef}
      // animate={animate}
      // initial="hidden"
      // variants={{
      //   visible: {
      //     opacity: 1,
      //     y: 0,
      //     transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
      //   },
      //   hidden: {
      //     opacity: 0,
      //     y: 72,
      //   },
      // }}
      className=" h-screen text-xl  flex flex-col  bg-black"
    >
      <div>
        {time ? (
          <div className="absolute  top-20 text-white">
            <BsSunFill className="" />
          </div>
        ) : (
          <div className="absolute  top-20 text-white">
            {" "}
            <BsMoonStarsFill />{" "}
          </div>
        )}
      </div>
      <div className="my-auto">
        <h1 className="text-white absolute left-96 ml-44 text-4xl">
          Hi, Welcome to
        </h1>
        <div className="pt-10 pb-2 flex font-bold flex-col items-center">
          <h1 className="text-white  text-8xl mr-4">Bonifasius</h1>
          <h2 className="text-white ml-40 text-8xl">Dias</h2>
        </div>
        <h1 className="text-white absolute right-96 mr-64 text-4xl">Website</h1>
        <p className="text-white absolute right-96 mr-40 mt-12">
          {" "}
          (unfinished for first page &amp; nonresponsive yet)
        </p>
      </div>
    </motion.div>
  );
};

export default First;
