"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const assignmentButtons = [
    { name: "Assignment 1", link: "/assignment-1" },
    { name: "Assignment 2", link: "/assignment-2" },
    { name: "Assignment 3", link: "/assignment-3" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-8 shadow-text">
          Welcome to Your Assignments
        </h1>
        <p className="text-xl text-white mb-12 shadow-text">
          Choose an assignment to get started
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {assignmentButtons.map((assignment, index) => (
          <Link href={assignment.link}>
            <motion.button
              key={index}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl py-4 px-8 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              {assignment.name}
            </motion.button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
