"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
   {
     title: "Responsive Web Development Responsive Web Development",
     description:
       "Craft responsive websites that adapt seamlessly to various devices and screen sizes. Our platform empowers you to build modern, user-friendly web experiences that look great on desktops, tablets, and mobile devices alike.",
     content: (
       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-around text-white">
         Responsive Web Development
       </div>
     ),
   },
   {
     title: "Interactive User Interfaces",
     description:
       "Create interactive user interfaces that engage and captivate your audience. With our platform, you can leverage cutting-edge technologies to develop dynamic UI components and deliver rich, immersive user experiences.",
     content: (
       <div className="h-full w-full  flex items-center justify-center text-white">
       
       </div>
     ),
   },
   { 
     title: "Modern Web Technologies",
     description:
       "Stay ahead of the curve with the latest web technologies and frameworks. Our platform provides you with the tools and resources you need to master technologies like React, Vue.js, Angular, and more, enabling you to build cutting-edge web applications with ease.",
     content: (
       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         Modern Web Technologies
       </div>
     ),
   },
   {
     title: "Optimized Web Performance",
     description:
       "Optimize your web applications for lightning-fast performance. Our platform offers performance optimization techniques and best practices to ensure that your websites load quickly, providing users with a seamless browsing experience.",
     content: (
       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Optimized Web Performance
       </div>
     ),
   },
 ];
 

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
