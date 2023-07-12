import React from "react";
import "../styles.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Slider from "./components/Slider";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <News />
    </>
  );
}
