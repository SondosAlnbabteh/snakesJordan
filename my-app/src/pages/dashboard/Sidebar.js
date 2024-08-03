// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setSelectedDropdown(selectedDropdown === dropdown ? null : dropdown);
  };

  const handleSidebarOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    <button type="button" className="text-lg font-semibold text-gray-900 sidebar-toggle">
                <i className="ri-menu-line"></i>
            </button>
      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform ${
          isSidebarOpen ? 'transform-none' : '-translate-x-full'
        }`}
      >
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="text-2xl font-bold">
            LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span>
          </h2>
        </a>
        <ul className="mt-4">
          <span className="font-bold text-gray-400">ADMIN</span>
          <li className="mb-1 group">
            <Link to="/dashboard" className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <i className="mr-3 text-lg ri-home-2-line"></i>
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleDropdownToggle('users'); }}
              className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100"
            >
              <i className='mr-3 text-lg bx bx-user'></i>
              <span className="text-sm">Users</span>
              <i className={`ri-arrow-right-s-line ml-auto ${selectedDropdown === 'users' ? 'rotate-90' : ''}`}></i>
            </a>
            <ul className={`pl-7 mt-2 ${selectedDropdown === 'users' ? 'block' : 'hidden'}`}>
              <li className="mb-4">
                <Link to="/users/all" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</Link>
              </li>
              <li className="mb-4">
                <Link to="/users/roles" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Roles</Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <Link to="/activities" className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <i className='mr-3 text-lg bx bx-list-ul'></i>
              <span className="text-sm">Activities</span>
            </Link>
          </li>
          <span className="font-bold text-gray-400">BLOG</span>
          <li className="mb-1 group">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleDropdownToggle('posts'); }}
              className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100"
            >
              <i className='mr-3 text-lg bx bxl-blogger'></i>
              <span className="text-sm">Post</span>
              <i className={`ri-arrow-right-s-line ml-auto ${selectedDropdown === 'posts' ? 'rotate-90' : ''}`}></i>
            </a>
            <ul className={`pl-7 mt-2 ${selectedDropdown === 'posts' ? 'block' : 'hidden'}`}>
              <li className="mb-4">
                <Link to="/posts/all" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</Link>
              </li>
              <li className="mb-4">
                <Link to="/posts/categories" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Categories</Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <Link to="/archive" className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <i className='mr-3 text-lg bx bx-archive'></i>
              <span className="text-sm">Archive</span>
            </Link>
          </li>
          <span className="font-bold text-gray-400">PERSONAL</span>
          <li className="mb-1 group">
            <Link to="/notifications" className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <i className='mr-3 text-lg bx bx-bell'></i>
              <span className="text-sm">Notifications</span>
              <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <Link to="/messages" className="flex items-center px-4 py-2 font-semibold text-gray-900 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <i className='mr-3 text-lg bx bx-envelope'></i>
              <span className="text-sm">Messages</span>
              <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 z-40 w-full h-full bg-black/50 md:hidden sidebar-overlay"
          onClick={handleSidebarOverlayClick}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
