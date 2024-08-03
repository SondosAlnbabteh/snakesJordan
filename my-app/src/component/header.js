import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPhone, faTrash, faUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  const toggleFavorite = () => {
    setFavoriteOpen(prev => !prev);
  };
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

    //**************************dark Mode **************************** 
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      let savedMode = localStorage.getItem("displayMode");
      if (!savedMode) {
        savedMode = "light";
        setDarkMode(false);
        localStorage.setItem("displayMode", savedMode);
      } else {
        setDarkMode(savedMode === "dark");
      }
  
      // Apply the dark mode class to the root element
      if (savedMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, []);
  
    const toggleDisplayMode = () => {
      const newMode = !darkMode ? "dark" : "light";
      setDarkMode(!darkMode);
      localStorage.setItem("displayMode", newMode);
  
      // Toggle the dark mode class on the root element
  
        document.documentElement.classList.toggle("dark");
     
    };
      //************************** end dark Mode **************************** 
  return (
    <div className='bg-cyan-500 dark:bg-slate-900'>
      <header>
        <div className="container px-6 py-3 mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <span className="mx-1 text-sm">عمان سحاب</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
             
            </div>
            <div className="hidden w-full text-2xl font-semibold text-gray-100 md:text-center sm:block">
                <div className='flex flex-wrap justify-center gap-4 text-sm'>
                    <div>
                    <FontAwesomeIcon icon={faPhone} />
                     0779769810
                        
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faPhone} />
                    0786851332
                        
                    </div>
                    
                </div>
            </div>
            <div className="flex items-center justify-end w-full text-gray-100 gap-7">
                 {/****************Login****************** */}
                 <div className='flex flex-wrap justify-center text-sm'>
                    <Link to="/Login">
                    <div>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />    
                    </div>
                 </Link>
                </div>
                {/*************end Login***************** */}
              {/****************Header****************** */}
                <div className='flex flex-wrap justify-center text-sm'>
                    
                      <Link to="/Profile"><div>
                    <FontAwesomeIcon icon={faUser} />
                     </div>
                        </Link>
                   
                 
                </div>
                {/*************end Header***************** */}
                {/***************favorite****************** */}
               
               
            <button
                  onClick={toggleFavorite}
                  className="mx-4 text-gray-100 focus:outline-none sm:mx-0"
            >       
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
               </svg>
            </button>
            

                {/***************end favorite************** */}
                {/**************cart**************** */}
              <button
                onClick={toggleCart}
                className="mx-4 text-gray-100 focus:outline-none sm:mx-0"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
                {/**************end cart**************** */}


               {/**************button of dark mode*************** */}
      
    
    <div class=" flex justify-center items-center">
    <button onClick={toggleDisplayMode}
         class="h-9 w-9 rounded-lg p-2 ">
         <svg class="fill-sky-950 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
         </svg>
         <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
             <path
                 d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                 fill-rule="evenodd" clip-rule="evenodd"></path>
         </svg>
     </button>
    </div>
      {/**************button of dark mode*************** */}



              {/*************menu************** */}
              <div className="flex sm:hidden">
                <button
                  onClick={toggleMenu}
                  aria-label="toggle menu"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  type="button"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/***************end menu************** */}
            </div>
          </div>

{/**********************nav************************ */}
          
          <nav className="items-center justify-center hidden font-semibold text-white sm:flex sm:block">
      <Link to="/MainDashboard" className="mx-4 hover:text-gray-200">
          مشرف
        </Link>
        <Link to="/AboutUs" className="mx-4 hover:text-gray-200">
          قصتنا
        </Link>
        <Link to="" className="mx-4 hover:text-gray-200">
          معرفة
        </Link>
        <Link to="/store" className="mx-4 hover:text-gray-200">
          متجر
        </Link>
        <Link to="/Posts" className="mx-4 hover:text-gray-200">
          المنشورات
        </Link>
        <Link to="/" className="mx-4 hover:text-gray-200">
          الصفحة الرئيسية
        </Link>
      </nav>

{/************************end nav   ********************** */}
      
       
        </div>
      </header> 
          
          
          {/**********************cart********************** */}
           <div
        className={`fixed top-0 right-0 w-full h-full max-w-xs px-6 py-4 overflow-y-auto transition duration-300 transform bg-white border-l-2 border-gray-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-700">
           عربة التسوق
          </h3>
          {/**************** */}
          <button onClick={toggleCart}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/****************** */}
        </div>
        <hr className="my-3" />

        {/***************************** */}
        <div className="flex justify-end mt-6">
          <div className="flex">
          <span className="text-gray-600">
            20JD
          </span>
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">
                  مصيده الافاعي
              </h3>
              
              <div className="flex items-end justify-end mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="mx-2 text-gray-700">
                  2
                </span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
         

            <img
              alt=""
              className="object-cover w-20 h-20 rounded"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            />
        </div>
     {/************************************* */}

        
        {/***************************** */}
        <div className="flex justify-end mt-6">
          <div className="flex">
          <span className="text-gray-600">
            20JD
          </span>
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">
                  مصيده الافاعي
              </h3>
              
              <div className="flex items-end justify-end mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="mx-2 text-gray-700">
                  2
                </span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
         

            <img
              alt=""
              className="object-cover w-20 h-20 rounded"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            />
        </div>
     {/************************************* */}
         {/***************************** */}
         <div className="flex justify-end mt-6">
          <div className="flex">
          <span className="text-gray-600">
            20JD
          </span>
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">
                  مصيده الافاعي
              </h3>
              
              <div className="flex items-end justify-end mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="mx-2 text-gray-700">
                  2
                </span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
         

            <img
              alt=""
              className="object-cover w-20 h-20 rounded"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            />
        </div>
     {/************************************* */}
    
        <a className="flex items-center justify-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase rounded bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:bg-cyan-500">
          <span>
            متابعة عمليه الشراء
          </span>
          <svg
            className="w-5 h-5 mx-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
          {/**********************end cart********************** */}
              {/**********************favorite********************** */}
              <div
                className={`fixed top-0 right-0 w-full h-full max-w-xs px-6 py-4 overflow-y-auto transition duration-300 transform bg-white border-l-2 border-gray-300 ${favoriteOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
              >

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-700">
           المفضلة
          </h3>

          {/************** */}
          <button onClick={toggleFavorite}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/************ */}
          
        </div>
        <hr className="my-3" />

        {/******** */}
        <div className="flex justify-end mt-6">

                
<h3 className="mt-1 mr-12 text-sm text-gray-600 text-start">
 <FontAwesomeIcon icon={faTrash} />

 </h3>



<div className="flex">
<div className="mx-3">
 <h3 className="text-sm text-right text-gray-600">
   مصيده الافاعي
 </h3>
 <h3 className="text-sm text-right text-gray-600">
   20 JD
 </h3>
 <h3 className="flex justify-end mt-1 text-sm text-gray-600">
 <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
 </h3>

</div>

<img
 alt=""
 className="object-cover w-20 h-20 rounded"
 src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
/>

</div>
</div>

{/******** */}
        
            {/******** */}
            <div className="flex justify-end mt-6">

                
            <h3 className="mt-1 mr-12 text-sm text-gray-600 text-start">
             <FontAwesomeIcon icon={faTrash} />

             </h3>
         
            
        
         <div className="flex">
           <div className="mx-3">
             <h3 className="text-sm text-right text-gray-600">
               مصيده الافاعي
             </h3>
             <h3 className="text-sm text-right text-gray-600">
               20 JD
             </h3>
             <h3 className="flex justify-end mt-1 text-sm text-gray-600">
             <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
             </h3>
          
           </div>

           <img
             alt=""
             className="object-cover w-20 h-20 rounded"
             src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
           />
           
         </div>
       </div>

        {/******** */}
           {/******** */}
           <div className="flex justify-end mt-6">

                
<h3 className="mt-1 mr-12 text-sm text-gray-600 text-start">
 <FontAwesomeIcon icon={faTrash} />

 </h3>



<div className="flex">
<div className="mx-3">
 <h3 className="text-sm text-right text-gray-600">
   مصيده الافاعي
 </h3>
 <h3 className="text-sm text-right text-gray-600">
   20 JD
 </h3>
 <h3 className="flex justify-end mt-1 text-sm text-gray-600">
 <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
 </h3>

</div>

<img
 alt=""
 className="object-cover w-20 h-20 rounded"
 src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
/>

</div>
</div>

{/******** */}
       
      
      </div>
          {/**********************end favorite********************** */}
      
    </div>
  );
}

export default Header;
