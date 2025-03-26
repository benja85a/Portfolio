import Image from 'next/image'
import React from 'react'

const CircleImage = () => {
  return (
    <div className="fixed bottom-0 right-0 z-0 hidden lg:block">
        <Image src="/Binary-code.svg" width={200} height={200} alt='Circle' className='w-full h-full'/>
    </div>
  )
}

export default CircleImage