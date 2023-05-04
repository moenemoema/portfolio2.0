import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLast from '../AnimatedText/AnimatedLast';

const Footer = () => {
    return (
        <>
            <div className=" bg-gray-900 rounded-tl-2xl rounded-tr-2xl mt-28">
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3">
                            <AnimatedLast text={"Kera "} />
                        </h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            className="flex justify-center my-10">
                            <motion.h4
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0 },
                                    hidden: { opacity: 0, scale: 0 },
                                }}
                            >
                                <img src="" alt="fdf" />
                                <img src="" alt="fdfd" />
                            </motion.h4>
                        </motion.div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-center items-center text-sm text-gray-400">
                        <div className="order-1 md:order-2">
                            <a href="#" className='px-2'>Home</a>
                            <a href="#info" className='px-2 border-l'>Info</a>
                            <a href="#features" className='px-2 border-l'>Features</a>
                            <a href="#projects" className='px-2 border-l'>Projects</a>
                            <a href="#contact" className='px-2 border-l'>Contacts</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;