import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Ring } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from "react-responsive";
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';



const Hero = () => {


    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className='min-h-screen border-2 border-blue-500 w-full flex flex-col relative'>
            <div className='w-full flex flex-col mx-auto sm:mt-36 mt-20 c-space gap-3'>
                <p className='text-white sm:text-3xl text-2xl font-medium text-center font-generalsans'>Hi i am Mayank <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>I am a Software developer</p>
            </div>
            <div className='w-full h-full absolute inset-0'>

                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDeafault postion={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom

                                position={[0.1, -1.55, 1.20]}
                                rotation={[0, -Math.PI, 0]}
                                scale={isMobile ? 0.0140 : 0.0175}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={isMobile ? [1, -2.5, 1] : [3.5, -2, 1.20]} scale={isMobile ? 0.2 : 0.2} />
                            <ReactLogo position={isMobile ? [1, 1, 1] : [3.5, 1.5, 1.20]} />
                            <Cube position={isMobile ? [-1.25, -2.5, 1] : [-3.5, -1.5, 1.20]} />
                            <Rings position={isMobile ? [-7, 6, 1] : [-22.5, 10.5, 2.20]} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>
                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#about' className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"  />
                </a>
            </div>
        </section>
    )
}

export default Hero;
