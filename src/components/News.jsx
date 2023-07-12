import React, { useEffect } from "react";

export default function News() {
  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=1d95c2e165524a658c24a34fb01a4565"
      );
      const resp = await request.json();
      const respData = resp.articles;
      console.log(resp);
    }

    fetchData();
  }, []);
  return <div></div>;
}
