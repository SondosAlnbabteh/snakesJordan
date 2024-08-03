import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavPosts() {
    const location = useLocation(); 
    const [activeTab, setActiveTab] = useState(location.pathname); // الحالة لتخزين الخيار النشط
    
    return (
        <div>
            <ul className="flex justify-center gap-8 border-b dark:bg-gray-800">
                <li className="mr-1 -mb-px">
                    <Link
                        className={`inline-block px-4 py-2 font-semibold text-black bg-white hover:text-blue-800 dark:bg-slate-800 dark:text-white ${activeTab === "/Posts" ? "border-t border-l border-r rounded-t dark:bg-slate-900" : ""}`}
                        to="/Posts"
                        onClick={() => setActiveTab("/Posts")} // تحديث الحالة عند النقر
                    >
                        منشورات المستخدمين
                    </Link>
                </li>
                <li className="mr-1 -mb-px">
                    <Link
                        className={`inline-block px-4 py-2 font-semibold text-black bg-white hover:text-blue-800 dark:bg-slate-800 dark:text-white ${activeTab === "/postsAdmin" ? "border-t border-l border-r rounded-t dark:bg-slate-900" : ""}`}
                        to="/postsAdmin"
                        onClick={() => setActiveTab("/postsAdmin")} // تحديث الحالة عند النقر
                    >
                        منشورات المشرفين
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavPosts;
