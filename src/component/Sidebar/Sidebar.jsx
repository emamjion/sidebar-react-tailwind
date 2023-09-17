import React from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { FiFolder } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const menus = [
        {
            name: 'dashboard',
            link: '/',
            icon: MdOutlineDashboard
        },
        {
            name: 'user',
            link: '/',
            icon: AiOutlineUser
        },
        {
            name: 'message',
            link: '/',
            icon: FiMessageSquare
        },
        {
            name: 'analytics',
            link: '/',
            icon: TbReportAnalytics
        },
        {
            name: 'File Manager',
            link: '/',
            icon: FiFolder
        },
        {
            name: 'Cart',
            link: '/',
            icon: FiShoppingCart
        },
        {
            name: 'Saved',
            link: '/',
            icon: AiOutlineHeart
        },
        {
            name: 'Setting',
            link: '/',
            icon: RiSettings4Line
        }
    ]
    console.log(menus)
    
    return (
        <section className='flex gap-6'>
            <div className='bg-[#2c3e50] min-h-screen w-72 text-gray-100 px-4'>
                <div className='py-3 flex justify-end'>
                    < HiMenuAlt3 size={26} className='cursor-pointer' />
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {
                        menus.map((menu, i) => <Link
                            key={i}
                            className='flex items-center gap-4'
                        >
                            <div>
                                {React.createElement(menu?.icon, {size: '20'})}
                            </div>
                            <h2>{menu?.name}</h2>
                        </Link>)
                    }
                    
                </div>
            </div>
            
            <div className='m-3 text-xl text-gray-900 font-semibold'>
                React Sidebar
            </div>
        </section>
    );
};

export default Sidebar;