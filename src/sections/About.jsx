import React, { useState } from 'react'
import Globe from "react-globe.gl";
import Button from '../components/Button';

const About = () => {

    const [copied,setCopied] = useState(false);

    function handleCopy(){
      navigator.clipboard.writeText("mayankmehta880@gmail.com");
      setCopied(true);

      setTimeout(()=>{
        setCopied(false);
      },2000)
    }

    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I am Mayank</p>
                            <p className="grid-subtext ">I have honed my skills in frontend and backend development, with a focus on 3D animated websites.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full self-center sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext ">I specialize in React and with a focus on Next.js ecosystem.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.
                            </p>
                            <p className='grid-subtext'>I bassed in India, with remote work availabe.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div> 
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3 '>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2 '>
                            <p className='grid-subtext text-center'>Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={copied ? "/assets/tick.svg":"/assets/copy.svg" } alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">mayankmehta880@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
