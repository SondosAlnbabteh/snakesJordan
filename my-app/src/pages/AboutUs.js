import us from "../assets/images/admins.jpg";
import admin1 from "../assets/images/adminAbuBader.jpg";
import admin2 from "../assets/images/adminIbrahim.jpg";
import admin3 from "../assets/images/adminAbd.jpg";

function AboutUs(){
    return(

<div>
  <section className="relative bg-blueGray-50">
    {/*************hero************** */}
    <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">

        {/******************** */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${us})`
        }}
      >
        <span
          className="absolute w-full h-full bg-black opacity-75"
          id="blackOverlay"
        />
      </div>

      {/***************************** */}
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div className="pr-12">
              <h1 className="text-5xl font-semibold text-white">
              تعرف على فريقنا
                            </h1>
              <p className="mt-4 text-lg text-white text-blueGray-200">
              نحن مجموعة من المحترفين المتفانين الذين يعملون معًا لتقديم أفضل الخدمات والدعم. كل عضو في فريقنا يساهم بخبراته ومهاراته الفريدة لضمان نجاح مهمتنا              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
        style={{
          transform: 'translateZ(0px)'
        }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <polygon
            className="fill-current text-blueGray-200"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
    {/*************end hero************** */}



    
    <section className="pb-10 -mt-24 bg-blueGray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-center rounded-full shadow-lg">
                  <img src={admin1} className="items-center justify-center w-12 h-12 rounded-full"/>
                </div>
                <h6 className="text-xl font-semibold">
                    ابو بدر 

                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                أنا أبو بدر، وأعمل جنبًا إلى جنب مع إبراهيم أبو الحارث في مجال مساعدة الأشخاص المتعرضين لدغات الأفاعي. نكرس جهودنا لتقديم الدعم والرعاية اللازمة لأولئك الذين يعانون من لدغات الأفاعي، ونسعى دائمًا لتقديم أفضل المساعدة الممكنة. بفضل تعاوننا واهتمامنا العميق بهذا المجال، نتمكن من التعامل بفعالية مع الحالات الطارئة وتوفير العناية المناسبة لمن يحتاجون إليها                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 text-center md:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-center rounded-full shadow-lg">
                  <img src={admin2} className="items-center justify-center w-12 h-12 rounded-full"/>
                </div>
                <h6 className="text-xl font-semibold">
ابراهيم ابو الحارث       
         </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                أنا إبراهيم أبو الحارث، من الأردن، وأخصص وقتي لمساعدة الناس في حالات لدغات الأفاعي. بفضل معرفتي العميقة وتجربتي في هذا المجال، أتمكن من تقديم المساعدة الطبية للأشخاص الذين يتعرضون للدغات أفعى. رغم أنني لست طبيباً معترفاً به رسمياً، إلا أنني أستخدم طرقاً وتقنيات تقليدية أثبتت فعاليتها في التعامل مع هذه الحالات الطارئة. أنا ملتزم بتقديم أفضل دعم ممكن للمجتمع المحلي في أوقات الحاجة                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pt-6 text-center md:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-center rounded-full shadow-lg">
                  <img src={admin3} className="items-center justify-center w-12 h-12 rounded-full"/>
                </div>
                <h6 className="text-xl font-semibold">
                      عبد الله بني عيسى            
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                أنا عبد الله بني عيسى، وأعمل جنبًا إلى جنب مع إبراهيم أبو الحارث وأبو بدر في تقديم المساعدة لضحايا لدغات الأفاعي. في هذا الفريق، أشارك في تقديم الإسعافات الأولية والرعاية الطارئة للمرضى الذين تعرضوا لعضات الأفاعي. نحن نعمل معًا لتوفير الدعم والعلاج المناسب، ونبذل قصارى جهدنا لضمان أن يحصل كل مصاب على الرعاية التي يحتاجها بسرعة وكفاءة                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>
        
    );
}
export default AboutUs;