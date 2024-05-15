"use client";
import Link from 'next/link';
import React from 'react';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import portfolio from "/images/protfolio.jpg"
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaCodepen } from "react-icons/fa6";
import { useRouter } from 'next/router';

export default function Navbar(){
    const [nav,setNav]=useState(false);
    const [Shadow,setShadow]=useState(false);

    const handleNav=()=>{
        setNav(!nav)
    }
    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        };
        window.addEventListener('scroll',handleShadow)
    },[]);

        // const router = useRouter();
      
        // const isActive = (pathname: string) => {
        //   return router.pathname === pathname;
        // };
    return (
        // <div className="fixed w-full shadow-xl z-100 bg-[#ecf0f3]">
        //     <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        //         <Image src={portfolio}
        //         alt="/" width="250"height="70"/>               
        //         <div>
        //             <ul className="hidden md:flex">
        //                 <Link href="/">
        //                     <li className="ml-10 text-md uppercase hover:border-b hover:border-blue-300">Home</li>
        //                 </Link>
        //                 <Link href="/">
        //                     <li className="ml-10 text-md uppercase hover:border-b hover:border-blue-300">About</li>
        //                 </Link>
        //                 <Link href="/">
        //                     <li className="ml-10 text-md uppercase hover:border-b hover:border-blue-300">Skills</li>
        //                 </Link>
        //                 <Link href="/">
        //                     <li className="ml-10 text-md uppercase hover:border-b hover:border-blue-300">Projects</li>
        //                 </Link>
        //                 <Link href="/">
        //                     <li className="ml-10 text-md uppercase hover:border-b hover:border-blue-300">Contact</li>
        //                 </Link>
        //             </ul>
        //             <div onClick={handleNav}className="md:hidden cursor-pointer ">
        //             <TiThMenu size={30}/></div>
        //         </div>    
        //     </div>
        //     <div className={nav?" md:hidden left-0 top-0 h-screen bg-black/60": " "}>
        //         <div className={nav? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-white p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
        //             <div>
        //                 <div className="flex w-full items-center justify-between">
        //                     <Image src={portfolio}
        //                     alt="/" width="200"height="70"/>
        //                     <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
        //                         <AiOutlineClose onClick={handleNav}size={25}/>
        //                     </div>
        //                 </div>
        //                 <div className="border-b boder-gray-300 my-4">
        //                     <p className="w-[85%] md:w=[90%] py-4">Navigation bar in mobile view</p>
        //                 </div>
        //             </div>
        //             <div className="py-4 flex flex-col">
        //                 <ul className="uppercase">
        //                     <Link href="/">
        //                     <li className="py-4 text-sm">home</li>
        //                     </Link>
        //                     <Link href="/">
        //                     <li className="py-4 text-sm">About</li>
        //                     </Link>
        //                     <Link href="/">
        //                     <li className="py-4 text-sm">Skills</li>
        //                     </Link>
        //                     <Link href="/">
        //                     <li className="py-4 text-sm">Projects</li>
        //                     </Link>
        //                     <Link href="/">
        //                     <li className="py-4 text-sm">Contact</li>
        //                     </Link>
        //                 </ul>
        //                 <div className="pt-36">
        //                     <p className="uppercase tracking-widest text-[#5651e5]">Connect through</p>
        //                     <div className="flex items-center justify-between my-4 w-full sm:w-[90%]">
        //                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        //                             <FaLinkedin size={33}/>
        //                         </div>
        //                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        //                         <FaGithub size={33}/>

        //                         </div>
        //                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        //                         <SiMicrosoftoutlook size={33}/>

        //                         </div>
        //                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        //                             <CgMail size={33}/>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>    
        // </div>
        <div className={Shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300':'fixed w-full h-20 z-[100] ease-in-out duration-300'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/* <Image src={portfolio}
                    alt="/" width="260"height="80"/> */}
                    <div className="text-[2rem] cursor-pointer font-bold text-slate-400">PORTFOLIO</div>
                <div>
                    <ul className='hidden md:flex space-x-10'>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-indigo-500'>
                        <Link href='/'>home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-indigo-500'>
                        <Link href='/#About'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-indigo-500'>
                        <Link href='/#Skills'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-indigo-500'>
                        <Link href='/#Projects'>Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-indigo-500'>
                        <Link href='/#Contact'>Contact</Link>
                        </li>
                        <li className='text-sm uppercase hover:border-b'>
                            <Link href="https://docs.google.com/document/d/1VftFdhampBv_ERfNk_dH0JH1NJgp7xoj2cG2GCp9l6g/edit"   target="_blank">
                            <div className="bg-slate-300 px-5 rounded-md py-3 -mt-3 hover:bg-slate-500 duration-300 font-semibold hover:text-white">RESUME</div>
                            </Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div onClick={handleNav}className="md:hidden cursor-pointer ">
                                <TiThMenu size={30}/></div>
                </div> 
            </div>
     

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav?" md:hidden left-0 top-0 h-screen bg-black/60": " "}>
                <div className={nav? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-white p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            {/* <Image src={portfolio}
                            alt="/" width="200"height="70"/> */}
                            <div className="text-[1.5rem] cursor-pointer font-bold text-slate-400">PORTFOLIO</div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose onClick={handleNav}size={25}/>
                            </div>
                        </div>
                        <div className="border-b boder-gray-300 my-4">
                            <p className="w-[85%] md:w=[90%] py-4">Navigation bar in mobile view</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">home</li>
                            </Link>
                            <Link href="/#About">
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#Skills">
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#Projects">
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#Contact">
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-32">
                            <p className="uppercase tracking-widest text-[#5651e5]">Connect through</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[90%]">
                            <Link href="https://www.linkedin.com/in/syammanikanta-kola-78307b242/" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300" >
                            <FaLinkedin size={33}/>
                         </div>
                        </Link>
                        <Link href="https://github.com/kolasyam" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub size={33}/>
                         </div>
                        </Link>
                        <Link href="https://outlook.office.com/mail/" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <SiMicrosoftoutlook size={33}/>
                         </div>
                        </Link>
                        <Link href="https://codepen.io/Syammanikanta" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                         <FaCodepen size={33}/>
                         </div>
                        </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    </div>

    );
}