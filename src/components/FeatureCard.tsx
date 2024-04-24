"use client";
import courseDataa from "../data/music_course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const FeatureCard = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }
  const featuredCourses = courseDataa.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-14 w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className=" my-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-xl">
                    {course.title}
                  </p>
                  <p className="text-sm my-4 text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                  
                    href={`/courses/${course.slug}`}
                  > 
                 <button   className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-2 rounded">
                  See All
                 </button>
                 </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
