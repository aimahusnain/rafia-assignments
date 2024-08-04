import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Bell, Settings, User, Search } from 'lucide-react';

const initialData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
];

const AdvancedDashboard: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setData(data.map(item => ({
        ...item,
        uv: Math.floor(Math.random() * 5000),
        pv: Math.floor(Math.random() * 5000),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Head>
        <title>Advanced Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">Dashboard</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} p-2 rounded-md mr-4`}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Bell className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
              <Settings className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer ml-4" />
              <User className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer ml-4" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stat Cards */}
          {['Total Users', 'Revenue', 'Active Projects'].map((title, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <AlertCircle className={`h-6 w-6 ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : 'text-yellow-500'}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold">
                          {index === 0 ? '1,234' : index === 1 ? '$12,345' : '56'}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${index === 1 ? 'text-green-600' : 'text-red-600'}`}>
                          {index === 1 ? '↑ 12%' : '↓ 8%'}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-6`}>
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdvancedDashboard;