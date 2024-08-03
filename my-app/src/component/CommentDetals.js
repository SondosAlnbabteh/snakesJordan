function CommentDetals(){



    return(

        
<section className="py-8 antialiased bg-white dark:bg-gray-900 lg:py-16 lg:w-[50rem] sm:w-72 md:w-96 px-10 text-right">
  <div className="px-4 ">
      <div className="flex items-center justify-end mb-6 ">
        <h2 className="text-lg font-bold text-gray-900 text-end lg:text-2xl dark:text-white">4 تعليقات</h2>
    </div>


    {/****************comment******************** */}
    <article className="p-6 text-base bg-white rounded-lg shadow-xl dark:bg-gray-900">
        <footer className="flex items-center justify-between mb-2">
    {/* <!-- Dropdown menu --> */}
        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            

    
        <div id="dropdownComment1"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
                        {/* <!-- end Dropdown menu --> */}
            
            <div className="flex items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022 ">Feb. 8, 2022</time></p>
                <p className="inline-flex items-center mx-3 text-sm font-semibold text-gray-900 dark:text-white">دانيال<img
                        className="w-6 h-6 mx-2 rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/></p>
            </div>
            

        </footer>
        <p className="text-gray-500 dark:text-gray-400">
            انها حقا اداة مفيدة
        </p>
        <div className="flex items-end justify-end mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                رد
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
            </button>
        </div>
    </article>
    {/****************end comment******************** */}

{/********************Reply******************** */}
    
    <article className="p-6 mt-1 mb-3 ml-6 text-base bg-white rounded-lg shadow-xl lg:ml-12 dark:bg-gray-900">
        <footer className="flex items-center justify-between mb-2">

  {/* <!-- Dropdown menu --> */}
  <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg dark:text-gray-40 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
          
            <div id="dropdownComment2"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>

                {/* <!-- end Dropdown menu --> */}
            

            
            <div className="flex items-center">
                <p className="text-sm text-gray-600 dark:text-gray-40"><time pubdate datetime="2022-02-12"
                        title="February 12th, 2022">Feb. 12, 2022</time></p>
                <p className="inline-flex items-center mx-3 my-1 text-sm font-semibold text-gray-900 dark:text-white">ابراهيم ابو الحارث<img
                        className="w-6 h-6 mx-2 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"/></p>
            </div>

            

        </footer>
        <p className="text-gray-500 dark:text-gray-400">
        مقدر جدا! سعيدة أنها أعجبتك☺️
        </p>
        <div className="flex items-center justify-end mt-4 space-x-4">
            <button type="button "
                className="flex text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                رد
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>                
            </button>
        </div>
    </article>
{/********************end Reply******************** */}

    
    {/****************comment******************** */}
    <article className="p-6 mb-3 text-base bg-white rounded-lg shadow-xl dark:bg-gray-900">
        <footer className="flex items-center justify-between mb-2">
    {/* <!-- Dropdown menu --> */}
        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            

    
        <div id="dropdownComment1"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
                        {/* <!-- end Dropdown menu --> */}
            
            <div className="flex items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022 ">Feb. 8, 2022</time></p>
                <p className="inline-flex items-center mx-3 text-sm font-semibold text-gray-900 dark:text-white">دانيال<img
                        className="w-6 h-6 mx-2 rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/></p>
            </div>
            

        </footer>
        <p className="text-gray-500 dark:text-gray-400">
            انها حقا اداة مفيدة
        </p>
        <div className="flex items-end justify-end mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                رد
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
            </button>
        </div>
    </article>
    {/****************end comment******************** */}
    {/****************comment******************** */}
    <article className="p-6 text-base bg-white rounded-lg shadow-xl dark:bg-gray-900">
        <footer className="flex items-center justify-between mb-2">
    {/* <!-- Dropdown menu --> */}
        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            

    
        <div id="dropdownComment1"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
                        {/* <!-- end Dropdown menu --> */}
            
            <div className="flex items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022 ">Feb. 8, 2022</time></p>
                <p className="inline-flex items-center mx-3 text-sm font-semibold text-gray-900 dark:text-white">دانيال<img
                        className="w-6 h-6 mx-2 rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/></p>
            </div>
            

        </footer>
        <p className="text-gray-500 dark:text-gray-400">
            انها حقا اداة مفيدة
        </p>
        <div className="flex items-end justify-end mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                رد
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
            </button>
        </div>
    </article>
    {/****************end comment******************** */}
    
    
    
        {/*************************************************** */}
        <form className="max-w-2xl mx-auto mt-6 mb-6 text-right shadow-xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 py-2 mb-4 text-right bg-white border border-gray-200 rounded-lg rounded-t-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="w-full px-0 text-sm text-right text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="....اكتب تعليق" required></textarea>
        </div>
        <div className="flex justify-end space-x-2 ">

        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mb-5">
            الغاء
        </button>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mb-5">
            انشر التعليق
        </button>
        
        </div>
    </form>
    {/******************************************************************** */}
    
      </div>
</section>
    );
}

export default CommentDetals;