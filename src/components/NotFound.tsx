"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NotFound = () => {
  const message = "We couldn’t find the Pokemon you’re searching for!";

  return (
    <div className="flex flex-col items-center justify-center p-50 w-full">
      <div className="flex flex-row items-center justify-center gap-1">
        <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" /> 
        <p className="text-2xl text-gray-400">{ message }</p>
      </div>
      <p className="text-gray-400">
        Try another Pokemon name.
      </p>
      {/* <button onClick={() => handleClick()} className="mt-4 cursor-pointer bg-white shadow-md p-2 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 text-black">
        Try another name
      </button> */}
    </div>
  );
};

export default NotFound;
