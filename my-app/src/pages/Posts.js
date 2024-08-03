import NavPosts from "../component/NavPosts";
import snake from "../assets/images/heroSctionImg.jpg";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // هذا هو رمز النقاط الثلاثة
import Comment from "../component/comment";
import postSnake1 from "../assets/images/postSnake1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone} from "@fortawesome/free-solid-svg-icons";

function Posts(){
  /*******************write post function********************* */
   const [showPost, setShowPost] = useState(false);

   function ShowPost(){
    setShowPost(!showPost);
   }
  
  /**********************end write post function****************** */

  //******************popup message********* */
    // حالة للتحكم في عرض الـ popup
    const [isPopupOpen, setPopupOpen] = useState(false);

    // دالة لفتح الـ popup
    const openPopup = () => {
      setPopupOpen(true);
    };
  
    // دالة لإغلاق الـ popup
    const closePopup = () => {
      setPopupOpen(false);
    };
    /****************end popup message******* */
//*********************************function kabab menu******** */
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//*********************************end function kabab menu******** */
 
                 //******************function show more and less*****************            

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    const text = ",سلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص منه,سلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص منهسلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص منهسلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص منهسلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص منهسلام جميعا، يعطيكم العافيه، الخطوره ودرجه السميه اذا سمحتوا؟ منطقه بدر، تم العثور عليه ليله امس بجانب بركه السباحه، تم التعامل معه والتخلص م"; // النص الكامل
    const shortText = text.slice(0, 200); 
    const displayText = isExpanded ? text : `${shortText}...`;
    
                 //****************** end function show more and less*****************            

    

    return(
       <div className="dark:bg-slate-900">
        <NavPosts/>

     
<div className="px-4 py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto"> 
    
{/**************title****************** */}
  <div className="flex flex-col items-end justify-end space-y-2">
    {/* <h1 className="text-3xl font-semibold leading-7 text-gray-800 dark:text-white lg:text-4xl lg:leading-9">Order #13432</h1> */}

    {/************************write post********************** */}

    <div className="m-5 text-2xl font-bold text-center text-gray-800 cursor-pointer heading dark:text-white" onClick={ShowPost}>
    {!showPost ? "اكتب منشور" : "اغلقه"}</div>
{showPost && 
  <div className="flex flex-col w-10/12 max-w-2xl p-4 mx-auto text-gray-800 border border-gray-300 shadow-lg editor">
    <textarea className="p-3 text-right bg-gray-100 border border-gray-300 outline-none description sec h-60" spellcheck="false" placeholder="بم تفكر؟"></textarea>
    
    <div className="flex m-2 text-gray-500 icons">
      <svg className="p-1 mr-2 border rounded-full cursor-pointer hover:text-gray-700 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="p-1 mr-2 border rounded-full cursor-pointer hover:text-gray-700 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="p-1 mr-2 border rounded-full cursor-pointer hover:text-gray-700 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div className="ml-auto text-xs font-semibold text-gray-400 count">0/300</div>
    </div>
    <div className="flex buttons">
      <div className="p-1 px-4 ml-auto font-semibold text-gray-500 border border-gray-300 cursor-pointer btn">اغلق</div>
      <div className="p-1 px-4 ml-2 font-semibold text-gray-200 border cursor-pointer border-cyan-500 bg-cyan-500 btn">انشر</div>
    </div>
  </div>
  }
    {/**************************end write post******************** */}
  </div>
{/**************end title****************** */}

  <div className="flex flex-col items-stretch w-full mt-10 space-y-4 xl:flex-row jusitfy-center xl:space-x-8 md:space-y-6 xl:space-y-0">


  {/****************Customer card*************** */}  
  <div className="flex flex-col items-end justify-between w-full px-4 py-6 bg-gray-50 dark:bg-gray-800 xl:w-96 md:items-end md:p-6 xl:p-8">
      <h3 className="text-xl font-semibold leading-5 text-gray-800 dark:text-white">حول</h3>
      <div className="flex flex-col items-stretch justify-end w-full h-full md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
        
        <div className="flex flex-col items-stretch justify-between w-full mt-6 xl:h-full md:mt-0">
          <div className="flex flex-col items-end justify-end space-y-4 md:justify-end xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 xl:space-y-12 md:space-y-0 md:flex-row md:items-end">
            <div className="flex flex-col items-end justify-end space-y-4 md:justify-end md:items-end xl:mt-8">
              <p className="w-48 text-sm leading-5 text-gray-600 text-end lg:w-full dark:text-gray-300 xl:w-48 md:text-right">الغرض من هذا الموقع هو تثقيف أفراد المجتمع حول الثعابين السامة لتجنب لدغاتها وتثقيفهم بعدم قتل الثعابين غير السامة.
              التوعية الصحيحة من خلال نشر المشاركات العلمية والدقيقة</p>
            </div>
            
           <div>
              <p className="mb-4 text-base font-semibold leading-4 text-gray-800 text-end dark:text-white md:text-irght">للطوارئ اتصل على الرقم </p>
              <p className="w-48 text-sm leading-5 text-gray-600 text-end lg:w-full dark:text-gray-300 xl:w-48 md:text-right">   0779769810<FontAwesomeIcon icon={faPhone} className="mx-1"/></p>
           </div>

           <div className="flex flex-col items-end justify-end space-y-4 md:justify-end md:items-end xl:mt-8">
              <p className="text-base font-semibold leading-4 text-gray-800 text-end dark:text-white md:text-irght">قواعد النشر</p>
              <p className="w-48 text-sm leading-5 text-gray-600 text-end lg:w-full dark:text-gray-300 xl:w-48 md:text-right">اذكر المنطقة وحدد المكان والزمان </p>
              <p className="w-48 text-sm leading-5 text-gray-600 text-end lg:w-full dark:text-gray-300 xl:w-48 md:text-right">
                وصف البيئة (السكنية – الزراعية – البرية – الصحراوية)
                </p>
                <p className="w-48 text-sm leading-5 text-gray-600 text-end lg:w-full dark:text-gray-300 xl:w-48 md:text-right">
                كيف تمت مواجهة المخلوق أو الثعبان أو العقرب أو الحشرة؟                
                </p>

            </div>
          </div>

           
          
        </div>
      </div>
    </div>
  {/****************end Customer card*************** */} 

    <div className="flex flex-col items-end justify-end w-full space-y-4 md:space-y-6 xl:space-y-8">
  {/********************Customer’s Cart***************** */}
      <div className="flex flex-col items-end justify-end w-full px-4 py-4 dark:bg-gray-800 bg-gray-50 md:py-6 md:p-6 xl:p-8">
       
        <p className="mb-2 text-lg font-semibold leading-6 text-gray-800 md:text-xl dark:text-white xl:leading-5">منشورات المستخدمين</p>
     
    {/********************card post************* */}

    <div className="flex flex-col items-end justify-start w-full p-6 mt-6 space-y-6 border-b border-gray-200 md:space-y-8 ">
          
          <div className="flex flex-col items-start justify-between w-full pb-8 space-y-4 md:flex-row md:space-y-0">
            
           
            <div className="flex flex-col items-end justify-start w-full space-y-8">
            <div className="flex items-center justify-end w-full space-x-4">
                
           {/***********************kabab menu**************************** */}
         <div className="flex items-start">
            <IconButton
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem  onClick={openPopup} >حذف المنشور</MenuItem>
          <MenuItem onClick={handleClose}>تعديل المنشور</MenuItem>
        </Menu>
        </div> 
        {/*********************Close modal****************** */}
        {isPopupOpen && (
        <div id="popup-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="relative w-full max-w-md max-h-full p-4 bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 rounded-lg top-3 right-3 hover:bg-gray-200 hover:text-gray-900"
              onClick={closePopup}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">هل أنت متأكد أنك تريد حذف هذا المنشور؟</h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                onClick={() => {
                  // تنفيذ عملية الحذف هنا
                  closePopup();
                }}
              >
                نعم, انا متأكد
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                onClick={closePopup}
              >
                لا, تراجع
              </button>
            </div>
          </div>
        </div>
      )}
        {/*******************Close modal******************** */}
           {/*************************end kabab menu************************** */}
              <div>
                 <h3 className="text-xl font-semibold leading-6 text-gray-800 dark:text-white xl:text-2xl">
                    Sondos
                 </h3>
                 <p className="text-right dark:text-gray-400">13h</p>
                 </div>
               <img
                 src={snake}  
                 alt="ProfileImage"
                 className="object-cover w-12 h-12 rounded-full"  
               />

               
     
                 </div>
                 
                 {/******************text more and less***************** */}            
                 <div className="flex flex-row items-end space-x-2">
        <p className="flex-1 text-sm leading-7 text-gray-800 dark:text-white text-end">
          {displayText}<button 
          onClick={handleToggle}
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          {isExpanded ? 'عرض القليل' : 'عرض المزيد'}
        </button>
        </p>
        
      </div>
      
                  {/******************end text  more and less***************** */}            

              
            </div>
          </div>

          {/******************post images******************** */}
          <div className="w-full pb-8 ">
            
          <div class="grid grid-cols-2 md:grid-cols-2 gap-1">
            <div>
               <img className="hidden w-full max-w-full md:block h-80" src={snake} alt="dress" />
            </div>
            <div>
               <img className="hidden w-full max-w-full md:block h-80" src={postSnake1} alt="dress" />
            </div>
            <div>
               <img className="hidden w-full max-w-full md:block h-80" src={postSnake1} alt="dress" />
            </div>
            <div>
               <img className="hidden w-full max-w-full md:block h-80" src={snake} alt="dress" />
            </div>
            
          </div>
            
            {/* <img className="hidden w-full md:block h-96 " src={snake} alt="dress" /> */}
            {/* <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" /> */}
            
          <div class="grid grid-cols-2 md:grid-cols-2 gap-1 md:hidden">
            <div>
               <img className="w-full h-32 max-w-full" src={snake} alt="dress" />
            </div>
            <div>
               <img className="w-full h-32 max-w-full" src={postSnake1} alt="dress" />
            </div>
            <div>
               <img className="w-full h-32 max-w-full" src={postSnake1} alt="dress" />
            </div>
            <div>
               <img className="w-full h-32 max-w-full" src={snake} alt="dress" />
            </div>
            
          </div>
          <div>
{/****************************num like and cooments****************************** */}
          
          
		{/* <div className="flex items-center justify-between py-1 text-gray-500 dark:text-gray-200 dark:bg-gray-900">
			<div className="flex items-center space-x-2">
				<button className="flex items-center justify-center gap-2 p-1 px-2 rounded-full hover:bg-gray-700">
					<span>42 اعجاب</span>
					<svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
					</svg>
				</button>
			</div>
			<button className="flex items-center justify-center gap-2 p-1 px-2 rounded-full hover:bg-gray-700">
				<span>2 تعليقات</span>
				<svg width="22px" height="22px" viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
					</g>
				</svg>
			</button>
		</div> */}
{/****************************end num like and cooments****************************** */}

          </div>

           <div className="flex items-center">
            <Comment/>
            
           </div>
          </div>

          {/**********************end post images************************* */}
          
        </div>
    {/******************** end card post************* */}

    

        
      </div>

  {/********************end Customer’s Cart***************** */}

     
    </div>




  

    
  </div>
</div>
       </div>
    );
}

export default Posts;