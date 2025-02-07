import Layout from "../components/layout";
import CarCard from "../components/cart";
import { urlFor } from "@/sanity/lib/image";
export default function Home() {
    const carsData = [
        {
          
          name: "Koenigsegg",
          category: "Sport",
          price: 99.00,
          image: "/car (7).png",
          specs: {
            capacity: "90L",
            transmission: "Manual",
            people: 2
          },
          isFavorite: true
        },
        {
          name: "Nissan GT-R",
          category: "Sport",
          price: 99.00,
          image: "/car (8).png",
          specs: {
            capacity: "80L",
            transmission: "Manual",
            people: 2
          },
          isFavorite: true
        },
        {
          name: "All New Rush",
          category: "Sport",
          price: 99.00,
          image: "/Car (23).png",
          specs: {
            capacity: "70L",
            transmission: "Manual",
            people: 2
          },
          isFavorite: true
        },
        {
          name: "MG ZX Exclusice",
          category: "Sport",
          price: 99.00,
          image: "/Car (10).png",
          specs: {
            capacity: "70L",
            transmission: "Manual",
            people: 2
          },
          isFavorite: false
        }];
      
    const reviews = [
        {
            name: 'Alex Stanton',
            position: 'CEO at Bukalapak',
            date: '21 July 2022',
            comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars.',
        },
        {
            name: 'Skylar Dias',
            position: 'CEO at Amazon',
            date: '20 July 2022',
            comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and a wide variety of cars.',
        },
    ];

    return (
        <Layout>
            <div className="flex flex-wrap min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-[360px] md:w-1/4 bg-white p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Filter</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Type</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" /> Sport (10)</li>
                                <li><input type="checkbox" /> SUV (12)</li>
                                <li><input type="checkbox" /> MPV (16)</li>
                                <li><input type="checkbox" /> Sedan (20)</li>
                                <li><input type="checkbox" /> Coupe (14)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Capacity</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" /> 2 People (10)</li>
                                <li><input type="checkbox" /> 4 People (14)</li>
                                <li><input type="checkbox" /> 6 People (12)</li>
                                <li><input type="checkbox" /> 8 or More (16)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Price</h3>
                            <input type="range" min="50" max="100" className="w-full" />
                            <p>Max: $100.00</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-full md:w-3/4 p-6">
                    {/* Hero Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                        <div className="col-span-2 bg-blue-500 w-full h-auto p-4 rounded-lg shadow-lg">
                            <h1 className="text-2xl font-bold mb-2 text-white">Sports car with the best design and acceleration</h1>
                            <p className="text-white">
                                Safety and comfort while driving a futuristic and elegant sports car.
                            </p>

                            {/* Main Car Image */}
                            <img src="/image 8.png" alt="Nissan GT" className="w-full max-w-md mx-auto my-4" />
                            {/* Three Small Images */}
                            <div className="flex justify-center gap-4">
                                <img src="/View 1 (1).png" alt="Interior" className="h-24 object-cover rounded-lg" />
                                <img src="/View 2 (1).png" alt="Dashboard" className="h-24 object-cover rounded-lg" />
                                <img src="/View 3 (1).png" alt="Steering" className="h-24 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Car Info */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg font-bold text-gray-800">Nissan GT - R</h2>
                            <p className="text-gray-500 mt-2">
                                Inspired by the most unforgiving proving ground, the "race track".
                            </p>
                            <div className="mt-4 text-gray-700">
                                <p>Capacity: 2 People</p>
                                <p>Steering: Manual</p>
                                <p>Fuel: Gasoline</p>
                            </div>
                            <p className="font-bold text-2xl mt-4 text-blue-600">$80/day</p>
                            <a href={'payment?car=Nissan%20GT%20-%20R'} target="blank">
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Rent Now
                                </button>
                            </a>
                        </div>
                    </section>

                    {/* Reviews */}
                    <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
                        <h2 className="font-bold text-xl mb-4 text-gray-800">Reviews</h2>
                        {reviews.map((review, index) => (
                            <div key={index} className="border-b py-4">
                                <h3 className="font-bold text-blue-600">{review.name}</h3>
                                <p className="text-gray-500 text-sm">{review.position}</p>
                                <p className="text-gray-600 mt-2">{review.comment}</p>
                            </div>
                        ))}
                    </section>

                    {/* Car Listings */}
                   <section>

                        <h2 className="font-bold text-xl mb-4 text-gray-800">Recent Cars</h2>
                         
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {carsData.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

      <section className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Recommendation Car</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {carsData.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

                </main>
            </div>
        </Layout>
    );
}  
