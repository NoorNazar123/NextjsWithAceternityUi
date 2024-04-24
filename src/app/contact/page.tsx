"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
   <div className="bg-gray-900 min-h-[100vh]">
  <div className="w-full min-h-[100vh] flex flex-col items-center justify-center">
    <h2 className="text-xl font-bold mb-4 text-white lg:text-6xl lg:mb-10">Contact Us</h2>
    <form className="text-center relative w-[50%]">
      <div className="mb-4">
       
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="shadow-lg appearance-none  rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black rounded-r-md"
        />
      </div>
      <div className="mb-4">
        
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="shadow appearance-none  rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  bg-black rounded-r-md"
        />
      </div>
      <div className="mb-6">
       
        <textarea
          id="message"
          placeholder="Your Message"
          className="shadow appearance-none  rounded w-full py-20 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none  bg-black rounded-r-md"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  </div>

  {/* Meaty part - Meteor effect */}
  <Meteors number={20} />
</div>

  );
};

export default page;
