import React from 'react';
import Head from 'next/head';

const ComplexLayout: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Complex Tailwind Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="bg-white shadow-lg rounded-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center p-6">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4 md:mb-0">Complex Layout</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                <li><a href="#" className="block p-2 bg-gray-100 rounded hover:bg-indigo-100 transition duration-300">Category 1</a></li>
                <li><a href="#" className="block p-2 bg-gray-100 rounded hover:bg-indigo-100 transition duration-300">Category 2</a></li>
                <li><a href="#" className="block p-2 bg-gray-100 rounded hover:bg-indigo-100 transition duration-300">Category 3</a></li>
                <li><a href="#" className="block p-2 bg-gray-100 rounded hover:bg-indigo-100 transition duration-300">Category 4</a></li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="md:col-span-2">
            {/* Featured Content */}
            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Featured Image 1</span>
                </div>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Featured Image 2</span>
                </div>
              </div>
            </section>

            {/* Articles Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <article key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="bg-gray-300 h-48"></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Article Title {index}</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 bg-white shadow-lg rounded-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">&copy; 2024 Complex Layout. All rights reserved.</div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ComplexLayout;