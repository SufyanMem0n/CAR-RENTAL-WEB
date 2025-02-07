const Filters = () => {
    return (
      <aside className="w-1/4 bg-gray-50 p-6 shadow-md rounded-lg">
        <section className="mb-6">
          <h2 className="font-semibold text-lg">Type</h2>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <label key={type} className="block mt-2">
              <input type="checkbox" className="mr-2" />
              {type}
            </label>
          ))}
        </section>
        <section className="mb-6">
          <h2 className="font-semibold text-lg">Capacity</h2>
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((cap) => (
            <label key={cap} className="block mt-2">
              <input type="checkbox" className="mr-2" />
              {cap}
            </label>
          ))}
        </section>
        <section>
          <h2 className="font-semibold text-lg">Price</h2>
          <input
            type="range"
            className="w-full mt-2"
            min={0}
            max={100}
          />
          <p className="text-gray-500 mt-1">Max: $100/day</p>
        </section>
      </aside>
    );
  };
  export default Filters;
  