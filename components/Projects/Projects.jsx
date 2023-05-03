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
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon1.png'
        },
        {
            id: 2,
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon2.png'
        },
        {
            id: 3,
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon3.png'
        },
        {
            id: 4,
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon4.png'
        },
        {
            id: 5,
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon1.png'
        },
        {
            id: 6,
            tag: 'Project Name',
            info: 'Lorem ipsum, huy blyat',
            img: '/picon2.png'
        }
    ]
    return (
        <>
            <div id='projects' className="leading-normal tracking-normal text-gray-900 pt-36">
                <div>
                    <h1 className="flex justify-center my-4 text2xl md:text-4xl font-bold leading-tight text-center md:text-left slide-in-bottom-h1 pb-12">Projects</h1>
                    <div className='container m-auto max-[425px]:w-full w-9/12 pb-48'>
                        <Swiper
                            slidesPerView={"auto"}
                            loop={true}
                            breakpoints={{
                                slidesPerView: 2
                            }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                            }}
                            className="mySwiper"
                        >
                            {projects.map((project) => (
                                <SwiperSlide
                                    style={{
                                        width: "320px",
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                    }}
                                    breakpoints={{
                                        337: {
                                            width: '300px'
                                        }
                                    }}
                                >
                                    <div className="flex flex-col hover:scale-110 transition-transform justify-center gap-16 h-96 bg-white border-2 rounded-2xl p-5 items-center shadow-xl">
                                        <div>
                                            <img className="w-28 h-28" src={project.img} alt="projects" />
                                        </div>
                                        <div className="mr-8">
                                            <h1 className="font-bold text-xl">{project.tag}</h1>
                                            <p className="pb-3 text-gray-600">{project.info}</p>
                                            <button className="bg-purple-600 p-1 px-2 rounded-lg text-white text-sm font-bold uppercase">learn more</button>
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