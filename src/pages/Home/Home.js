import React from "react";
import Navbar from "../../components/Navbar";
import MainCarousel from "./MainCarousel";
import { SearchIcon } from "@heroicons/react/solid";
import Categories from "./Categories";
import RestaurantSection from "../../components/RestaurantSection";

function Home() {
  return (
    <div>
      <Navbar />
      <MainCarousel />

      <div className="max-w-screen-xl mx-auto">
        {/* SEARCH */}
        <div className="w-5/6 mx-auto bg-gray-100 rounded-3xl flex items-center px-4 py-3 my-10">
          <SearchIcon className="h-6" />
          <input
            type="text"
            placeholder="Search for restaurants"
            className="bg-transparent outline-none flex-grow ml-2"
          />
        </div>

        {/* CATEGORIES */}
        <Categories />

        {/* RESTAURANTS */}
        <RestaurantSection title="Popular Restaurants" />
      </div>
    </div>
  );
}

export default Home;
