import React from "react";
import { Cards, HeroSection, NavBar } from "./components";
import data from "./data";

export default function App() {
  const card = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });

  return (
    <>
      <NavBar />
      <HeroSection />
      <section className="card--list">{card}</section>
    </>
  );
}
