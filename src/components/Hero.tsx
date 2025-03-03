"use client"
import {motion} from 'framer-motion';
import {FaArrowRightLong} from "react-icons/fa6";

const Hero = () => {

    const animation = {
        initial: {opacity: 0, scale: 0},
        animate: {opacity: 1, scale: 1}
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[calc(100dvh-60px)] text-white">
                <motion.h1 variants={animation} initial='initial' whileInView='animate'
                           transition={{duration: 0.4}}
                           className="text-5xl font-bold text-white  uppercase tracking-wide">This is a place you
                    can <br/> talk
                    with your friends.
                </motion.h1>
                <motion.p variants={animation} initial='initial' whileInView='animate'
                          transition={{duration: 0.5, delay: 0.2}}
                          className="text-lg mt-3">Add your friends to conversation and make some &quot;fun&quot;.
                </motion.p>

                <motion.button
                    variants={animation}
                    initial="initial"
                    whileInView="animate"
                    transition={{duration: 0.5, delay: 0.4}}
                    whileHover={{scale: 1.05}} // افکت کوچک روی دکمه هنگام هاور
                    className="mt-5 py-1.5 px-6 bg-white rounded-md text-black font-medium flex items-center gap-2 cursor-pointer"
                >
                    Get start
                    <motion.span
                        initial={{x: 0}}
                        animate={{x: 0}}
                        whileHover={{x: 10}} // هنگام هاور، فلش حرکت کند
                        transition={{type: "spring", stiffness: 200}}
                    >
                        <FaArrowRightLong size={14} className="mt-1"/>
                    </motion.span>
                </motion.button>


            </div>

            <div className="h-screen flex flex-col items-center justify-center  text-white">
                <motion.h2 variants={animation} initial='initial' whileInView='animate'
                           className="text-3xl md:text-4xl font-bold text-center tracking-wide  uppercase">
                    Fast and secure worldwide. <br/> Send messages anytime,<br/> anywhere—no limits, no conditions.
                </motion.h2>
                <motion.p className="mt-4 text-lg" variants={animation} initial='initial' whileInView='animate'
                          transition={{duration: 0.4, delay: 0.2}}>Create an account for access to all features.
                </motion.p>

                <motion.button
                    variants={animation}
                    initial="initial"
                    whileInView="animate"
                    transition={{duration: 0.5, delay: 0.4}}
                    whileHover={{scale: 1.05}} // افکت کوچک روی دکمه هنگام هاور
                    className="mt-5 py-1.5 px-6 bg-white rounded-md text-black font-medium flex items-center gap-2 cursor-pointer"
                >
                    Get start
                    <motion.span
                        initial={{x: 0}}
                        animate={{x: 0}}
                        whileHover={{x: 10}} // هنگام هاور، فلش حرکت کند
                        transition={{type: "spring", stiffness: 200}}
                    >
                        <FaArrowRightLong size={14} className="mt-1"/>
                    </motion.span>
                </motion.button>
            </div>
        </>
    );
};

export default Hero;