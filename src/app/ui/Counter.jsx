'use client'

import { useEffect, useState } from "react";
import CountUp from "react-countup";


export default function Counter() {

  // const [width, setWidth]   = useState(window.innerWidth);

  // const updateDimensions = () => {
  //     setWidth(window.innerWidth);
  // }
  // useEffect(() => {
  //     window.addEventListener("resize", updateDimensions);
  //     return () => window.removeEventListener("resize", updateDimensions);
  // }, []);
  
const values = [
  {
    start:0,
    end:5,
    suffix:' Years',
  },

  {
    start:0,
    end:1,
    suffix:'K+  Customer',
  },

  {
    start:0,
    end:100,
    suffix:'+  Project',
  },

  {
    start:0,
    end:15,
    suffix:'  Awards',
  },
]

// const mobStyling = {fontSize:'2em', color:'#333', fontWeight:'600'  , font:'Opan Sans, sans-sarif'}
const deskTopStyling = {fontSize:'2em', color:'#fff', fontWeight:'600' , font:'Opan Sans, sans-sarif' }

const styling = deskTopStyling
  const paraStyle = 'text-wrap text-sm opan-sans text-[#b5b5b5]'
  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-3 bg-[#1b1f23] place-items-center rounded-lg rounded-bl-none py-[100px] px-2`}>
      <div className="col-span-1">
        <h1 className="title text-white">Our States</h1>
        <p className="text-sm font-light text-gray-B5">Achieved milestones: strategic partnerships, <br /> global recognition, innovation, growth, and excellence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-span-2">
      <div className="w-full content-center text-center rounded-lg rounded-bl-none">
        <CountUp delay={1} start={values[0].start} suffix={values[0].suffix} end={values[0].end} style={styling} className="!"></CountUp>
        <p className={'text-wrap text-sm opan-sans text-[#b5b5b5]'}>Working With Passion</p>
      </div>

      <div className="content-center text-center">
      <CountUp delay={1} start={values[1].start} suffix={values[1].suffix} pr end={values[1].end} style={styling}></CountUp>
      <p className={paraStyle}>Satisfied Customer</p>
      </div>

      <div className="content-center text-center">
      <CountUp delay={1} start={values[2].start} suffix={values[2].suffix} end={values[2].end} style={styling}></CountUp>
      <p className={paraStyle}>We Have Completed</p>
      </div>

      <div className="w-full content-center text-center rounded-r-lg">
      <CountUp delay={1} start={values[3].start} suffix={values[3].suffix} end={values[3].end} style={styling}></CountUp>
      <p className={paraStyle}>Achivement For Service</p>
      </div>
      </div> 
    </div>
  );
}