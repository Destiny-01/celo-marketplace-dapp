import React from "react";
import { useApp } from "@/context/App.context";

function SearchProduct() {
  const { setName, setLocation } = useApp();
  return (
    <div>
      <div className="flex justify-between p-4">
        <div>
          <label>Search By Name</label>
          <input
            type="text"
            placeholder="Search Product By Name"
            className="w-[125%] block border-gray-200 border p-2 rounded-md focus-visible:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Search By Location</label>
          <input
            type="text"
            placeholder="Search Product By Location"
            className="w-[125%] block border-gray-200 border p-2 rounded-md focus-visible:outline-none"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
