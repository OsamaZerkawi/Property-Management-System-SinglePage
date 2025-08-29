import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard.jsx";

function OfficeList() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ API GET request
  useEffect(() => {
    axios
      .get("/api/subscibers/popular", {
        params: { type: "مكتب" },
      })
      .then((response) => {
        setOffices(response.data.data);
        console.log("My Response", response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1 className="col-span-full text-xl font-bold mb-4">المكاتب المميزة</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        offices.map((office) => {
          const property = {
            postImage: office.logo,
            listing_type: office.type || "Office",
            postTitle: office.name,
            location: office.location,
            sell_details: { selling_price: office.rate * 1000 }, // fake example
            rent_details: null,
          };

          return <PropertyCard key={office.id} property={property} />;
        })
      )}
    </div>
  );
}

export default OfficeList;
