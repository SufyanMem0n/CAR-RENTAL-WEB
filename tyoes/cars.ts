export interface Car {
  slug: {
    _type: "slug";
    _current: string;
  };
  _id: string;
    _createdAt?: string; // Optional: Sanity automatically adds this field
    _updatedAt?: string; // Optional: Sanity automatically adds this field
    _rev?: string; // Optional: Sanity automatically adds this field
    _type: "car"; // Document type
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
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
}

  