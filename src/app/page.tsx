'use client';
import { useEffect, useState } from 'react';
import { fetchCars, Car } from '@/sanity/lib/fetchCars'; // Import the utility
import HeroSection from './components/hero';
import SearchSection from './components/search';
import CarCard from './components/cart';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import { Slug } from 'sanity';
import { carQuery } from '@/sanity/lib/queries';
export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        console.log('Fetched cars:', data); // Debugging statement
        setCars(data || []); // Ensure it's always an array
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const popularCars = cars?.slice(0, 4) || [];
  const recommendedCars = cars?.slice(4, 12) || [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <SearchSection />

      {/* Popular Cars Section */}
      <section className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Popular Cars</h2>
          <a href="#" className="text-blue-600">View All</a>
        </div>
          
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularCars.map((car) => (
            <Link key={car._id} href={`/products/${car.Slug.current}`} passHref>
              <CarCard
                _id={car._id}
                name={car.name}
                category={car.category}
                price={car.price}
                image={car.image}
                specs={car.specs || {}}
                isFavorite={car.isFavorite}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Recommended Cars</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recommendedCars.map((car) => (
            <Link key={car._id} href={`/car/${car.slug.current}`} passHref>
              <CarCard
                _id={car._id}
                name={car.name}
                category={car.category}
                price={car.price}
                image={car.image}
                specs={car.specs || {}}
                isFavorite={car.isFavorite}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Show More Button */}
      <div className="flex justify-center p-4">
        <Link href="/catagory" target="_blank">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-lg mt-5">
            Show More Cars
          </button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}