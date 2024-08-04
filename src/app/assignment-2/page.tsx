import React from "react";
import Head from "next/head";

const ComplexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Responsive Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <h1 className="text-2xl font-bold">Layout</h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
              <a href="#" className="hover:text-blue-200">
                About
              </a>
              <a href="#" className="hover:text-blue-200">
                Services
              </a>
              <a href="#" className="hover:text-blue-200">
                Contact
              </a>
            </nav>
            <button className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <section className="grid grid-cols-1 text-white md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-500 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Card 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-yellow-500 p-6 rounded-lg shadow-md md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Card 2</h2>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row gap-4 mb-8">
            {["Item 1", "Item 2", "Item 3"].map((item, index) => (
              <div
                key={index}
                className={`flex-1 p-6 rounded-lg shadow-md ${index === 0 && "bg-orange-500 text-white"} ${index === 1 && "bg-blue-500 text-white"} ${index === 2 && "bg-green-500 text-white"}`}
              >
                <h2 className="text-xl font-semibold mb-4">{item}</h2>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`bg-white p-4 rounded-lg shadow-md aspect-square flex items-center justify-center ${
                  num === 1 && "bg-red-500 text-white"
                } ${num === 3 && "bg-blue-500 text-white"} ${
                  num === 2 && "bg-green-500 text-white"
                } ${num === 4 && "bg-pink-500 text-white"}`}
              >
                <span className="text-2xl font-bold">{num}</span>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Main Content</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Title 1", "Title 2"].map((item, index) => (
                  <div key={index} className={`p-4 rounded ${index === 0 && "bg-sky-400"} ${index === 1 && "bg-lime-400"}`}>
                    <h3 className="font-semibold mb-2">{item}</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
              <ul className="space-y-2">
                {["Item 1", "Item 2", "Item 3"].map((item, index) => (
                  <li key={index} className={`p-2 rounded ${index === 0 && "bg-fuchsia-300"} ${index === 1 && "bg-emerald-300"} ${index === 2 && "bg-amber-300"}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded-lg shadow-md text-white 
                  ${index === 0 && "bg-rose-500"}
                  ${index === 1 && "bg-yellow-500 text-black"} ${
                  index === 2 && "bg-red-500"
                } ${index === 3 && "bg-emerald-500"} ${
                  index === 4 && "bg-blue-500"
                } ${index === 5 && "bg-cyan-500"} 
                ${index === 6 && "bg-indigo-500"} ${
                  index === 7 && "bg-violet-500"
                } `}
              >
                <div className="bg-zinc-300 flex items-center justify-center text-black w-full h-32 rounded mb-4">Image</div>
                <h3 className="font-semibold mb-2">Card Title {index + 1}</h3>
                <p className="text-sm opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-blue-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
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

export default ComplexPage;
