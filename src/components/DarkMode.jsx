import React from "react";

function DarkMode() {
  return (
    <div className="flex flex-row items-center toggle">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-0 peer-focus:border-0 peer-focus:ring-offset-0 peer-focus:ring-offset-gray-100 dark:peer-focus:ring-offset-gray-700 peer-focus:border-transparent dark:peer-focus:border-transparent rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 peer-focus:border-0 peer-focus:ring-0"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          <i className="fa-solid fa-moon"></i>
        </span>
      </label>
    </div>
  );
}

export default DarkMode;
