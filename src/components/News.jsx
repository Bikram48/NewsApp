import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import ReactPaginate from "react-paginate";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://newsapi.org/v2/everything?sources=bbc-news&pageSize=6&apiKey=5235a3e37c4f470ca8af56361d4f8148"
      );
      const resp = await request.json();
      const respData = resp.articles;
      setNews(respData);
    }

    fetchData();
  }, []);

  const fetchNews = async (currentPage) => {
    const request = await fetch(
      `https://newsapi.org/v2/everything?sources=bbc-news&page=${currentPage}&pageSize=6&apiKey=5235a3e37c4f470ca8af56361d4f8148`
    );
    const resp = await request.json();
    const respData = resp.articles;
    console.log(respData);
    setNews(respData);
  };

  const handlePageClick = (event) => {
    console.log(event.selected);
    let currentPage = event.selected + 1;
    fetchNews(currentPage);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&sources=bbc-news&pageSize=6&apiKey=5235a3e37c4f470ca8af56361d4f8148`
      );
      const resp = await request.json();
      const respData = resp.articles;
      setNews(respData);
    }

    fetchData();
  }, [search]);

  return (
    <div className="max-w-4xl mt-10 p-6 mx-auto md:mt-20">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-black"></div>
        <h2 className="text-2xl">News</h2>
        <form className="ml-auto" action="">
          <input
            className="outline-0"
            type="text"
            placeholder="Search News..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {news.map((item) => (
          <NewsCard
            image={item.urlToImage}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        activeClassName={"pagination_active"}
        nextLinkClassName={"next_page"}
        previousLinkClassName={"previous_page"}
        disabledClassName={"pagination_disabled"}
        className="mx-auto text-center flex flex-row gap-4 mb-8 mt-8 justify-center"
      />
    </div>
  );
}
