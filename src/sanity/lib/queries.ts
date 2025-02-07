import { groq } from "next-sanity";

export const carQuery = groq`
  *[_type == "car"]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    slug,
    image {
      asset -> {
        _id,
        url
      }
    }
  }
`;
