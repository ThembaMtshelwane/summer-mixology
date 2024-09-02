import React from 'react'

const ProductSection = () => {
  return (
    <div className='w-full h-screen pt-[100px] px-10  text-[#002B49]'>
        <div className='font-bold text-6xl flex justify-between'>
            <h2>OUR COCKTAILS</h2>

            <button className='bg-transparent w-[200px] h-[45px] border border-[#002B49] text-base hover:bg-[#002B49] hover:text-white font-medium'>
                ALL COCKTAILS
            </button>

        </div>


        <div className='w-full flex flex-wrap justify-between pt-[100px]'>
            <div className='w-auto h-auto'>
                <img src='hero/2.jpg' alt='' className='max-w-[450px] max-h-[600px]' />
                <div className='pt-6'>
                    <h2 className='font-extralight text-2xl'>Category</h2>
                    <h1 className='font-medium text-5xl'>Name </h1>
                </div>

            </div>

            <div className='w-auto h-auto'>
                <img src='hero/2.jpg' alt='' className='max-w-[450px] max-h-[600px]' />
                <div className='pt-6'>
                    <h2 className='font-extralight text-2xl'>Category</h2>
                    <h1 className='font-medium text-5xl'>Name </h1>
                </div>
            </div>

            <div className='w-auto h-auto'>
                <img src='hero/2.jpg' alt='' className='max-w-[450px] max-h-[600px]' />
                <div className='pt-6'>
                    <h2 className='font-extralight text-2xl'>Category</h2>
                    <h1 className='font-medium text-5xl'>Name </h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductSection
