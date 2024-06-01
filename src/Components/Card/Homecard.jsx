import React from "react";
import { Link } from "react-router-dom";

const Homecard = () => {
  return (
    <div className="container relative mx-auto flex flex-col gap-16 px-4 py-16 text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl ">
      <div className="lg:flex lg:w-1/2 lg:items-center">
        <div>
          {/* <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
       
        </div>
        <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
       
        </div>
        <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
       
        </div> */}
          <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
            Welcome to
            <span
              className="text-blue-600 dark:text-blue-500"
              style={{ color: "#c6b069", marginLeft: "0.5em" }}
            >
              Orhaan
            </span>
          </h1>
          <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
            Elevate Your Business with Our Cutting-Edge IT Solutions. From
            dynamic websites and SEO strategies to social media marketing, PBX
            configuration, and CCTV installations, Orhaan is your partner in
            innovation and growth. Discover seamless integration and unmatched
            support today..
          </h2>
          <div className="flex flex-col justify-center gap-2 pb-16 pt-10 sm:flex-row sm:items-center lg:justify-start">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-white hover:bg-black hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="relative mx-5 lg:w-96">
          <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72" />
          <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72" />
          <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72" />
          <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72" />
          <div
            className="absolute inset-0 -m-6 -rotate-2 rounded-xl"
            style={{ backgroundColor: "#c6b069" }}
          />
          <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-black shadow-inner dark:bg-blue-900/75" />
          <img
            src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
            className="relative mx-auto rounded-lg shadow-lg"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Homecard;
