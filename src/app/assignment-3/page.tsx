import React from 'react';
import Head from 'next/head';

const ColorfulComplexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Colorful Complex Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <header className="bg-purple-600 text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Colorful Layout</h1>
            <nav className="hidden md:flex space-x-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a key={item} href="#" className="hover:text-purple-200">{item}</a>
              ))}
            </nav>
            <button className="md:hidden">Menu</button>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            <div className="md:col-span-8 bg-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
              <p>This is the main content area, spanning 8 columns on medium screens and above.</p>
            </div>
            <div className="md:col-span-4 bg-green-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
              <p>This is a sidebar area, spanning 4 columns on medium screens and above.</p>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'].map((feature, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${
                index % 4 === 0 ? 'bg-red-200' :
                index % 4 === 1 ? 'bg-yellow-200' :
                index % 4 === 2 ? 'bg-blue-200' :
                'bg-green-200'
              }`}>
                <h3 className="font-semibold mb-2">{feature}</h3>
                <p>This is a feature box that changes layout based on screen size.</p>
              </div>
            ))}
          </section>

          <section className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 bg-indigo-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Item 1</h2>
              <p>This is a flex item that will stack vertically on small screens and horizontally on medium screens and above.</p>
            </div>
            <div className="flex-1 bg-pink-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Item 2</h2>
              <p>This is another flex item demonstrating the responsive layout change.</p>
            </div>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-orange-200 p-4 rounded-lg shadow-md aspect-square flex items-center justify-center">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 bg-teal-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Nested</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-300 p-4 rounded">
                  <h3 className="font-semibold mb-2">Nested Item 1</h3>
                  <p>This is a nested item.</p>
                </div>
                <div className="bg-teal-300 p-4 rounded">
                  <h3 className="font-semibold mb-2">Nested Item 2</h3>
                  <p>This is another nested item.</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Side Content</h2>
              <p>This is some side content in the grid layout.</p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Complex Responsive Grid</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className={`p-4 rounded-lg shadow-md ${
                    index % 3 === 0 ? 'bg-red-300' :
                    index % 3 === 1 ? 'bg-green-300' :
                    'bg-blue-300'
                  } ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                    Item {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-sm">This is the about us section in the footer.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {['Home', 'About', 'Services', 'Contact'].map((item) => (
                    <li key={item}><a href="#" className="hover:text-blue-300">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <address className="text-sm not-italic">
                  <p>123 Example Street</p>
                  <p>City, State 12345</p>
                  <p>Email: info@example.com</p>
                  <p>Phone: (123) 456-7890</p>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ColorfulComplexPage;