﻿import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph'
import { motion } from 'framer-motion'

const features = [
    {
        name: 'Frontend Developer Skills',
        description:
            'HTML, CSS, SASS, css/scss modules, JavaScript, TypeScript',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Frameworks/libraries',
        description: ' Next, React, Redux, redux/toolkit, Bootstrap, Material UI, Ant Design, Framer Motion, Tailwind',
        icon: LockClosedIcon,
    },
    {
        name: 'Version control',
        description: 'Git',
        icon: ServerIcon,
    },
]

export default function Features() {
    return (
        <div id='about' className="overflow-hidden bg-white py-24 sm:py-32 mt-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.7 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0 },
                                    hidden: { opacity: 0, scale: 0 },
                                }}
                                className="text-base font-semibold leading-7 text-indigo-600">About me</motion.h2>
                            <h1
                                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Skills
                            </h1>
                            <h4 className="mt-6 text-lg leading-8 text-gray-600">
                                <AnimatedTextCharacterParagraph text={"Frontend Developer, performance-oriented, interested in meeting all web needs, as well as with a good experience with the interface and passion for responsive website design and firmly convinced of the approach focused on mobile devices. Assistance in the development and testing of web applications. Constantly recognized for reliability and multitasking."} />
                            </h4>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <motion.dt
                                            initial="hidden"
                                            whileInView="visible"
                                            transition={{ duration: 0.5 }}
                                            variants={{
                                                visible: { opacity: 1, scale: 1, x: 0 },
                                                hidden: { opacity: 0, scale: 1 },
                                            }}
                                            className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            <AnimatedTextCharacterParagraph text={feature.name} />
                                        </motion.dt>{' '}
                                        <dd className="inline">
                                            <AnimatedTextCharacterParagraph text={feature.description} />
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        src="/banner.jpg"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
