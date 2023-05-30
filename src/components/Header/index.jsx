import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-blue-950 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Remedial</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Programs</a>
          <a className="mr-5 hover:text-gray-900">Blogs</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
        </nav>
        <button className="bg-transparent hover:bg-blue-950 hover:text-white mr-5 text-blue-900 font-semibold  py-2 px-4 border border-blue-900  rounded">
          Masuk
        </button>
        <button className="bg-blue-950 hover:bg-blue-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-950  rounded">
          Daftar
        </button>
      </div>
    </header>
  );
}

export default Header;
