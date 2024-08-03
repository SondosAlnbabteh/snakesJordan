import contact from "../assets/images/contact.jpg";

function HelpCenter(){

    return(
        <div className=" dark:bg-slate-900">


<section >
  {/*******************image******************** */}
  <div className="relative w-full h-96"><img className="absolute object-cover object-center w-full h-full " src={contact} alt="nature image" />
    <div className="absolute inset-0 w-full h-full bg-black/50"></div>
    <div className="relative px-64 text-center pt-28">
      <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">مساعدة مجانية</h2>
      <p className="block font-sans text-xl antialiased font-normal leading-relaxed text-white mb-9 opacity-70">يقدم فريقنا مساعدة مجانية، بما في ذلك العلاج ومضادات السموم، للدغات الثعابين دون أي تكلفة وفي أسرع وقت ممكن. اتصل بنا على الفور إذا واجهت أي ثعبان في منزلك أو مكان عملك أو حديقتك. نحن متواجدون 24 ساعة لحالات الطوارئ.</p>
    </div>
  </div>
  {/*******************end image******************** */}


  <div className="px-8 mb-8 -mt-16">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-center py-12 bg-white border border-white shadow-lg rounded-xl shadow-black/5 saturate-200 dark:bg-gray-900 dark:text-white dark:border-gray-900">

      {/***********************form contact************************** */}
      <div className="flex-auto p-5 lg:p-10">
        <h4 className="text-2xl font-semibold text-center">هل الحاله طارئة؟</h4>
        <p className="mt-1 mb-4 leading-relaxed text-center text-blueGray-500">
        في حالة وجود أي عضة، يرجى الاتصال بالأرقام الرئيسية على الجانب الأيمن من الصفحة أو ملء النموذج.        </p>
        <div className="relative w-full mt-8 mb-3">
          <label className="block mb-2 text-xs font-bold text-right uppercase text-blueGray-600" htmlFor="full-name">الاسم الكامل</label>
          <input type="text" id="full-name" className="w-full px-3 py-3 text-sm text-right transition-all duration-150 ease-linear bg-white border-0 rounded shadow-md placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" placeholder="الاسم الكامل"/>
        </div>
        <div className="relative w-full mb-3">
          <label className="block mb-2 text-xs font-bold text-right uppercase text-blueGray-600" htmlFor="email">البريد الإلكتروني</label>
          <input type="email" id="email" className="w-full px-3 py-3 text-sm text-right transition-all duration-150 ease-linear bg-white border-0 rounded shadow-md placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" placeholder="البريد الإلكتروني"/>
        </div>
        <div className="relative w-full mb-3">
          <label className="block mb-2 text-xs font-bold text-right uppercase text-blueGray-600" htmlFor="message">الرسالة</label>
          <textarea id="message" rows="4" className="w-full px-3 py-3 text-sm text-right bg-white border-0 rounded shadow-md placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" placeholder="...اكتب رسالة"></textarea>
        </div>
        <div className="mt-6 text-right">
          <button className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-black uppercase transition-all duration-150 ease-linear rounded shadow-md outline-none bg-cyan-400 dark:bg-gray-700 dark:text-amber-50 hover:shadow-lg focus:outline-none">
            أرسل الرسالة
          </button>
        </div>
      </div>
      {/*****************************end form contact*********************** */}

      {/***************************** information************************* */}
      <div className="grid gap-6 px-4 my-8 text-right">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
          <p className="font-sans text-base font-bold text-gray-700 dark:text-gray-300">عمان /سحاب</p>
        </div>

        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
          </svg>
          <p className="font-sans text-base font-bold text-gray-700 dark:text-gray-300">+1 123 456 7890</p>
        </div>

        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
          </svg>
          <p className="font-sans text-base font-bold text-gray-700 dark:text-gray-300">info@lahospital.com</p>
        </div>

        
      </div>
      {/*****************************end information************************* */}
    </div>
  </div>
</div>

</section>



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

</div>
    );

}

export default HelpCenter;

