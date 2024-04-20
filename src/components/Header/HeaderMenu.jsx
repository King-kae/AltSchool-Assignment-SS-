import { motion } from 'framer-motion'
import { IoMoonOutline, IoSunnySharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const HeaderMenu = ({ open, theme, handleTheme }) => {
    const activeClassName = "font-bold"

    return (
        <motion.ul
            animate={open ? "open" : "closed"}
            className='bg-neutral-300 dark:bg-zinc-700 dark:text-neutral-50 flex flex-col md:hidden fixed z-10 space-y-3 p-6 text-zinc-700 w-36 right-4 rounded-xl mt-4 font-semibold  overflow-hidden'
        >
            <motion.li className={`z-10`}>
                <NavLink to='/about'
                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    About
                </NavLink>
            </motion.li>
            <motion.li className='z=10'>
                <NavLink to='/repos'>Repos</NavLink>
            </motion.li>
            <motion.li className='z-10'>
                <NavLink to='/home'>Home</NavLink>
            </motion.li>
            <motion.li>
                <NavLink to='/errorpage'>404</NavLink>
            </motion.li>
            <motion.li>
                <NavLink to='/errorboundary'>Error Boundary</NavLink>
            </motion.li>
            <motion.li>
                <button aria-label='toggle theme' onClick={handleTheme}>
                    {theme === 'light' ? <IoMoonOutline className='w-5 h-5' /> : <IoSunnySharp className='w-5 h-5' />}
                </button>
            </motion.li>
        </motion.ul>
    )
}

export default HeaderMenu