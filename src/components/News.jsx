import React, { useEffect } from "react";
import NewsCard from "./NewsCard";

export default function News() {
  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=1d95c2e165524a658c24a34fb01a4565"
      );
      const resp = await request.json();
      const respData = resp.articles;
    }

    fetchData();
  }, []);
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-black"></div>
        <h2 className="text-2xl">News</h2>
      </div>
      <div className="flex gap-4 mt-6">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
