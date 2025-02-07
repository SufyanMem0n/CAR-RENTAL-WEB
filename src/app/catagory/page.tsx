'use client';
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Ensure this is correct
import { carQuery } from "@/sanity/lib/queries"; // Ensure this is correct
import { urlFor } from "@/sanity/lib/image"; // Ensure image URL is working
import Link from "next/link";
import Layout from "../components/layout"; 
import { Slug } from "sanity";
import { Car } from "lucide-react";
interface Car {
  slug: Slug
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  image: {
    asset: {
      url: string;
    };
  };
}

const Category = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await client.fetch(carQuery); // Use carQuery here
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!cars.length) {
    return <div className="text-center py-10">No cars available</div>;
  }

  return (
    <Layout>
    
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Category Page</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car._id} className="border rounded-lg p-4 shadow-md bg-white">
             <Link href={`/car/${car.slug.current}`}target="_blank">
              <img
                src={urlFor(car.image.asset.url).width(500).url()} // Resize image for better UX
                alt={car.name}
                className="h-40 w-full object-contain rounded-md shadow-lg"
              />
              <h3 className="font-semibold mt-2 text-lg">{car.name}</h3>
              <p className="text-gray-500">{car.type}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <span>{car.seatingCapacity} seats</span>
                <span>{car.transmission}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold">${car.pricePerDay}/day</p>
                
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    View Details
                  </button>
                  
              </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Category;
