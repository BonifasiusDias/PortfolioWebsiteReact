/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import foto from "../../Assets/Foto2.jpg";
import data from "../../dummyAbout.json";
const About = () => {
  return (
    <div className="h-screen mx-72">
      <div className="flex mt-32 h-3/6">
        <div className="w-4/6">
          <img
            className="z-0 absolute h-3/6 ml-72 2xl:right-96 2xl:mr-96 rounded-lg"
            src={foto}
          />
          <div className="mt-20 z-30 relative  text-7xl font-bold ">
            <h1>Bonifacius</h1>
            <h1 className="ml-48">Charis R.</h1>
          </div>
        </div>
        <div className="mt-20 w-2/6 font-semibold">
          <h1 className="text-4xl">Based in Indonesia,</h1>
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
      <div className="mt-20 grid grid-cols-2">
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
    </div>
  );
};

export default About;
