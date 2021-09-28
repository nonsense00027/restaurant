import React, { useState } from "react";
import product from "../assets/img/product.png";
import { PlusIcon, XIcon, MinusIcon } from "@heroicons/react/solid";
import { size } from "../shared/data";

function ProductSection({ title, products }) {
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAdd = (item) => {
    setShowModal(true);
    setSelectedItem(item);
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
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-10">Popular Items</h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map((item) => (
          <div className="border border-gray-200 flex px-4 py-4 rounded-md shadow-sm">
            {/* LEFT */}
            <img
              className="h-20 object-contain mx-auto my-auto px-2"
              src={product}
              alt=""
            />
            {/* RIGHT */}
            <div className="px-2 flex flex-col justify-between">
              <div className="flex-1 pr-3">
                <h3 className="font-bold text-lg text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-xs opacity-50">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-bold">₱ {item.price.toFixed(2)}</h3>
                <PlusIcon
                  className="h-8 rounded-sm p-1 cursor-pointer button-primary"
                  onClick={() => handleAdd(item)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD PRODUCT MODAL */}
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen z-40">
          <div
            className="absolute w-full h-full bg-black bg-opacity-40"
            onClick={handleModalClose}
          ></div>
          <div
            className={`w-lg bg-white h-screen fixed top-0 right-0 transform transition duration-200 z-50  ${
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

                <div className="flex py-6 px-4 border-b-4 border-gray-300">
                  <img
                    className="h-20 object-contain mx-auto my-auto px-1"
                    src={product}
                    alt=""
                  />
                  <div className="pr-6">
                    <h3 className="font-bold text-lg text-primary-dark">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xxs opacity-50">{selectedItem.desc}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      ₱{selectedItem.price.toFixed(2)}
                    </h3>
                  </div>
                </div>

                {/* OPTIONS */}
                <div className="px-8 py-4 border-b-4 border-gray-300">
                  <h3 className="font-semibold mb-3">Choose your Fries</h3>
                  {size.map((item, index) => (
                    <div
                      className="flex items-center justify-between text-sm my-1"
                      key={index}
                    >
                      <div className="flex items-center">
                        <input type="radio" name="" id="" />
                        <p className="ml-2">{item}</p>
                      </div>
                      <p>₱ 9.00</p>
                    </div>
                  ))}
                </div>

                <div className="px-8 py-4 border-b-4 border-gray-300">
                  <h3 className="font-semibold mb-3">Add-ons</h3>
                  {size.map((item, index) => (
                    <div
                      className="flex items-center justify-between text-sm my-1"
                      key={index}
                    >
                      <div className="flex items-center">
                        <input type="checkbox" name="" id="" />
                        <p className="ml-2">{item}</p>
                      </div>
                      <p>₱ 9.00</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="flex items-center py-4 px-6 border-t-4 border-gray-300">
                <div className="flex justify-evenly items-center mr-6 space-x-4">
                  <MinusIcon className="h-7 button-primary cursor-pointer p-1" />
                  <p className="font-semibold">1</p>
                  <PlusIcon className="h-7 button-primary cursor-pointer p-1" />
                </div>
                <button className="bg-black rounded-md text-white flex-1 py-3 font-semibold text-sm">
                  Add to Basket - ₱328.00
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
