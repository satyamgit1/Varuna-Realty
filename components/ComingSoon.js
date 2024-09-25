import React, { useState } from 'react';

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="w-full min-h-screen bg-background ">
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
          <nav className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>
          <section className="flex items-center flex-1">
            <div className="flex flex-col w-full">
              <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                  Varuna Realty Coming 
                </span>
                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  Soon
                </span>
              </h1>
            </div>
          </section>


        </div>
      </section>
    </div>
  );
}
