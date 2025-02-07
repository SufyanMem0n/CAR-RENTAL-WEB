'use client';

import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlineCar, AiOutlineInbox } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Doughnut chart data
  const chartData = {
    labels: ['Sport Car', 'SUV', 'Coupe', 'Hatchback', 'MPV'],
    datasets: [
      {
        data: [17439, 9478, 18197, 12510, 14406],
        backgroundColor: ['#3B82F6', '#60A5FA', '#1E3A8A', '#93C5FD', '#2563EB'],
      },
    ],
  };

  // Transaction Data
  const transactions = [
    { name: 'Nissan GT - R', type: 'Sport Car', date: '20 July', price: '$80.00', imgSrc: '/car (3).png' },
    { name: 'Koenigsegg', type: 'Sport Car', date: '19 July', price: '$99.00', imgSrc: '/car (2).png' },
    { name: 'Rolls - Royce', type: 'Sport Car', date: '18 July', price: '$96.00', imgSrc: '/Car (4).png' },
    { name: 'CR - V', type: 'SUV', date: '17 July', price: '$80.00', imgSrc: '/Car (5).png' },
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-center mt-6 text-blue-500 dark:text-blue-400">Dashboard</h2>
        <nav className="mt-8 space-y-4 flex-grow">
          <a href="#" className="flex items-center px-6 py-3 bg-blue-500 text-white rounded">
            <AiOutlineCar size={20} className="mr-4" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
            <BiBarChartSquare size={20} className="mr-4" />
            Insight
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
            <AiOutlineInbox size={20} className="mr-4" />
            Inbox
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
            <AiOutlineCalendar size={20} className="mr-4" />
            Calendar
          </a>
        </nav>

        {/* Buttons */}
        <div className="border-t px-6 py-4 dark:border-gray-700">
          <button
            onClick={toggleDarkMode}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            {darkMode ? <BsSunFill size={20} className="mr-3" /> : <BsFillMoonFill size={20} className="mr-3" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="border-t px-6 py-4 dark:border-gray-700 space-y-4">
          <a href="#" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
            <FiSettings size={20} className="mr-3" />
            Settings
          </a>
          <a href="#" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
            <FiHelpCircle size={20} className="mr-3" />
            Help & Center
          </a>
          <a href="#" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
            <FiLogOut size={20} className="mr-3" />
            Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Details Rental</h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rental Details */}
          <div className="col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <img src="/Maps.png" alt="" className='w-[100%] h-[40%]'/>
            <div className='flex py-2 my-2 gap-2'><img src="/Look.png" alt="car" />
            <h2 className="text-xl font-bold">Nissan GT - R</h2></div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Sport Car</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Pick-Up</h3>
                <p>Location: Kota Semarang</p>
                <p>Date: 20 July 2022</p>
                <p>Time: 07:00</p>
              </div>
              <div>
                <h3 className="font-semibold">Drop-Off</h3>
                <p>Location: Kota Semarang</p>
                <p>Date: 21 July 2022</p>
                <p>Time: 01:00</p>
              </div>
            </div>
            <p className="mt-6 text-lg font-bold">Total Rental Price: $80.00</p>
          </div>

          {/* Top Car Rentals Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Top 5 Car Rental</h2>
            <Doughnut data={chartData} />
            <p className="text-center mt-4 font-bold text-2xl">72,030</p>
            <p className="text-center text-gray-500 dark:text-gray-400">Rental Cars</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Transactions</h2>
            <a href="#" className="text-blue-500">
              View All
            </a>
          </div>
          {transactions.map((car, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4 dark:border-gray-700">
              <div className="flex items-center">
                <img src={car.imgSrc} alt={car.name} className="w-40 h-14 object-cover rounded-lg mr-4 " />
                <div>
                  <h3 className="font-bold">{car.name}</h3>
                  <p className="text-gray-500 text-sm dark:text-gray-400">{car.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm dark:text-gray-400">{car.date}</p>
                <p className="font-bold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
