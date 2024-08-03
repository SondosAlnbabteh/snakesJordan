import React, { useState } from 'react';

function Comment() {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="w-full p-2 bg-white border border-gray-600 rounded-sm dark:bg-slate-900">
            {/****************************num like and cooments****************************** */}
       
          
          <div className="flex items-center justify-between py-1 text-gray-500 dark:text-gray-200 dark:bg-gray-900">
              <div className="flex items-center space-x-2">
                  <button className="flex items-center justify-center gap-2 p-1 px-2 rounded-full dark:hover:bg-gray-700">
                      <span>42 اعجاب</span>
                      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                  </button>
              </div>
              <button onClick={toggleComments}  className="flex items-center justify-center gap-2 p-1 px-2 rounded-full dark:hover:bg-gray-700">
                  <span>2 تعليقات</span>
                  <svg width="22px" height="22px" viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                      </g>
                  </svg>
              </button>
          </div>
  {/****************************end num like and cooments****************************** */}
            {/* <h3 className="font-bold text-right cursor-pointer dark:text-white" onClick={toggleComments}>
                {showComments ? 'اخفاء التعليقات' : 'اظهار التعليقات'}
            </h3> */}

            {showComments && (
                <div className="flex flex-col mr-3">

                    <div className="p-3 my-3 ml-3 border rounded-sm dark:text-white">
                        <div className="flex items-center justify-end gap-3">
                            <h3 className="font-bold ">User name</h3>
                            <img
                                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                className="object-cover w-8 h-8 border-2 rounded-full border-emerald-400 shadow-emerald-400"
                                />
                        </div>
                        <p className="mt-2 text-right text-gray-600 mr-9 dark:text-gray-400">اخطر انواع الافاعي</p>
                    </div>

                    <div className="p-3 my-3 ml-3 border rounded-sm dark:text-white">
                        <div className="flex items-center justify-end gap-3">
                            <h3 className="font-bold ">User name</h3>
                            <img
                                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                className="object-cover w-8 h-8 border-2 rounded-full border-emerald-400 shadow-emerald-400"
                                />
                        </div>
                        <p className="mt-2 text-right text-gray-600 dark:text-gray-400 mr-9">اخطر انواع الافاعي</p>
                    </div>

                </div>
            )}

            <form>
                <div className="w-full px-3 my-2 ">
                    <textarea
                        className="w-full h-20 px-3 py-2 font-medium leading-normal text-right placeholder-gray-700 bg-gray-100 border border-gray-600 rounded resize-none focus:outline-none focus:bg-white dark:bg-slate-800 dark:placeholder-gray-500 dark:text-gray-400"
                        name="body"
                        placeholder="شارك معرفتك"
                        required
                    ></textarea>
                </div>
                <div className="flex w-full px-3">
                    <input
                        type="submit"
                        className="px-2.5 py-1.5 rounded-sm text-white text-sm bg-cyan-500"
                        value="انشر التعليق"
                    />
                </div>
            </form>
        </div>
    );
}

export default Comment;
