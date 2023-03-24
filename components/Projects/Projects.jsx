import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Projects = () => {
    const projects = [
        {
            id: 1,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        },
        {
            id: 2,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        },
        {
            id: 3,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        },
        {
            id: 4,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        },
        {
            id: 5,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        },
        {
            id: 6,
            tag: 'Fdsfdsfds',
            info: 'fdsfdsfdsfds',
            img: '/picon1.png'
        }
    ]
    return (
        <>
            <div id='projects' className="leading-normal tracking-normal text-gray-900 h-96">
                <div>
                    <h1 className="flex justify-center my-4 text2xl md:text-4xl font-bold leading-tight text-center md:text-left slide-in-bottom-h1 pb-12">Projects</h1>
                    <div className='container m-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            autoplay={{
                                delay: 1500,
                            }}
                            className="mySwiper"
                        >
                            {projects.map((project) => (
                                <SwiperSlide>
                                    <div className="flex justify-between h-56 bg-purple-600 rounded-2xl p-5 items-center">
                                        <div>
                                            <img src={project.img} alt="" />
                                        </div>
                                        <div className="mr-8">
                                            <h1>{project.tag}</h1>
                                            <p>{project.info}</p>
                                            <button>learn more</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;