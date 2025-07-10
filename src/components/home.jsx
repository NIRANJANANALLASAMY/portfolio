import React from "react";
import { motion } from "framer-motion";
import "../style/home.css";
import myPic from "../assets/profile.jpg";
import bg from "../assets/bg.png"; // Import the background image

const Home = () => {
  return (
    <section
      className="home-container"
      style={{
        background: `linear-gradient(120deg, rgba(24, 28, 36, 0.97) 0%, rgba(35, 39, 47, 0.97) 100%), url(${bg}) center/cover no-repeat`
      }}
    >
      <div className="home-overlay">
        <div className="home-content">
          <div className="text-section">
            <motion.h1
              className="name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
            >
              Hi, I'm Niranjana
            </motion.h1>
            <motion.p
              className="description"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, type: "spring" }}
            >
              A passionate developer with a strong interest in web technologies and
              responsive frontend development. I love creating interactive, modern
              interfaces.
            </motion.p>
          </div>
          <motion.div
            className="image-section"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          >
            <img
              src={myPic}
              alt="Niranjana"
              className="profile-img animate-bounce"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
