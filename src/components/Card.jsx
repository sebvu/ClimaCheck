import React from 'react'

const Card = ({title, value}) => {
    return (
      <div className='flex h-[225px] w-[320px] flex-col gap-2 rounded-lg bg-[#94ADCF] p-4 text-white'>
          <h1 className='text-2xl font-thin'> 
              {title} 
          </h1>
          <div className='flex w-full h-full justify-center items-center mb-16'>
            <p className='text-4xl font-semibold'> 
                {value}
            </p>
          </div>

      </div>
    )
}

export default Card