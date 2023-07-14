import React from "react";
import { useEffect, useState } from "react";

export default function Slider() {
  const [headlines, setHeadlines] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=5235a3e37c4f470ca8af56361d4f8148"
      );
      const resp = await request.json();
      const respData = resp.articles;
      setHeadlines(respData);

      setTimeout(() => {
        count === respData.length ? setCount(0) : setCount(count + 1);
      }, 5000);
    }

    fetchData();
  }, [headlines]);

  return (
    <>
      {headlines && (
        <div className="max-w-4xl mx-auto mt-10 md:mt-20 p-2">
          <div className="relative">
            <div className="w-full transition-all ease-in duration-1000">
              <img
                className="opacity-80 brightness-50 w-full"
                src={headlines[count].urlToImage}
                alt=""
              />

              <div className="absolute bottom-6 text-white max-w-xl ml-4">
                <h2 className="text-xl md:text-3xl">
                  {headlines[count].title.slice(0, 60)}
                </h2>
                {/* <p className="mt-4">{headlines[count].description}</p> */}
                <div className="flex items-center mt-6">
                  <div className="bg-[#ff2197] h-6 w-2 mr-2"></div>
                  <p>Published at: {headlines[count].publishedAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
