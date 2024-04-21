import { motion } from 'framer-motion'
import { IoMoonOutline, IoSunnySharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const ulVariants = {
    open: {
        visibility: "visible",
        opacity: 1,
        x: 0,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        visibility: "hidden",
        opacity: 0,
        x: 400,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            delay: 1,
        },
    },
};

const liVariants = {
    open: {
        y: 0,
        opacity: 1,

        transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 1 },
    },
    closed: {
        y: 200,
        opacity: 0,

        transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 2 },
    },
};

const HeaderMenu = ({ open, theme, handleTheme }) => {
    const activeClassName = "font-bold"

    return (
        <motion.ul
            variants={ulVariants}
            animate={open ? "open" : "closed"}
            className='bg-neutral-300 dark:bg-zinc-700 dark:text-neutral-50 flex flex-col md:hidden fixed z-10 space-y-3 p-6 text-zinc-700 w-36 right-4 rounded-xl mt-4 font-semibold  overflow-hidden'
        >
            <motion.li variants={liVariants} className={`z-10  hover:text-blue transition duration-500 ease-in-out`}>
                <NavLink to='/about'
                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    About
                </NavLink>
            </motion.li>
            <motion.li variants={liVariants} className='z=10 hover:text-blue transition duration-500 ease-in-out'>
                <NavLink to='/repos'>Repos</NavLink>
            </motion.li>
            <motion.li variants={liVariants} className='z-10 hover:text-blue transition duration-500 ease-in-out'>
                <NavLink to='/errorpage'>404</NavLink>
            </motion.li>
            <motion.li variants={liVariants} className='z-10 hover:text-blue transition duration-500 ease-in-out'>
                <NavLink to='/errorboundary'>Error Boundary</NavLink>
            </motion.li>
            <motion.li variants={liVariants} className='z-10 hover:text-blue transition duration-500 ease-in-out'>
                <button className='invisible' aria-label='toggle theme' onClick={handleTheme}>
                    {theme === 'light' ? <IoMoonOutline className='w-5 h-5' /> : <IoSunnySharp className='w-5 h-5' />}
                </button>
            </motion.li>
        </motion.ul>
    )
}

export default HeaderMenu