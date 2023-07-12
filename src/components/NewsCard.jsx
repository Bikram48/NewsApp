import React from "react";

export default function NewsCard() {
  return (
    <div className="basis-2/6  shadow-lg shadow-gray-500/50">
      <div className="w-full">
        <img
          src="https://source.unsplash.com/user/c_v_r/1900x800"
          alt=""
          className="rounded-t-md h-56 object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold">
          Rushdie has 'crazy dreams' about stabbing attack
        </h1>
        <p className="mt-2">
          Apple advertises its newest iPhone as having the brightest screen yet,
          but when you use it, you prob...
        </p>
      </div>
      <button className="w-full bg-orange-500 p-2 rounded-b-md">
        Read More
      </button>
    </div>
  );
}
