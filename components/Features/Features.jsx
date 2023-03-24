import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph'
import { motion } from 'framer-motion'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Features() {
    return (
        <div id='features' className="overflow-hidden bg-white py-24 sm:py-32">
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
                                className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</motion.h2>
                            <h1
                                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                A better workflow
                            </h1>
                            <h4 className="mt-6 text-lg leading-8 text-gray-600">
                                <AnimatedTextCharacterParagraph text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,iste dolor cupiditate blanditiis ratione."} />
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
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
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
