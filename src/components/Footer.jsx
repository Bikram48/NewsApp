import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-10 w-full p-6 bg-gray-200 flex flex-col items-center justify-center h-72">
      <h1 className="text-4xl text-center font-bold mb-6">
        The <span className="border-b-4 border-orange-500">Daily</span> News
      </h1>
      <p className="text-lg text-gray-600">React Based Project</p>
      <p className="text-lg text-gray-600">Created By Bikram Chand</p>
      <div className="mt-5">
        <div className="flex gap-4">
          <FaFacebook size={"20px"} />

          <FaGithub size={"20px"} />

          <FaInstagram size={"20px"} />

          <FaLinkedin size={"20px"} />
        </div>
      </div>
    </div>
  );
}
