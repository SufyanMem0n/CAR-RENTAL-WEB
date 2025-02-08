export default interface Car {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: {
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
  slug: {
    current: string; // Ensure `slug.current` is a string
  };
}
