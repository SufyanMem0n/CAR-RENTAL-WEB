import React from 'react';

interface CarCardProps {
  name: string;
  type: string;
  pricePerDay: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  pricePerDay,
  image,
  fuelCapacity,
  transmission,
  seatingCapacity,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-contain rounded-md"
      />
      <h3 className="font-semibold mt-2 text-lg">{name}</h3>
      <p className="text-gray-500">{type}</p>
      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
        <span>{fuelCapacity}</span>
        <span>{transmission}</span>
        <span>{seatingCapacity}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">${pricePerDay}/day</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;