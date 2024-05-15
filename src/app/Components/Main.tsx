"use client";
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMicrosoftoutlook } from 'react-icons/si';
import profile from "/images/profile icon.jpg"
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaCodepen } from "react-icons/fa6";
import Link from 'next/link';

export default function Main(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        // <div className="w-full h-screen text-center lg:text-left flex-col md:flex md:flex-rol">
        //     <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        //         <div>
        //             <p className="uppercase text-sm tracking-widest text-indigo-600	">Hey there,my name is</p>
        //             <h1 className="py-4 text-4xl font-bold md:text-6xl">Syam Manikanta</h1>
        //             <p className=" py-2 text-xl italic md:text-2xl">A passionate MERN stack Developer</p>
        //             <p className=" py-4 font-semibold text-gray-600 sm:text-center lg:w-[40%] text-center">I'm a MERN stack developer and electrical engineer. I specialize in creating websites that are not only visually stunning but also perform smoothly across different browsers and devices.</p>
        //             <p className="font-semibold text-gray-600  sm:text-center lg:w-[40%] text-center">If you scroll down a bit, you can check out some of my recent projects and see what I've been up to</p>
        //             <div className="flex items-center justify-between py-4 lg:w-[40%]">
        //                 <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
        //                     <FaLinkedin size={33}/>
        //                 </div>
        //                 <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
        //                     <FaGithub size={33}/>
        //                 </div>
        //                 <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
        //                     <SiMicrosoftoutlook size={33}/>
        //                 </div>
        //                 <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
        //                     <CgMail size={33}/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section id="Main"className="text-gray-600 body-font" data-aos="zoom-in">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-9">
                    <p className="uppercase text-sm tracking-widest text-indigo-600	">Hey there,my name is</p>
                    <h1 className="py-2 text-4xl font-bold md:text-6xl">Syam Manikanta</h1>
                    <p className=" py-2 text-xl italic md:text-2xl">A passionate <span className="text-red-300">MERN stack Developer</span></p>

                    <p className="mb-5 leading-relaxed">
                    I'm a MERN stack developer and electrical engineer. I specialize in creating websites that are not only visually stunning but also perform smoothly across different browsers and devices.
                    </p>
                    <p className="mb-8 leading-relaxed">
                    If you scroll down a bit, you can check out some of my recent projects and see what I've been up to
                    </p>
                    <div className="flex justify-between  w-[90%] md:w-[70%]">
                        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button> */}
                        <Link href="https://www.linkedin.com/in/syammanikanta-kola-78307b242/" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300" >
                            <FaLinkedin size={33}/>
                         </div>
                        </Link>
                        <Link href="https://github.com/kolasyam" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub size={33}/>
                         </div>
                        </Link>
                        <Link href="https://outlook.office.com/mail/" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <SiMicrosoftoutlook size={33}/>
                         </div>
                        </Link>
                        <Link href="https://codepen.io/Syammanikanta" target="_blank">
                         <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                         <FaCodepen size={33}/>
                         </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-[30%] lg:mr-7 md:w-1/2 w-[50%] hover:scale-105  ease-in duration-300 mt-12">
                    {/* <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                    /> */}
                    <Image src={profile} alt="/" width="720" height="400">

                    </Image>
                </div>
            </div>
        </section>

    );
}
