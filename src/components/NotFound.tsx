"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NotFound = () => {
  const message = "We couldn’t find the Pokemon you’re searching for!";

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 p-50">
      <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-center">
        <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
        <p className="text-2xl text-gray-400 break-words">{message}</p>
      </div>
      <p className="text-gray-400 text-center break-words">
        Try another Pokemon name.
      </p>
    </div>
  );
};

export default NotFound;
