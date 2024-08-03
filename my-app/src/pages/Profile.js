

function Profile(){
    return(

<div>
  <section className="relative bg-blueGray-50">
    {/*************hero************** */}
    <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">

        {/******************** */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: 'url(\'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80\')'
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
              من قصتنا
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">
                This is a simple example of a Landing Page you can build using                  Notus JS. It features multiple CSS components based on the                  Tailwind CSS design system.
              </p>
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
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                  <i className="fas fa-award" />
                </div>
                <h6 className="text-xl font-semibold">
                  Awarded Agency
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Divide details about your product or agency work into parts.                    A paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 text-center md:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400">
                  <i className="fas fa-retweet" />
                </div>
                <h6 className="text-xl font-semibold">
                  Free Revisions
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Keep you user engaged by providing meaningful information.                    Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pt-6 text-center md:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400">
                  <i className="fas fa-fingerprint" />
                </div>
                <h6 className="text-xl font-semibold">
                  Verified Company
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Write a few lines about each one. A paragraph describing a                    feature will be enough. Keep you user engaged!
                </p>
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
export default Profile;