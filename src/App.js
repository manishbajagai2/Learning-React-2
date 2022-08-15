import React from "react";
import { Cards, HeroSection, NavBar } from "./components";
import data from "./data";

export default function App() {
  const card = data.map((item) => {
    return (
      <Cards
        key={item.id}
        img={item.coverImg}
        text={item.title}
        rating={item.stats.rating}
        reviews={item.stats.reviewCount}
        country={item.location}
        price={item.price}
      />
    );
  });

  return (
    <>
      <NavBar />
      <HeroSection />
      <section className="card--list">{card}</section>
    </>
  );
}
