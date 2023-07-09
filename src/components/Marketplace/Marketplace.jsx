import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Market = () => {
  const items = [
    { id: 1, name: "Seeds", price: 10 },
    { id: 2, name: "Fertilizers", price: 20 },
    { id: 3, name: "Tools", price: 30 },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-primary min-h-screen overflow-x-hidden p-4">
      <h2 className="text-black font-extrabold text-2xl mb-4 text-center">Marketplace</h2>
      <ul className="text-white">
        {items.map((item) => (
          <li
            key={item.id}
            className="mb-2 py-2 px-4 bg-gray-800 rounded-lg"
          >
            <span>{item.name}</span> - ${item.price}
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default Market;
