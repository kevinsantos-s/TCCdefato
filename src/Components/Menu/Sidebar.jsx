import { Link } from "react-router-dom";
import './Sidebar.css';
import Seta from '../../assets/seta.png'
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";

const Sidebar = () => {

   const menus = [
    {name:"Dashboard",link:'/home',icon: LuLayoutDashboard },
    {name:"Usuario",link:'/usuarioslista',icon: CiUser  },
    {name:"Kits",link:'/produto',icon: MdOutlineProductionQuantityLimits  },
    {name:"Mensalidade",link:'/mensalidade',icon: FaRegCreditCard },
   ]
    
   const [open,setOpen] = useState(true);

    return (
           <section className="flex gap-6">
            <div className={`bg-black min-h-screen ${open ? 'w-72':'w-16'} duration-500 text-white px-4`}>
                <div className="py-3 flex justify-end ">
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>
                </div>
                
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus?.map((menu,i)=>(
                            <Link aria-current="page" to={menu?.link} key={i} className="group flex items-center  text-sm gap-3.5 font-medium p-2 hover:bg-orange rounded-md">
                    <div>
                        {React.createElement(  menu?.icon ,{size:'20'})}
                    </div>
                    <h2 style={{transitionDelay:`${i + 3}00ms,`}} className={`  whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                    <h2 className={` ${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                        {menu?.name}
                    </h2>
                    </Link>
                        ))
                    
                    }
                </div>
            </div>
               
           </section>
    )
}

export default Sidebar     