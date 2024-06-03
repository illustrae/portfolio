import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { me } from "../assets";
import { UilLink } from "@iconscout/react-unicons";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <div className="flex items-center justify-center w-full h-screen p-7 md:mt-10">
      <div className="flex flex-col justify-center mx-auto">
        <section id="about">
          <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <div className="w-full md:w-[50%] flex justify-center mb-5  md:mb-0 align-right">
              <motion.div style={{ scale }}>
                <motion.div style={{ scaleY: scrollYProgress }} />
                <img
                  className="project-img w-auto h-[350px] rounded-full bg-[#c0c0c0]"
                  src={me}
                  alt="Trae Hughes Logo"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-[500px] lg:mr-[200px] text-center md:text-left">
              <h3 className="text-gradient text-[24px] font-semibold">
                The Developer.
              </h3>
              <div className="flex my-4">
                <p className="text-[#fff] text-[12px] font-semibold bg-[#24a9c0] rounded-full mr-2 px-2 py-1">
                  Web Development
                </p>
                <p className="text-[#fff] text-[12px] font-semibold bg-[#24a9c0] rounded-full  px-2 py-1">
                  Mobile Development
                </p>
              </div>
              <p className="text-[#c0c0c0]">
                Hi, I'm based in Austin and specialize in web and mobile
                development. I'm passionate about creating user-friendly and
                efficient digital solutions. With my skills and dedication, I'm
                eager to find new opportunities to grow and contribute to a
                dynamic team. Let's build something great together!
              </p>
              <div className="flex">
                <p className="text-[#24a9c0] my-4 font-semibold">
                  <a href="https://www.linkedin.com/in/traehughes/">
                    <UilLink />
                  </a>
                </p>
                <p className="text-[#c0c0c0] my-4 ml-1">linkedIn</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
