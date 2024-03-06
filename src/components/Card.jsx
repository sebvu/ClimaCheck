import React from 'react'

const Card = ({title, value}) => {
    return (
      <div className='flex h-[225px] w-[320px] flex-col gap-2 rounded-lg bg-[#94ADCF] p-4 text-white'>
          <h1 className='text-xl font-thin'> 
              {title} 
          </h1>
          <p className='text-2xl font-semibold'> 
              {value}
          </p>
      </div>
    )
}

export default Card