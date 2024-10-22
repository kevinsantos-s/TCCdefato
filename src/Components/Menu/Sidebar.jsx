import { Link } from "react-router-dom";
import './Sidebar.css';
import Seta from '../../assets/seta.png'
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import Logo from "../../assets/KitFit.png"
import { CiUser } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
 
const Sidebar = () => {
 
   const menus = [
    {name:"Home",link:'/home',icon: FaHouse },
    {name:"Usuario",link:'/usuarioslista',icon: CiUser  },
    {name:"Kits",link:'/kit',icon: MdOutlineProductionQuantityLimits  },
   
   ]
   
   const [open,setOpen] = useState(true);
 
    return (
        
           <section className="flex">
            <div className='bg-black  mr-5 hover:shadow-orange hover:shadow-xll  h-screen w-72 duration-500 text-white px-4'>
             
               
                <div className="mt-4 flex flex-col gap-4 relative">
                <img src={Logo} />
                    {
                        menus?.map((menu,i)=>(
                            <Link aria-current="page" to={menu?.link} key={i} className="group flex items-center  text-sm gap-3.5 font-medium p-2 hover:bg-orange rounded-md">
                    <div>
                        {React.createElement(  menu?.icon ,{size:'20'})}
                    </div>
                    <h2 style={{transitionDelay:`${i + 3}00ms,`}} className="text-left text-base">{menu?.name}</h2>
                   
                    </Link>
                        ))
                   
                    }
                </div>
            </div>
               
           </section>
    )
}
 
export default Sidebar    