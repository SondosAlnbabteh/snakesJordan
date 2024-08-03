import { Link } from "react-router-dom";
import SnakeToole1 from "../assets/images/SnakeToole1.png";
import SnakeToole2 from "../assets/images/SnakeToole2.png";

import SnakeToole3 from "../assets/images/SnakeToole3.png";

import SnakeToole from "../assets/images/SnakeToole4.png";
import CommentDetals from "../component/CommentDetals";


function ProductDetail(){

    return(
<>
  

<div className="bg-white">
 

  <main className="pt-10 sm:pt-16">

{/*************************images************************ */}
    <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="hidden overflow-hidden rounded-lg shadow-xl aspect-h-4 aspect-w-3 lg:block">
        <img src={SnakeToole1} alt="Two each of gray, white, and black shirts laying flat." className="object-center w-full h-full "/>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="overflow-hidden rounded-lg shadow-xl aspect-h-2 aspect-w-3">
          <img src={SnakeToole2} alt="Model wearing plain black basic tee." className="object-center w-full h-full "/>
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl aspect-h-2 aspect-w-3">
          <img src={SnakeToole3} alt="Model wearing plain gray basic tee." className="object-center w-full h-full "/>
        </div>
      </div>
      <div className="shadow-xl aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img src={SnakeToole} alt="Model wearing plain white basic tee." className="object-center w-full h-full "/>
      </div>
    </div>
{/*************************end images************************ */}

    
    <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-end">أداة الصيد بالعصا</h1>
      </div>

      <div className="p-5 mt-4 lg:row-span-3 lg:mt-0">
        {/****************************share and like button******************************/}
        <div className="flex flex-wrap items-end justify-end gap-7">
      <button class="sharebtn relative flex z-10 bg-white border rounded-md p-2 opacity-100 focus:outline-none focus:border-blue-400 items-end" title="click to enable menu">
          <span class="inline-block pr-4 text-gray-600">مشاركة</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 w-6 my-1 text-blue-700">
            <path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
            </path>
          </svg>
      </button>

      <button class="sharebtn relative flex z-10 bg-white border rounded-md p-2 opacity-100 focus:outline-none focus:border-blue-400 items-end" title="click to enable menu">
         <span class="inline-block pr-4 text-gray-600">مفضل</span>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-6 my-1 text-red-600">
             <path fill="none" stroke="currentColor" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
      </button>
        </div>

        {/*****************************end share and like button*****************************/}
      
        <p className="mt-5 text-3xl tracking-tight text-gray-900 text-end">10 JD</p>
{/**************************reviews************************* */}
        <div className="items-end mt-6">
          <h3 className=" text-end">تعليقات</h3>
          <div className="flex items-end justify-end">
            <div className="flex items-end gap-2">
            <a href="#" className="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500 text-end"> 3 تعليقات</a>
            <p className=" text-end"> 4 من أصل 5 نجوم</p>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
{/**************************end reviews************************* */}
 {/********************************************************* */}
        <form className="mt-10">
        <h2 className=" text-end">توصيل</h2>
        <h4 className=" text-end">
            الشحن: 3.50 د.أ 
        </h4>
        <h4 className=" text-end">   ومن المتوقع التسليم بعد يومين من الطلب</h4>


        <div className="flex items-start justify-end mt-9">
  <form className="items-start max-w-xs mx-auto">
    <label for="quantity-input" className="block my-2 mb-2 text-sm font-medium text-center text-gray-900 dark:text-white">:اختار الكمية</label>
    <div className="relative flex items-start max-w-[8rem] justify-end">
      <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="p-3 bg-gray-100 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-s-lg h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
        </svg>
      </button>
      <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9" required />
      <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="p-3 bg-gray-100 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-e-lg h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
      </button>
    </div>
  </form>
</div>
{/***************************************************************** */}
          {/**************************Description****************************** */}

          <Link to="/Payment">
          
          <button type="submit" className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">اشتري الآن</button>
          </Link>
          
          <button type="submit" className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-gray-500 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">أضف إلى السلة</button>

        </form>
      </div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div>
          <h3 className="mb-4 text-right">وصف</h3>

          <div className="space-y-6">
            <p className="text-base text-right text-gray-900">
              
يوركيياس اداة التقاط الثعابين والزواحف ذات الفك العريض، مجموعة ادوات التعامل مع الافعى الجرسية - 60 انش
            </p>
          </div>
        </div>

        <div className="mt-10">
          {/* <h3 className="text-sm font-medium text-gray-900">Highlights</h3> */}

          <div className="mt-4">
            <div  className="pl-4 space-y-2 text-sm text-right list-disc ">
              <p className="items-end text-gray-400"><span className="text-gray-600">
                ملقط ثعبان احترافي عالي الجودة وقابل للطي وشديد التحمل مقاس 60 انش/ 150 سم/ 4 قدم، يمكن استخدامه أيضًا كأداة للالتقاط
                </span></p>
              <p className="text-gray-400"><span className="text-gray-600">
              تتميز أداة التقاط الثعابين بمادة أنابيب من الستانلس ستيل المستخدم في صناعة الطائرات ولمسة نهائية مصقولة باللون الفضي. "الأسنان" الحادة الواسعة تجعلها فعالة على أي ثعابين بما في ذلك الثعابين الصغيرة ولا تسبب ضررًا لرفوف المطبخ والبوسوم والراكون والظربان والكلب والقطط وما إلى ذلك
                </span></p>
              <p className="text-gray-400"><span className="text-gray-600">
              هذا التصميم من ملاقط التقاط الثعابين هو أفضل تقنية متوفرة في السوق للتعامل بأمان مع الثعابين بطريقة إنسانية.                </span></p>
              <p className="text-gray-400"><span className="text-gray-600">
              أداة التقاط الثعابين قابلة للطي: عندما تطوى إلى نصفين فمن السهل حملها في حقيبتك عند الذهاب في رحلة ميدانية. حامل المصباح اليدوي لعمود التقاط الثعبان يسمح بالعمل ليلاً.                </span></p>
            </div>
          </div>
        </div>

       
      </div>
{/***************************************reviews************************************ */}
<div>
  
<CommentDetals/>
</div>
     
{/***************************************end reviews************************************ */}
      
    </div>
    <section aria-labelledby="related-products-heading" className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="related-products-heading" className="text-xl font-bold tracking-tight text-gray-900 ">Customers also purchased</h2>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="relative group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.png" alt="Front of men&#039;s Basic Tee in black." className="object-cover object-center w-full h-full lg:h-full lg:w-full"/>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

</div>

</>

    );
}

export default ProductDetail;