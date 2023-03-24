﻿import React from 'react';
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
                                <AnimatedTextCharacter text={"Main Hero Message to sell your app"} />
                            </h1>
                            <h4 className='leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle'>
                                <AnimatedTextCharacterParagraph text={"Sub-hero message, not too long and not too short. Make it just right!"} />
                            </h4>
                            <h4 className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
                                <AnimatedTextCharacterParagraph text={"Download our app:"} />
                            </h4>
                            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                                <motion.img
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible: { opacity: 1, scale: 1, x: 0 },
                                        hidden: { opacity: 0, scale: 0 },
                                    }}
                                    src="App Store.svg" className="h-12 pr-4 bounce-top-icons cursor-pointer" />
                                <motion.img
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        visible: { opacity: 1, scale: 1, x: 0 },
                                        hidden: { opacity: 0, scale: 0 },
                                    }}
                                    src="Play Store.svg" className="h-12 bounce-top-icons cursor-pointer" />
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