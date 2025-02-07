import { client } from './client';
import { groq } from 'next-sanity';

export interface Car {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  specs: {
    capacity: string;
    transmission: string;
    people: number;
  };
  isFavorite: boolean;
}

export async function fetchCars(): Promise<Car[]> {
  const query = groq`*[_type == "car"]{
    _id,
    name,
    category,
    price,
    image,
    specs,
    isFavorite
    slug
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}