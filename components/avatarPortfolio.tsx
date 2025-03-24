import React from 'react'
import MotionTransition from './transitionComponent'
import Image from 'next/image'

const AvatarPortfolio = () => {
  return (
    <MotionTransition position='bottom' className='bottom-0 hidden left-0 md:inline-block md:absolute'>
        <Image src="/avatar-works.png" width={300} height={300} className='w-full h-full' alt='Avatar portfolio'></Image>
    </MotionTransition>
  )
}

export default AvatarPortfolio