"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NotFound = () => {
  const router = useRouter();
  const message = "We couldn’t find the Pokemon you’re searching for.";

  const handleClick = () => {
    router.push("/")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-center gap-1">
        <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" /> 
        <p className="text-3xl text-gray-400">Not Found</p>
      </div>
      <p className="text-gray-400">
        { message}
      </p>
      <button onClick={() => handleClick()} className="mt-4 cursor-pointer bg-white shadow-md p-2 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 text-black">
        Try another name
      </button>
    </div>
  );
};

export default NotFound;
