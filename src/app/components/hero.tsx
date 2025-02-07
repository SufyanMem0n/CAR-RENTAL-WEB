

// components/HeroSection.tsx
const HeroSection = () => {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 animate-pulse">
        {/* Left Hero Card */}
        <div className="rounded-xl bg-blue-400 p-8 text-white">
          <h2 className="mb-2 text-3xl font-bold">The Best Platform for Car Rental</h2>
          <p className="mb-6 text-sm opacity-90">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold">
            Rental Car
          </button>
          <div className="mt-8">
            <img
              src="/image 7.png"
              alt="White Sports Car"
              className="max-w-[80%] transform translate-x-[10%]"
            />
          </div>
        </div>
  
        {/* Right Hero Card */}
        <div className="rounded-xl bg-[#3563E9] p-8 text-white">
          <h2 className="mb-2 text-3xl font-bold">Easy way to rent a car at a low price</h2>
          <p className="mb-6 text-sm opacity-90">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="rounded-lg bg-blue-500 px-6 py-2 font-semibold">
            Rental Car
          </button>
          <div className="mt-8">
            <img
              src="/image 8.png"
              alt="Silver Sports Car"
              className="max-w-[80%] transform translate-x-[10%]"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;