"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Working with this platform has been a game-changer for my web development projects. The tools and resources provided have significantly boosted my productivity and creativity.",
    name: "John Doe",
    title: "Full-stack Developer",
  },
  {
    quote:
      "The platform's support for modern web technologies has allowed me to build cutting-edge applications with ease. It's truly revolutionized the way I approach web development.",
    name: "Jane Smith",
    title: "Front-end Developer",
  },
  {
    quote:
      "I've been able to create stunning, responsive websites that delight my clients and users, thanks to the platform's intuitive interface and powerful features.",
    name: "David Johnson",
    title: "UI/UX Designer",
  },
  {
    quote:
      "The platform's performance optimization tools have helped me deliver lightning-fast web experiences, resulting in higher user satisfaction and engagement.",
    name: "Emily Brown",
    title: "Web Performance Specialist",
  },
  {
    quote:
      "With this platform, I've been able to stay up-to-date with the latest web development trends and techniques, keeping my skills sharp and my projects ahead of the curve.",
    name: "Michael Wilson",
    title: "Web Development Enthusiast",
  },
];
 
const MovingCard = () => { 
  return (
    <div className="w-full h-[40rem] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col justify-center items-center overflow-hidden">
      <div className="h-[40rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div>
          <h2 className="my-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Here are our Successfull Story
          </h2> 
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
 
export default MovingCard;
