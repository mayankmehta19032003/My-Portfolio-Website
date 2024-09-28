import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';

import {useMediaQuery} from "react-responsive";


const Hero = () => {


    const isMobile = useMediaQuery({maxWidth:768});

    return (
        <section className='min-h-screen border-2 border-blue-500 w-full flex flex-col relative'>
            <div className='w-full flex flex-col mx-auto sm:mt-36 mt-20 c-space gap-3'>
                <p className='text-white sm:text-3xl text-2xl font-medium text-center font-generalsans'>Hi i am Mayank <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>I am a Software developer</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
               
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDeafault postion={[0,0,20]}/>
                    <HackerRoom 
                    
                    position={[0.1,-1.55,1.20]} 
                    rotation={[0,-Math.PI,0]}
                    scale={isMobile ? 0.0150 :0.0175}
                    /> 

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5}/>
                    
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero;
