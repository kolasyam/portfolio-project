"use client";
import React from 'react';
import profile from "/images/profile icon.jpg"
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function About(){
  useEffect(()=>{
    AOS.init({duration: 3000})
  },[])
    return(
        // <div className="w-full md:h-screen p-2 flex items-center py-16">
        //     <div className="max-w-[1240px] m-auto grid-cols-3 gap-8">
        //         <div className="col-span-2">
        //             <p>About</p>
        //             <p>Who I Am</p>
        //             <p>// I am not normal developer</p>
        //             <p>
        //             Greetings! My name is Syam Manikanta, and I am a Electrical engineer who graduated from Vasireddy Venkatadry Inistute of Technology. Currently residing in Mangalagiri, Guntur, I began my programming journey while still in university, and in my second year of BTech, I set out to embark on a web development journey.
        //             </p>
        //             <p>
        //             I started by learning the fundamentals of HTML, CSS, and JavaScript, and while it was challenging, I took the time to ensure a strong understanding of these languages. This foundation has allowed me to quickly pick up more advanced frameworks and libraries, such as ReactJS, NextJS, TailwindCSS, and TypeScript.
        //             Along the way, I have developed numerous projects, and my goal is to continue to hone my skills and become an even better developer. I am excited to see where this journey takes me, as there is always so much to explore in the ever-changing world of web development.
        //             </p>
        //         </div>
        //         <div></div>
        //     </div>
        // </div>
        <div id='About' className='w-full md:h-screen p-2 md:flex md:flex-row flex-col items-center py-16' data-aos="fade-down">
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='w-[55%] lg:w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={profile} alt="/" width="720" height="400"></Image>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Greetings! My name is Syam Manikanta, and I am a Electrical engineer who graduated from Vasireddy Venkatadry Inistute of Technology. Currently residing in Mangalagiri, Guntur, I began my programming journey while still in university, and in my second year of BTech, I set out to embark on a web development journey.
          </p>
          <p className='py-2 text-gray-600'>
          I started by learning the fundamentals of HTML, CSS, and JavaScript, and while it was challenging, I took the time to ensure a strong understanding of these languages. This foundation has allowed me to quickly pick up more advanced frameworks and libraries, such as ReactJS, NextJS, TailwindCSS, and TypeScript.
          Along the way, I have developed numerous projects, and my goal is to continue to hone my skills and become an even better developer. I am excited to see where this journey takes me, as there is always so much to explore in the ever-changing world of web development.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        {/* <div className='w-[55%] lg:w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={profile} alt="/" width="720" height="400"></Image>
        </div> */}
      </div>
    </div>
    );
}

// my-3 md:my-[11rem]