"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "../components/layout";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// Define the type for the car object
interface Car {
    name: string;
    brand: string;
    pricePerDay: number;
    image?: {
        asset: {
            url: string;
        };
    };
}

const PaymentPage = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get("car");

    // Use typed state
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            client
                .fetch<Car>(
                    groq`*[_type == "car" && slug.current == $slug][0]{
                        name, brand, pricePerDay, image{asset->{url}}
                    }`,
                    { slug }
                )
                .then((data) => {
                    setCar(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [slug]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (!car) return <p className="text-center text-red-500">Car not found.</p>;

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen p-8">
                <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                        <section className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Billing Info</h2>
                            <p className="text-gray-500 text-sm mb-6">Please enter your billing info</p>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Your name" className="border p-2 rounded w-full" />
                                <input type="text" placeholder="Phone number" className="border p-2 rounded w-full" />
                                <input type="text" placeholder="Address" className="border p-2 rounded w-full" />
                                <input type="text" placeholder="Town or city" className="border p-2 rounded w-full" />
                            </div>
                        </section>

                        <section className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Rental Summary</h2>
                            <div className="flex items-center mb-4">
                                {car.image?.asset.url && (
                                    <img
                                        src={car.image.asset.url}
                                        alt={car.name}
                                        className="h-16 w-24 object-cover rounded mr-4"
                                    />
                                )}
                                <div>
                                    <h3 className="font-semibold">{car.name}</h3>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${car.pricePerDay}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>$0</span>
                                </div>
                            </div>
                            <div className="my-4">
                                <input
                                    type="text"
                                    placeholder="Apply promo code"
                                    className="border p-2 rounded w-3/4 mr-2"
                                />
                                <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300">
                                    Apply now
                                </button>
                            </div>
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total Rental Price</span>
                                <span>${car.pricePerDay}</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaymentPage;
