import React from "react";
import Navbar from "../../components/Navbar";
import jollibee from "../../assets/img/jollibee.jpg";
import { menu, products } from "../../shared/data";
import { MenuIcon } from "@heroicons/react/outline";
import ProductSection from "../../components/ProductSection";

function Shop() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto pt-32">
        <main>
          <div className="w-full h-lg rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={jollibee}
              alt=""
            />
          </div>

          <div className="mt-4 pl-8 space-y-2">
            <h1 className="text-5xl font-bold">Jollibee - Ulas</h1>
            <p className="text-dark-light">Open 5am to 9pm.</p>
          </div>
        </main>

        {/* MENU */}
        <div className="flex space-x-6 mt-10 border-b border-gray-300 pb-1 mb-6">
          <MenuIcon className="h-6" />
          {menu.map((item, index) => (
            <p key={index} className="px-2">
              {item}
            </p>
          ))}
        </div>

        {/* PRODUCTS */}
        <ProductSection title="Popular Items" products={products} />
      </div>
    </div>
  );
}

export default Shop;
