import { Link } from "react-router-dom";
import image from "../assets/images/cardesImage.jpg";



function Cards() {

  return (
    <div className="grid grid-cols-1 gap-5 p-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center">
      
        {/******************cards*************** */}
   
        <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
         
         <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
       
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
             to="/ProductDetail"
          >
            Read more
          </Link>
        </div>
      </div>

          
          <div
        
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
          >
            <div className="h-[100px]">
              <img
                src={image}
                alt=""
                className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
              />
            </div>
            <div className="p-3 text-center">
              <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
              <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                مصيدة الافاعي عالية الجودة
              </p>
              <p className="mb-3 text-black dark:text-white group-hover:text-white">
                <span>20 JD </span>
              </p>
              <Link
                className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
                to={``}
              >
                Read more
              </Link>
            </div>
          </div>

          
          <div
        
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
          >
            <div className="h-[100px]">
              <img
                src={image}
                alt=""
                className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
              />
            </div>
            <div className="p-3 text-center">
              <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
              <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                مصيدة الافاعي عالية الجودة
              </p>
              <p className="mb-3 text-black dark:text-white group-hover:text-white">
                <span>20 JD </span>
              </p>
              <Link
                className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
                to={``}
              >
                Read more
              </Link>
            </div>
          </div>

          
          <div
        
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
          >
            <div className="h-[100px]">
              <img
                src={image}
                alt=""
                className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
              />
            </div>
            <div className="p-3 text-center">
              <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
              <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                مصيدة الافاعي عالية الجودة
              </p>
              <p className="mb-3 text-black dark:text-white group-hover:text-white">
                <span>20 JD </span>
              </p>
              <Link
                className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
                to={``}
              >
                Read more
              </Link>
            </div>
          </div>

          
          <div
        
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
          >
            <div className="h-[100px]">
              <img
                src={image}
                alt=""
                className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
              />
            </div>
            <div className="p-3 text-center">
              <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
              <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                مصيدة الافاعي عالية الجودة
              </p>
              <p className="mb-3 text-black dark:text-white group-hover:text-white">
                <span>20 JD </span>
              </p>
              <Link
                className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
                to={``}
              >
                Read more
              </Link>
            </div>
          </div>

          <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to="/ProductDetail"
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        
        className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[247px] mt-32"
      >
        <div className="h-[100px]">
          <img
            src={image}
            alt=""
            className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-40 "
          />
        </div>
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold dark:text-white">مصيده الافاعي</h1>
          <p className="mb-2 text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
            مصيدة الافاعي عالية الجودة
          </p>
          <p className="mb-3 text-black dark:text-white group-hover:text-white">
            <span>20 JD </span>
          </p>
          <Link
            className="px-4 py-1 text-white duration-300 bg-cyan-500 hover:scale-105 group-hover:bg-white group-hover:text-cyan-500"
            to={``}
          >
            Read more
          </Link>
        </div>
      </div>
        {/******************end cards*************** */}
      </div>
   
  );
}

export default Cards;