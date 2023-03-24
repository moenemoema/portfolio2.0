import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph'
import { motion } from "framer-motion";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1, x: 0 },
                        hidden: { opacity: 1, scale: 0 },
                    }}
                    className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="/icon.png" alt="" />
                        <span className="sr-only">Your Company</span>
                    </a>
                </motion.div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        <AnimatedTextCharacterParagraph text={"Home"} />
                    </a>
                    <a href="#app" className="text-sm font-semibold leading-6 text-gray-900">
                        <AnimatedTextCharacterParagraph text={"The App"} />
                    </a>
                    <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                        <AnimatedTextCharacterParagraph text={"Features"} />
                    </a>
                    <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                        <AnimatedTextCharacterParagraph text={"Contact"} />
                    </a>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed bg-[#00000081] inset-0 z-10" />
                <Dialog.Panel className="fixed round inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                    Home
                                </a>
                                <a href="#app" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                    The App
                                </a>
                                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                    Features
                                </a>
                                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}