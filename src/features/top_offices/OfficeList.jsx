import React, { useState, useEffect } from "react";
import { getPopularOffices } from "../../api/api_repo.jsx";
import OfficeCard from "./OfficeCard.jsx";

function OfficeList() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOffices = async () => {
      try {
        const data = await getPopularOffices("مكتب");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setOffices(data);
      } catch (err) {
        setError("Failed to load offices.");
      } finally {
        setLoading(false);
      }
    };
    loadOffices();
  }, []);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1 className="col-span-full text-xl font-bold mb-4">المكاتب المميزة</h1>
      {offices.map((office) => (
        <OfficeCard
          key={office.id}
          property={{
            postImage: office.logo,
            listing_type: office.type || "Office",
            postTitle: office.name,
            location: office.location,
            sell_details: { selling_price: office.rate * 1000 },
            rent_details: null,
          }}
        />
      ))}
    </div>
  );
}

export default OfficeList;
