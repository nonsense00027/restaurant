import React, { useState } from "react";
import { LocationMarkerIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import { PlusIcon, XIcon, MinusIcon } from "@heroicons/react/solid";
import product from "../assets/img/product.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowCart(true);
    }, 50);
  };

  const handleModalClose = () => {
    setShowCart(false);
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 80 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };
  return (
    <div
      className={`fixed z-40 top-0 py-4 w-full bg-white  border-gray-300 transition duration-200 ${
        isScrolled && "shadow-md border-b"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* LEFT */}
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-bold">LOGO</h1>
          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-md font-semibold text-sm">
            <p className="mr-2">Deliver to</p>{" "}
            <LocationMarkerIcon className="h-6 text-primary-dark" />
            <p className="text-primary">Catalunan Grande</p>
          </div>
          <p className="nav-menu">Home</p>
          <p className="nav-menu">Shop</p>
          <p className="nav-menu">Contact</p>
        </div>
        {/* RIGHT */}
        <div className="flex items-center space-x-6">
          <ShoppingBagIcon
            className="h-10 rounded-md border border-gray-300 px-2 py-1 text-primary-dark cursor-pointer"
            onClick={handleModalShow}
          />
          <button className="bg-dark rounded-md px-5 py-2 text-white font-semibold">
            Login
          </button>
        </div>
      </div>

      {/* CART MODAL */}
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen">
          <div
            className="absolute w-full h-full bg-black bg-opacity-40"
            onClick={handleModalClose}
          ></div>
          <div
            className={`w-lg bg-white h-screen fixed top-0 right-0 transform transition duration-200 z-20  ${
              showCart ? "translate-x-0" : "translate-x-lg"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="border-b border-gray-300 p-4">
                  <XIcon
                    className="h-6 cursor-pointer"
                    onClick={handleModalClose}
                  />
                </div>

                {/* PRODUCT */}

                <div className="flex py-6 px-8 border-b-4 border-gray-300">
                  <p className="my-auto font-semibold text-lg">1x</p>
                  <img
                    className="h-20 object-contain mx-auto my-auto px-1"
                    src={product}
                    alt=""
                  />
                  <div className="pr-6">
                    <h3 className="font-bold text-lg text-primary-dark">
                      Chicken Joy
                    </h3>
                    <p className="text-xxs opacity-50">Details</p>
                    <button className="text-primary mt-2">Remove</button>
                  </div>

                  <div>
                    <h3 className="font-semibold">₱320.00</h3>
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="py-4 px-4 border-t-4 border-gray-300">
                <div className="flex items-center justify-between mb-4">
                  <p>Cart subtotal:</p>
                  <p className="font-bold">₱320.00</p>
                </div>
                <button className="w-full py-3 font-semibold border border-gray-200 rounded-md bg-gray-200 uppercase transition duration-200 hover:bg-primary hover:text-white transform active:scale-95">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
