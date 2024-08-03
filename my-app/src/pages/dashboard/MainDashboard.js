import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import  ChartComponent  from "./ChartComponent.js";
// import "./dash.css";
import { useState } from "react";


function MainDashboard(){
    const [isOpen, setIsOpen] = useState(false);


    
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


 

    return(



        
<div className="text-gray-800 font-inter dark:bg-slate-900">
    {/* <!--sidenav --> */}
    <Sidebar/>
    {/* <!-- end sidenav --> */}

    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main dark:bg-slate-900">
        {/* <!-- navbar --> */}
          <Navbar/>
        {/* <!-- end navbar --> */}

      {/* <!-- Content --> */}
        <div className="p-6">
                    {/* <button type="button" className="text-lg font-semibold text-gray-900 sidebar-toggle">
                          <i className="ri-menu-line"></i>
                    </button> */}
                    
 {/********************************************************************** */}        
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800 dark:text-white">
                <div className="p-6 bg-white border rounded-md shadow-md shadow-black/5 dark:bg-gray-800">
                    <div className="flex justify-between mb-6">

                         <div className="z-10 dropdown">
                            <button  type="button" className="mb-1 text-gray-400 dropdown-toggle hover:text-gray-600 "> <i onClick={toggleDropdown} className="ri-more-fill"></i></button>
                           {isOpen &&
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30  py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px] dark:bg-slate-900 ">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600">الملف الشخصي</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600">الاعدادات</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600">تسجيل الخروج</a>
                                </li>
                            </ul> }
                        </div> 

                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">2</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">المستخدمين</div>
                        </div>
                        
                    </div>

                    <a href="/gebruikers" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 dark:bg-gray-800">
                    <div className="flex justify-between mb-4">
                    
                         <div className="dropdown">
                            <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i onClick={toggleDropdown} className="ri-more-fill"></i></button>
                            {isOpen &&
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30  py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                </li>
                            </ul> }
                        </div> 

                            <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">100</div>
                                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">Companies</div>
                        </div>
                        
                    </div>
                    <a href="/dierenartsen" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 dark:bg-gray-800">
                    <div className="flex justify-between mb-6">
                         <div className="dropdown">
                            <button  type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                </li>
                            </ul>
                        </div> 
                        <div>
                            <div className="mb-1 text-2xl font-semibold">100</div>
                            <div className="text-sm font-medium text-gray-400">Blogs</div>
                        </div>
                    </div>
                    <a href="" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                </div>
            </div>

{/********************************************** */}
{/*************************************************** */}
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 dark:bg-gray-800 ">
                <div className="relative flex flex-col w-full min-w-0 p-6 mb-4 break-words rounded shadow-lg lg:mb-0 bg-gray-50 dark:bg-gray-800">
                    <div className="px-0 mb-0 border-0 rounded-t">
                      <div className="flex flex-wrap items-center px-4 py-2">
                        <div className="relative flex-1 flex-grow w-full max-w-full">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">Users</h3>
                        </div>
                      </div>
                      <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-xs font-semibold text-left text-gray-500 uppercase align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 whitespace-nowrap">Role</th>
                              <th className="px-4 py-3 text-xs font-semibold text-left text-gray-500 uppercase align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 whitespace-nowrap">Amount</th>
                              <th className="px-4 py-3 text-xs font-semibold text-left text-gray-500 uppercase align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 whitespace-nowrap min-w-140-px"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-gray-700 dark:text-gray-100">
                              <th className="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">Administrator</th>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">1</td>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="mr-2">70%</span>
                                  <div className="relative w-full">
                                    <div className="flex h-2 overflow-hidden text-xs bg-blue-200 rounded">
                                      <div style={{width: '70%'}} className="flex flex-col justify-center text-center text-white bg-blue-600 shadow-none whitespace-nowrap"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-700 dark:text-gray-100">
                              <th className="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">User</th>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">6</td>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="mr-2">40%</span>
                                  <div className="relative w-full">
                                    <div className="flex h-2 overflow-hidden text-xs bg-blue-200 rounded">
                                      <div style={{width: '40%'}} className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-700 dark:text-gray-100">
                              <th className="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">User</th>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">5</td>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="mr-2">45%</span>
                                  <div className="relative w-full">
                                    <div className="flex h-2 overflow-hidden text-xs bg-pink-200 rounded">
                                      <div style={{width: '45%'}} className="flex flex-col justify-center text-center text-white bg-pink-500 shadow-none whitespace-nowrap"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="text-gray-700 dark:text-gray-100">
                              <th className="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">User</th>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">4</td>
                              <td className="p-4 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="mr-2">60%</span>
                                  <div className="relative w-full">
                                    <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                                      <div style={{width: '60%'}} className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 dark:bg-gray-800">
                    <div className="flex items-start justify-between mb-4">
                        <div className="font-medium">Activities</div>
                         <div className="dropdown">
                            <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30  py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-hidden dark:bg-gray-800">
                        <table className="w-full min-w-[540px]">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Lorem Ipsum</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                    </td>
                                     <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="dropdown">
                                            <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
                                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td> 
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Lorem Ipsum</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                    </td>
                                     <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="dropdown">
                                            <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
                                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/********************************************************************* */}
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 dark:bg-gray-800">
                <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 lg:col-span-2 dark:bg-gray-800">
                    <div className="flex items-start justify-between mb-4 dark:bg-gray-800">
                        <div className="font-medium">Order Statistics</div>
                         <div className="dropdown">
                            <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800">
                        <div className="p-4 border border-gray-200 border-dashed rounded-md">
                            <div className="flex items-center mb-0.5">
                                <div className="text-xl font-semibold">10</div>
                                <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">$80</span>
                            </div>
                            <span className="text-sm text-gray-400">Active</span>
                        </div>
                        <div className="p-4 border border-gray-200 border-dashed rounded-md">
                            <div className="flex items-center mb-0.5">
                                <div className="text-xl font-semibold">50</div>
                                <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">+$469</span>
                            </div>
                            <span className="text-sm text-gray-400">Completed</span>
                        </div>
                        <div className="p-4 border border-gray-200 border-dashed rounded-md">
                            <div className="flex items-center mb-0.5">
                                <div className="text-xl font-semibold">4</div>
                                <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">-$130</span>
                            </div>
                            <span className="text-sm text-gray-400">Canceled</span>
                        </div>
                    </div>
                    <div>
                        <ChartComponent/>
                    </div>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 dark:bg-gray-800">
                    <div className="flex items-start justify-between mb-4">
                        <div className="font-medium">Earnings</div>
                        <div className="dropdown">
                            <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
                            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[460px]">
                            <thead>
                                <tr>
                                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
                                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Earning</th>
                                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded"/>
                                            <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-b-gray-50">
                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      {/* <!-- End Content --> */}
    </main>

  </div>

    );


}

export default MainDashboard;