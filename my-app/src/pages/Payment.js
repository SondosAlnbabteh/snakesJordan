import { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Payment() {
    // card
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expired, setExpired] = useState({ month: '', year: '' });
  const [securityCode, setSecurityCode] = useState('');
  const [card, setCard] = useState('front');

  const formatCardNumber = (value) => {
    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const isValid = () => {
    return cardholder.length >= 5 &&
      cardNumber !== '' &&
      expired.month !== '' &&
      expired.year !== '' &&
      securityCode.length === 3;
  };

  const handleSubmit = () => {
    alert(`You did it ${cardholder}.`);
  };
//end card
//from and card
const [isHidden, setIsHidden] = useState(false);

function IsHidden(){

    setIsHidden(!isHidden);
}
//end form and card
  return (

    <div>
        <h1 className='mt-10 text-5xl font-semibold text-center'>عملية الشراء</h1>
          {/************info********** */}
<div
  key="1"
  className="text-right 2xl:container 2xl:mx-auto md:py-12 py-9"
>
  <div className="grid grid-cols-1 px-4 py-10 lg:grid-cols-4 md:grid-cols-2 bg-gray-50 dark:bg-gray-800 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 md:px-12">
    <div className="flex items-start justify-end">
      <div className="flex flex-col items-end">
        <svg
          className="text-gray-600 dark:text-white"
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3334 4H1.33337V21.3333H21.3334V4Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <h3 className="mt-8 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-white lg:mt-10">
          توصيل
        </h3>
        <p className="w-full mt-4 text-base font-normal leading-6 text-right text-gray-600 dark:text-gray-300 lg:w-full md:w-9/12">
          توصيل لجميع مناطق الأردن
        </p>
      </div>
    </div>

    <div className="flex items-start justify-end">
      <div className="flex flex-col items-end">
        <svg
          className="text-gray-600 dark:text-white"
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <h3 className="mt-8 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-white lg:mt-10">
          رعاية العميل
        </h3>
        <p className="w-full mt-4 text-base font-normal leading-6 text-right text-gray-600 dark:text-gray-300 lg:w-full md:w-9/12">
          خدمة العملاء لدينا متاحة 24/7 في
          <p className="font-semibold cursor-pointer">+495-589-509</p>
          <p className="font-semibold cursor-pointer">customercare@gmail.com</p>
        </p>
      </div>
    </div>

    <div className="flex items-start justify-end">
      <div className="flex flex-col items-end">
        <svg
          className="text-gray-600 dark:text-white"
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <h3 className="mt-8 text-xl font-semibold leading-5 text-right text-gray-800 dark:text-white lg:mt-10">
          دفع امن
        </h3>
        <p className="w-full mt-4 text-base font-normal leading-6 text-right text-gray-600 dark:text-gray-300 lg:w-full md:w-9/12">
          تضمن العملية استخدام التشفير من البداية إلى النهاية لضمان أمان البيانات خلال جميع مراحل المعاملة
        </p>
      </div>
    </div>
  </div>
</div>
{/*********end info********* */}

    <div className="flex flex-wrap justify-center m-4 mt-10">
           {/****************************** */}        
        <div className="w-1/2 max-w-md text-right bg-white shadow-lg credit-card rounded-xl">
        
        <div className="w-full max-w-sm p-4 text-right bg-white sm:p-8 dark:bg-gray-800">
  <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
    المبلغ الكلي
  </h5>
  <div className="flex items-baseline justify-end text-right text-gray-900 dark:text-white">
   
    <span className="text-5xl font-extrabold tracking-tight">
      48
    </span>
    <span className="text-xl font-normal text-gray-500 ms-1 dark:text-gray-400">
      /JD
    </span>
  </div>
  <ul
    className="space-y-5 my-7"
    role="list"
  >
    <li className="flex items-center justify-end">
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
        9 العدد
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    
    </li>
    <li className="flex justify-end">
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
        3 JD تكلفة التوصيل
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      
    </li>
    <li className="flex justify-end">
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
     5 JD سعر القطعة الواحدة
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
     
    </li>
    <li className="flex justify-end line-through decoration-gray-500">
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
        Sketch Files
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
   
    </li>
    <li className="flex justify-end line-through decoration-gray-500">
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
        API Access
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      
    </li>
    <li className="flex justify-end line-through decoration-gray-500">
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
        Complete documentation
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
     
    </li>
    <li className="flex justify-end line-through decoration-gray-500">
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
        24×7 phone & email support
      </span>
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      
    </li>
  </ul>
  <div className="flex items-start justify-end mt-9">
  <form className="items-start max-w-xs ">
    <label for="quantity-input" className="block my-2 mb-2 text-sm font-medium text-gray-900 text-end dark:text-white">:اختار الكمية</label>
    <div className="relative flex items-end max-w-[8rem] justify-end">
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
</div>
        </div>
        {/******************************** */}
      <div className="w-1/2 max-w-md bg-white shadow-lg credit-card rounded-xl">

      {/*****************payment************* */}
<div className={` ${!isHidden? 'hidden':"block"} mb-4 px-5 py-10 md:px-10`}>
      
        {/********************** Card *************************** */}
        <header className="flex flex-col items-center p-4 ">
          <div
            className={`relative ${card === 'front' ? 'block' : 'hidden'}`}
          >
            <img
              alt="front credit card"
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
            />
            <div className="absolute left-0 w-full px-6 py-4 text-lg text-white bg-transparent bottom-12">
              <p className="mb-4 text-xl">
                {cardNumber !== '' ? formatCardNumber(cardNumber) : '0000 0000 0000 0000'}
              </p>
              <div className="flex justify-between">
                <p>{cardholder !== '' ? cardholder : 'Card holder'}</p>
                <div>
                  <span>{expired.month}</span>
                  <span>{expired.month !== '' && '/'}</span>
                  <span>{expired.year}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`relative ${card === 'back' ? 'block' : 'hidden'}`}
          >
            <img
              alt="back credit card"
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
            />
            <div className="absolute right-0 flex justify-end w-full px-6 py-4 text-xl text-white bg-transparent bottom-20">
              <div className="flex items-center justify-center w-16 border border-white h-9">
                <p>{securityCode !== '' ? securityCode : 'code'}</p>
              </div>
            </div>
          </div>
          <ul className="flex mt-4 space-x-4">
            <li>
              <img
                alt="computop"
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
              />
            </li>
            <li>
              <img
                alt="verified by visa"
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
              />
            </li>
            <li>
              <img
                alt="mastercard"
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
              />
            </li>
          </ul>
        </header>
        {/********************** End Card *************************** */}

        <main className="p-4 mt-4">
          <h1 className="text-xl font-semibold text-center text-gray-700">
          بطاقه ائتمان
          </h1>
          <div className="mt-4 text-right">
            <div className="my-3">
              <input
                className="block w-full px-5 py-2 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                maxLength="22"
                placeholder="حامل البطاقة"
                type="text"
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                className="block w-full px-5 py-2 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                maxLength="19"
                placeholder="رقم البطاقة"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                onBlur={() => setCardNumber(formatCardNumber(cardNumber))}
              />
            </div>
            <div className="my-3">
              <label className="block mb-2 text-gray-700">منتهي الصلاحية</label>
              <div className="flex space-x-2">
                  <select
                  className="block w-1/2 px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg appearance-none focus:ring focus:outline-none"
                  value={expired.year}
                  onChange={(e) => setExpired({ ...expired, year: e.target.value })}
                >
                  <option disabled value="">YY</option>
                  {Array.from({ length: 7 }, (_, i) => 2021 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                
                <select
                  className="block w-1/2 px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg appearance-none focus:ring focus:outline-none"
                  value={expired.month}
                  onChange={(e) => setExpired({ ...expired, month: e.target.value })}
                >
                  <option disabled value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month.toString().padStart(2, '0')}>
                      {month.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              
              </div>
              <input
                className="block w-full px-5 py-2 mt-3 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                maxLength="3"
                placeholder="رمز الحماية"
                type="text"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                onBlur={() => setCard('front')}
                onFocus={() => setCard('back')}
              />
            </div>
          </div>
        </main>
  
        
        <footer className="p-4 mt-6">
          <button
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-colors rounded-sm bg-cyan-500 hover:bg-cyan-600 focus:ring focus:outline-none"
           
            onClick={IsHidden}
          >
            ادفع الان
          </button>
        </footer>
      </div>
      {/*****************end payment************* */}
         {/***************form***** */}
        
          <div className={`w-full px-5 py-10 md:px-10 ${isHidden? 'hidden':"block"}`}>
            <div className="mb-10 text-center">
              <h1 className="text-2xl font-bold text-gray-900">معلوماتك</h1>
              <p>
ادخل معلوماتك لتكملة عملية الشراء                                
              </p>
            </div>
            <div>
 

            <div className="flex -mx-3">
                <div className="w-full px-3 mb-5 text-right">
                  <label htmlFor="" className="px-1 text-xs font-semibold">الاسم الرباعي</label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                    </div>
                    <input type="text" className="w-full py-2 pl-10 pr-3 -ml-10 text-right border-2 border-gray-200 rounded-lg outline-none focus:border-cyan-500" placeholder="اكتب هنا" />
                  </div>
                </div>
              </div>
                
              <div className="flex -mx-3 text-right">
              <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="px-1 text-xs font-semibold">رقم الهاتف بديل</label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input type="text" className="w-full py-2 pl-10 pr-3 -ml-10 text-right border-2 border-gray-200 rounded-lg outline-none focus:border-cyan-500" placeholder="+962 *** *** ***" />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="px-1 text-xs font-semibold">رقم الهاتف</label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input type="text" className="w-full py-2 pl-10 pr-3 -ml-10 text-right border-2 border-gray-200 rounded-lg outline-none focus:border-cyan-500" placeholder="+962 *** *** ***" />
                  </div>
                </div>
              </div>
              
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5 text-right">
                  <label htmlFor="" className="px-1 text-xs font-semibold"> مكان السكن</label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                    </div>
                    <input type="text" className="w-full py-2 pl-10 pr-3 -ml-10 text-right border-2 border-gray-200 rounded-lg outline-none focus:border-cyan-500" placeholder="اكتب هنا" />
                  </div>
                </div>
              </div>
              {/* *****map*** */}
              {/*************************map*************************** */}

          <div
            className="grid md:grid-cols-1 gap-16 items-center relative overflow-hidden p-8 shadow-lg rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px]  before:h-full max-md:before:hidden h-96 dark:bg-gray-900">
      
            <div className="z-10 relative h-full max-md:min-h-[350px]  w-full">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="top-0 left-0 w-full h-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
                    allowfullscreen></iframe>
            </div>
        </div>
{/*************************end map*************************** */}
              {/****end map** */}
              <footer className="p-4 mt-6">
          <button
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-colors rounded-sm bg-cyan-500 hover:bg-cyan-600 focus:ring focus:outline-none"
            onClick={IsHidden}
          >
               استكمل عملية الدفع
          </button>
        </footer>

              
            </div>
          </div>
      
          {/*****************end form************* */}
        
      </div>
    </div>
    
 
    
    </div>
  );
}

export default Payment;
