// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from "react";
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import heroSectionImg from '../assets/images/heroSctionImg.jpg';
// import "../assets/style/home.css";
// import image from "../assets/images/cardesImage.jpg";





// function Home(){
    
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 1024, // For large screens
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 768, // For tablets and smaller screens
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 480, // For mobile screens
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//     return(
        
//         <main className="dark:bg-slate-900">
//             {/***************************heroSection******************************** */}
//            <section className="mb-40 bg-white border-b-2 shadow-2xl dark:bg-gray-900 maxHeight-1/4 border-cyan-600" >
//     <div className="grid max-w-screen-xl px-4 py-8 mx-auto mb-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-96">
//          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
//             <img className="rounded-full h-96 w-96" src={heroSectionImg} alt="mockup"/>
//         </div>
//           <div className="mr-auto place-self-center lg:col-span-7">
//             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl xl:text-6xl dark:text-white">المعرفة هي الحماية</h1>
//             <p className="max-w-2xl mb-6 font-light text-center text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
// تعرف على أفاعي الأردن واحصل على النصائح والإرشادات لحمايتك وحماية أحبائك
// </p>
           
//             <Link to="/HelpCenter" className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border hover:bg-cyan-400 border-cyan-600 bg-cyan-500">
//             طلب المساعدة
//             </Link> 
//         </div>
                     
//     </div>
// </section>
//         {/********************************end heroSection********************************* */}
        
//         {/********************************scroll********************************* */}
        

// <section className="border-b-2 shadow-2xl border-cyan-600 dark:bg-slate-900" >

//     <h1 className="text-4xl text-center mb-11 dark:text-white">المنتجات المتوفرة</h1>
// <div className="justify-around gap-5 px-32 py-10 ">
//        <Slider {...settings}>
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//       <div>
//       <div
        
//         className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
//       >
//         <div className="h-[100px]">
//           <img
//             src={image}
//             alt=""
//             className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
//           />
//         </div>
//         <div className="p-3 text-center">
//           <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
//           <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
//             مصيدة الافاعي عالية الجودة
//           </p>
//           <p className="mb-3 text-black dark:text-white group-hover:text-white">
//             <span>20 JD </span>
//           </p>
//           <Link
//             className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
//             to={``}
//           >
//             Read more
//           </Link>
//         </div>
//       </div>
//       </div>

      
//     </Slider>
//     </div>
//     <div className="my-4 mt-8 px-96">
//        <Link to="" className="flex items-center justify-center px-3 py-3 text-base font-medium text-center text-white border hover:bg-cyan-400 border-cyan-600 bg-cyan-500">
//            استعرض المنتجات    
//        </Link>
//      </div>
// </section>
//         {/********************************end scroll********************************* */}

// <section className="flex justify-center my-20 border-b-2 shadow-2xl border-cyan-600 dark:bg-slate-900">


// <div className="my-10 cardsHome">
//   <div className="boxText"> 
//     <p className="title "><b>
//ساهم معنا
//</b> </p>
//     <p className="descrription">
//تبرعك يضمن وصول المصل المنقذ للحياة إلى أولئك الذين عضتهم مخلوقات سامة عندما تكون كل ثانية مهمة
//</p>
//     <div className="my-4 px-96 ">
//        <Link to="" className="flex items-center justify-center px-3 py-3 text-base font-medium text-center bg-white border text-cyan-600 hover:bg-cyan-100 border-cyan-100">
//            ساهم معنا من هنا   
//        </Link>
//      </div>
//   </div>  
// </div>


// </section>

// <section className="flex justify-center border-b-2 shadow-2xl border-cyan-600 dark:bg-slate-900">


// <div className="my-10 cardsHome ">
//   <div className="boxText"> 
//     <p className="title"><b>
//الخدمات المتوفة
//</b></p>
//     <p className="descrription">
//قم بحماية منزلك ومحاصيلك من خلال خدماتنا المتخصصة في مكافحة الحشرات. من الثعابين والعقارب إلى الآفات الزراعية، نحن نوفر لك كل ما تحتاجه
//</p>

//     <div className="my-4 px-96 ">
//     <div className="chip"> 
        
//      <div>  
        
//        <div className="icons">
//          <FontAwesomeIcon icon={faPhone} />
//        </div>
//          +962 786 851 332
         
//      </div> 
//      <div>  
        
//         <div className="icons">
//           <FontAwesomeIcon icon={faPhone} />
//         </div>
//           +962 786 851 332
          
//       </div> 
     
//       </div>
//      </div>
//   </div>  
// </div>


// </section>


//         </main>
//     );
// }

// export default Home;





import { Link } from "react-router-dom";
// import { AiOutlineRight } from "react-icons/ai";
import heroSectionImg from '../assets/images/hero.webp';
import serum1 from "../assets/images/serum1.webp";
import serum2 from "../assets/images/serum2.jpg";
import serum3 from "../assets/images/serum3.webp";
import protection1 from "../assets/images/protection1.jfif";
import protection2 from "../assets/images/protection2.webp";
import protection3 from "../assets/images/protection3.webp";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';








 
function Home() {


/******************************************************** */
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "التوعية والتثقيف",
      desc: "  تقديم معلومات تفصيلية عن أنواع الثعابين السامة وغير السامة، بما في ذلك السمات المميزة لكل نوع، وأماكن تواجدها، وعاداتها, إرشادات حول كيفية التعامل مع الثعابين إذا تم العثور عليها، بما في ذلك أساليب الوقاية والاحتياطات",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "المتجر الإلكتروني",
      desc: "توفير مصائد مختلفة لتسهيل القبض على الثعابين بأمان,  تقديم مبيدات فعالة للتعامل مع الثعابين وحماية الممتلكات, بيع أدوات وأجهزة للحماية من الثعابين، مثل الشبكات والأقفاص",
    },
    {
      icon: (
        <svg
          xmlns=""
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "خدمة المساعدة السريعة",
      desc: "فريق متخصص لتقديم المساعدة الفورية عند التعرض لهجوم من مخلوقات سامة,  تقديم مشورة مجانية للمساعدة في التعامل مع الحوادث المتعلقة بالثعابين والمخلوقات السامة",
    },
  ];
  /******************************************************** */


  return (
    <div>


      {/*****************heroSection******************* */}
      <div
        className="h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroSectionImg})`,
          height: "39.7rem",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="w-1/2 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
 المعرفة هي الحماية         
    </h1>

    <h6 className="mb-4 text-4xl font-light text-white">
    تعرف على أفاعي الأردن واحصل على النصائح والإرشادات لحمايتك وحماية أحبائك
    </h6>
            <nav className="my-8 text-white">
              <ol className="inline-flex p-0 list-none">
                <li className="flex items-center">
                <Link to="/HelpCenter" className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border hover:bg-cyan-400 border-cyan-600 bg-cyan-500">
           طلب المساعدة
            </Link>
                
                </li>
               
              </ol>
            </nav>
          </div>
        </div>

         
      </div>
      {/*****************end heroSection******************* */}

      {/*************************features************************* */}
      <div className="pt-10 overflow-hidden text-right">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-center text-balck">
                الخدمات الرئيسية                
              </h2>
            </div>
            <div className="grid items-end justify-end mt-16 overflow-hidden border divide-x divide-y rounded-lg sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3">
              {features.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="relative p-8 space-y-8 transform">
                    <div className="flex items-center justify-center flex-none w-12 h-12 bg-black rounded-lg text-cyan-500">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-xl font-medium transition group-hover:text-cyan-500">
                        {item.title}
                      </h5>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/******************************end features******************************** */}
            {/**************************slider******************* */}


      
      
      {/*************************end slider*************** */}
      {/*******************************help********************************* */}
      <section className="overflow-hidden py-28">
        <div className="flex flex-wrap items-center max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="w-full lg:w-1/2">
            <div className="items-center hidden gap-8 sm:flex">
              <div className="w-full xl:w-1/2">
                <div className="mb-4 border rounded-lg border-cyan-500">
                  <img
                    src={serum1}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="border rounded-lg border-cyan-500">
                  <img
                    src={serum2}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full xl:w-1/2 ">
                <div className="relative z-10 border rounded-lg border-cyan-500">
                  <img
                    src={serum3}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3334"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3334 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 60.3333 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 88.6667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 117.667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 74.6667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 103 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 132 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 31 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 103 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 132 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 31 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 103 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 132 1.66683)"
                        fill="#38bdf8"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-10 text-center text-black capitalize lg:w-1/2 ">
            <div className="">
              <h2 className="mb-8 text-4xl font-bold text-cyan-500 sm:text-4xl">
             ساهم معنا
              </h2>
              <p className="mb-8 ml-8 text-base text-body-color">
              عندما تكون كل ثانية مهمة تبرعك يضمن وصول المصل المنقذ للحياة إلى أولئك الذين عضتهم مخلوقات سامة 
              </p>
                <nav className="my-8 text-white">
              <ol className="inline-flex p-0 list-none">
                
                <li className="flex items-center">
                <Link to="/HelpCenter" className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border hover:bg-cyan-400 border-cyan-600 bg-cyan-500">
                    طلب المساعدة    
                </Link>
                
                </li>
               
              </ol>
            </nav>
            </div>
          </div>
        </div>
      </section>

{/***************************end help***************************** */}
{/******************************services*********************** */}
<section className="overflow-hidden py-28">
        <div className="flex flex-wrap items-center max-w-screen-xl px-4 mx-auto md:px-8">
         
        <div className="w-full pt-10 text-center text-black capitalize lg:w-1/2 ">
            <div className="">
              <h2 className="mb-8 text-4xl font-bold text-cyan-500 sm:text-4xl">
          الخدمات المتوفرة
              </h2>
              <p className="mb-8 ml-8 text-base text-body-color">
              تم ترخيص شركة لمكافحة الافاعي والعقارب والحشرات والافات الزراعية ونتميز بالإتقان وخلطات مركزه جدا تدوم لاوقات طويلة وفعاله ومضمونه للتخلص من الافاعي والعقارب              </p>
              <p className="mb-8 ml-8 text-base text-body-color">
للاستفسار او الحجز اتصل على الرقم التالي
              </p>
                <nav className="my-8 text-white">
              <ol className="inline-flex p-0 list-none">
                
                <li className="flex items-center">
                <div className="flex p-4 rounded-sm bg-cyan-500">  
        
                    <div className="icons">
                       <FontAwesomeIcon icon={faPhone} />
                    </div>
                       +962 786 851 332
         
               </div> 
                
                </li>
               
              </ol>
            </nav>
            </div>
          </div>

          
          <div className="w-full lg:w-1/2">
            <div className="items-center hidden gap-8 sm:flex">
              <div className="w-full xl:w-1/2">
                <div className="mb-4 border rounded-lg border-cyan-500">
                  <img
                    src={protection1}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="border rounded-lg border-cyan-500">
                  <img
                    src={protection2}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full xl:w-1/2 ">
                <div className="relative z-10 border rounded-lg border-cyan-500">
                  <img
                    src={protection3}
                    alt="about"
                    className="w-full rounded-lg"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3334"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3334 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 60.3333 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 88.6667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 117.667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 74.6667 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 103 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 132 30.9998)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 31 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 103 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 132 16.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 31 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3333)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={103}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 103 1.66683)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="#38bdf8"
                      />
                      <circle
                        cx={132}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 132 1.66683)"
                        fill="#38bdf8"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </section>
{/***************************end services********************** */}      
    
    </div>
  );
}

export default Home;
