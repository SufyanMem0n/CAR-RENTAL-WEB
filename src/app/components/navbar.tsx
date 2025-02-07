import React from 'react';
import { Search, Heart, Bell, Settings } from 'lucide-react';
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MORENT
        </div>

        {/* Search Bar */}
        <div className="relative mx-4 flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full rounded-lg border border-gray-200 py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <button className="rounded-lg border border-gray-200 p-2">
            <svg
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Heart Icon */}
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>

          {/* Notification Icon */}
          <div className="relative">
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            {/* Notification Badge */}
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </div>

          {/* Settings Icon */}
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>

          {/* Profile Picture */}
          
          <button className="ml-2 overflow-hidden rounded-full">
            <img
              
              src="/api/placeholder/32/32"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;