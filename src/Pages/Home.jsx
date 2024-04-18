import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


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
                <div>
                    <motion.div
                        className="text-5xl font-bold text-center"
                        variants={letterContainer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {text1.split("").map((letter, index) => (
                            <motion.span key={index} variants={letterContainer}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-5xl font-bold text-center"
                        variants={letterContainer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {text2.split("").map((letter, index) => (
                            <motion.span key={index} variants={letterContainer}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-5xl font-bold text-center"
                        variants={letterContainer}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {text3.split("").map((letter, index) => (
                            <motion.span key={index} variants={letterContainer}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home