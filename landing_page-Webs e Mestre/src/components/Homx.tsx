import React, { useState } from 'react';

export default function Homx() {
    return (
        <div className='bg-yellow-200 w-full mx-auto  relative'>


            {/* <div className=" bg-slate-600 rounded-2xl bg-center bg-cover lg:bg-contain bg-no-repeat duration-500 relative">
                <div className=' absolute inset-0 z-10 flex-col  justify-end items-center py-10 pointer-events-none'>
                    <div className='backdrop-contrast-200 bg-black/30 backdrop-blur rounded-xl px-1 py-0.5 text-center'>
                        <h1 className='text-3xl text-white'>Home titulo</h1>
                        <p className='text-white/80 text-xl'>Home Descrição</p>
                    </div>

                </div>
            </div> */}
            <img className='w-full' src="/home.png" alt="" />
        </div>
    );
}