import React from "react";

export default function NewsCard({ image, title, description, url }) {
  return (
    <div className=" shadow-lg shadow-gray-500/50">
      <div className="w-full">
        <img src={image} alt="" className="rounded-t-md h-56 object-cover" />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <button className="w-full bg-orange-500 p-2 rounded-b-md">
        Read More
      </button>
    </div>
  );
}
