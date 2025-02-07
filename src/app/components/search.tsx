import Navbar from "./navbar"

// components/SearchSection.tsx
const SearchSection = () => {
    return (

    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-32">
        {/* Pick-Up Section */}
        <div className="rounded-lg bg-white p-6 w-[582px] shadow-sm">
          <div className="mb-4 flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium">Pick-Up</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select location</option>
              </select>
            </div>
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select date</option>
              </select>
            </div>
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select time</option>
              </select>
            </div>
          </div>
         </div>
        
        {/* Drop-Off Section */}
        <div className="rounded-lg bg-white p-6 w-[582px] shadow-sm">
          <div className="mb-4 flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium">Drop-Off</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select location</option>
              </select>
            </div>
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select date</option>
              </select>
            </div>
            <div className="relative">
              <select className="w-full rounded-lg border p-2 text-sm">
                <option>Select time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchSection;