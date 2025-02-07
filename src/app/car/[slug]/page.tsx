import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Layout from "@/app/components/layout";

interface Car {
    _id: string;
    name: string;
    brand: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: number;
    pricePerDay: number;
    originalPrice?: number;
    tags?: string[];
    image?: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
}

interface CarPageProps {
    params: { slug: string };
}

// Fetch car data based on slug
async function getCar(slug: string): Promise<Car | null> {
    try {
        const car = await client.fetch(
            groq`*[_type == "car" && slug.current == $slug][0] {
                _id, name, brand, type, fuelCapacity, transmission, seatingCapacity, 
                pricePerDay, originalPrice, tags, image{ asset->{url} }, slug
            }`,
            { slug }
        );
        return car || null;
    } catch (error) {
        console.error("Error fetching car data:", error);
        return null;
    }
}

export default async function CarPage({ params }: CarPageProps) {
    const { slug } = params;
    const car = await getCar(slug);

    if (!car) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
                    Car not found! Please try again.
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex flex-wrap min-h-screen bg-gray-100">
                <aside className="w-[360px] md:w-1/4 bg-white p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Filter</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Type</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" /> Sport</li>
                                <li><input type="checkbox" /> SUV</li>
                                <li><input type="checkbox" /> MPV</li>
                                <li><input type="checkbox" /> Sedan</li>
                                <li><input type="checkbox" /> Coupe</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                <main className="w-full md:w-3/4 p-6">
                    {/* Hero Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                        <div className="col-span-2 bg-blue-500 w-full h-auto p-4 rounded-lg shadow-lg">
                            <h1 className="text-2xl font-bold mb-2 text-white">{car?.name ?? "Unknown Car"}</h1>
                            <p className="text-white">{car?.brand} - {car?.type}</p>
                            {car?.image?.asset.url && (
                                <img src={car.image.asset.url} alt={car.name} className="w-full max-w-md mx-auto my-4 rounded-md" />
                            )}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg font-bold text-gray-800">{car?.name}</h2>
                            <p className="text-gray-500 mt-2">Fuel Capacity: {car?.fuelCapacity}L</p>
                            <p className="text-gray-500">Transmission: {car?.transmission}</p>
                            <p className="text-gray-500">Seating Capacity: {car?.seatingCapacity} People</p>
                            <p className="font-bold text-2xl mt-4 text-blue-600">${car?.pricePerDay}/day</p>
                            <a href={`/car/payment?car=${encodeURIComponent(car?.slug.current)}`} target="_blank">
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Rent Now
                                </button>
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
}
