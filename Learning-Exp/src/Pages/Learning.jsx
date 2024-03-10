import React from 'react'
import smartPhone from "../assets/smartphone1/smartphone1.png"
import dashBoard from "../assets/Dashboard/Dashboard.png"
import layout from "../assets/layout/layout.png"

export const Learning = () => {
    const para ="It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy. Various Versions Have Evolved Over The Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour And The Like)."
  return (
    <>
    <div className=' mt-10'>
        <h1 className='px-[14em] text-center font-bold text-4xl'>We provide various kind of learning modules for you</h1>
        <p className=' mt-6 text-center text-[#707070] px-[30em]'>{para.slice(0,150)}</p>

        
        <div className=' mt-10 grid grid-cols-3 px-[18em] gap-20 py-5'>
            <div id='div1' className='hover:bg-[#FAF8E4] text-center py-2 transition ease-in-out delay-150 hover:scale-110 '>
                <img className='m-auto ' src={smartPhone} alt="" />
                <h2 className='font-bold text-xl'>Learn Anything</h2>
                <p className=' font-semibold text-[#6B6969] text-xs px-[4em]'>{para.slice(0,90)}</p>
            </div>
            <div id='div2' className='hover:bg-[#FAF8E4] text-center py-2 transition ease-in-out delay-150 hover:scale-110 '>
                <img className='m-auto  w-[13em]' src={dashBoard} alt="" />
                <h2 className='font-bold text-xl'>Flexible Learning</h2>
                <p className='font-semibold text-[#6B6969] text-xs px-[1em]'>{para.slice(0,90)}</p>
            </div>
            <div id='div3' className='hover:bg-[#FAF8E4] text-center py-2 transition ease-in-out delay-150 hover:scale-110 '>
                <img className='m-auto' src={layout} alt="" />
                <h2 className='font-bold text-xl'>Expert Connect</h2>
                <p className='font-semibold text-[#6B6969] text-xs px-[1em]'>{para.slice(0,90)}</p>
            </div>
        </div>
    </div>
    </>
    
  )
}
