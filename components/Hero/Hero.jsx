import React from 'react';
import AnimatedTextCharacter from '../AnimatedText/AnimatedText';
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph';
import { motion } from 'framer-motion';
import RhetoricianModel from '../ModelViewer/ModelViewer';

const Hero = () => {
    return (
        <>
            <div id='hero' className="leading-normal tracking-normal text-gray-900 h-96">
                <div className="h-screen pb-14 bg-right bg-cover" >
                    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start">
                            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                                <AnimatedTextCharacter text={"Hi! I'm Tilek Zhyrgalbekov"} />
                            </h1>
                            <h2 className="my-4 text2xl md:text-5xl font-normal leading-tight text-center md:text-left slide-in-bottom-h1">
                                <AnimatedTextCharacter text={"Frontend Developer"} />
                            </h2>
                            <h4 className='leading-normal text-gray-600 text-lg  mb-8 text-center md:text-left slide-in-bottom-subtitle'>
                                <AnimatedTextCharacterParagraph text={"Frontend Developer, performance-oriented, interested in meeting all web needs, as well as with a good experience with the interface and passion for responsive website design and firmly convinced of the approach focused on mobile devices. Assistance in the development and testing of web applications. Constantly recognized forreliability and multitasking."} />
                            </h4>
                            <h4 className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
                                <AnimatedTextCharacterParagraph text={"Download Resume:"} />
                            </h4>
                            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                                <motion.button
                                    className="bg-purple-600 p-2 z-10 rounded-lg border-none text-white font-bold cursor-pointer"
                                    type="button"
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible: { opacity: 1, scale: 1, x: 0 },
                                        hidden: { opacity: 0, scale: 0 },
                                    }}
                                >
                                    <a href="/resumejpg.pdf">
                                        Download
                                    </a>
                                </motion.button>
                            </div>
                        </div>
                        <div className="w-full xl:w-3/5">
                            <RhetoricianModel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Hero;