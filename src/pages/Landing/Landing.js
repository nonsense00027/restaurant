import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import banner from "../../assets/img/banner.jpg";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const handleSearch = () => {
    history.push("/home");
  };
  return (
    <div>
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_pmYw5P.json"
        background="transparent"
        speed={0.5}
        style={{
          width: 300,
          height: 300,
        }}
        loop
        autoplay
      ></lottie-player>
      {/* NAVBAR */}
      <div className="fixed top-0 py-4 w-full bg-white border-b border-gray-300">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold">LOGO</h1>
          <button className="bg-dark rounded-md px-5 py-2 text-white font-semibold">
            Login
          </button>
        </div>
      </div>

      {/* BANNER */}
      <main className="w-screen h-screen pt-18">
        <img
          className="object-cover object-right-top h-full w-full"
          src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </main>

      {/* FLOATING */}
      <div className="fixed top-40 right-20 bg-white py-14 px-10 rounded-md shadow-lg">
        <div className="mb-4">
          <h3 className="text-2xl">Welcome,</h3>
          <h2 className="text-3xl font-bold w-96">
            Looking for a restaurant near you?
          </h2>
        </div>

        <div>
          <button className="flex items-center justify-between w-full px-4 border border-gray-300 py-2 my-3 rounded-md text-xl">
            <div className="flex items-center">
              <LocationMarkerIcon className="h-6 mr-2 text-primary-dark" />{" "}
              Catalunan Grande
            </div>
            <ChevronDownIcon className="h-6" />
          </button>
        </div>
        <div className="relative w-full">
          <button
            className="w-full bg-primary text-white py-2 rounded-md font-semibold text-xl shadow-md transition transform duration-150 ease-in active:scale-95 active:bg-primary-dark hover:bg-primary-dark"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
