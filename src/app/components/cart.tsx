import React from "react";
import { urlFor } from "@/sanity/lib/image"; // Ensure this is correctly set up

interface CarCardProps {
  _id: string;
  name: string;
  category: string;
  price: number;
  image?: {
    asset: {
      _ref?: string;
      url?: string;
    };
  };
  specs: {
    capacity: string;
    transmission: string;
    people: number;
  };
  isFavorite: boolean;
}

const CarCard: React.FC<CarCardProps> = ({
  _id,
  name,
  category,
  price,
  image,
  specs,
  isFavorite,
}) => {
  // Safely handle image URL with a fallback
  const imageUrl =
    image?.asset?.url || (image?.asset ? urlFor(image.asset).url() : "/default-car.jpg");

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img
        src={imageUrl}
        alt={name}
        className="h-40 w-full object-contain rounded-md"
      />
      <h3 className="font-semibold mt-2 text-lg">{name}</h3>
      <p className="text-gray-500">{category}</p>
      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
        <span>{specs.capacity}</span>
        <span>{specs.transmission}</span>
        <span>{specs.people} People</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">${price}/day</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Rent Now
        </button>
      </div>
      {isFavorite && <div className="mt-2 text-sm text-yellow-500">⭐ Favorite</div>}
    </div>
  );
};

export default CarCard;
