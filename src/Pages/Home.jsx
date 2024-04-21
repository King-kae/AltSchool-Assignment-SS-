import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import pic from "../assets/react.svg"

const letterContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: 100,
    },
};

const Home = () => {
    const text1 = "Hello";
    const text2 = "Welcome to my GitHub";
    const text3 = "Repositories";

    return (
        <div>
            <div>
                <div className='dark:bg-[#2C2C2C] bg-neutral-50 flex lg:justify-center items-center  h-screen pl-4 fixed left-0 top-0 w-full md:w-[65%] md:p-0 transition-colors duration-300'>
                    <motion.div
                        className="pl-4 md:pl-8  mt-24 md:mt-0"
                        variants={letterContainer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <motion.h1
                            className="font-playfair dark:text-neutral-50 text-zinc-700  max-w-[22.125rem] text-2xl leading-[2rem] md:max-w-xl md:text-5xl md:leading-[3.75rem] overflow-hidden transition-colors duration-300"
                            variants={letterContainer}
                            initial='hidden'
                            animate='show'
                        >
                            {text1.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterContainer}>
                                    {letter}
                                </motion.span>
                            ))}
                            ! <br />
                            {text2.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterContainer}>
                                    {letter}
                                </motion.span>
                            ))}
                            , <br />
                            {text3.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterContainer}>
                                    {letter}
                                </motion.span>
                            ))}

                        </motion.h1>
                        <motion.div
                            className="text-5xl font-bold text-center w-[13rem]"
                            variants={letterContainer}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                        >
                            <Link 
                                to='/repos' 
                                className='hover:bg-blue hover:shadow-blue-500/50  text-center font-playfair text-xl rounded-full block  px-3 py-2 mt-8 w-full transition-colors duration-500 :bg-zinc-700 dark:text-neutral-50  text-neutral-50 bg-zinc-700'
                            >
                                Go to Repos
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
                <div>
                    <div className='bg-black w-[45%] fixed right-5 h-[12.5rem] top-[15%] md:w-[35%] md:top-[10.5%] md:right-0 md:h-screen '>
                        <motion.img
                            src={pic}
                            alt="github octocat"
                            className='logo md:w-[26.25rem] left-[10%] p-8 aspect-square w-44 absolute top-[10%]  md:top-[17%] lg:right-[20%] object-contain'
                            layoutId='entranceImg'
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home