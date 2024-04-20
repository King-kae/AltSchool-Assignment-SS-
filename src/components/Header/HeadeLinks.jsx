import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"


const HeaderLinks = () => {
    const activeClassName = "font-bold text-blue"

    return (
        <ul
            
            className="hidden md:flex justify-center flexBasis-5/7 -mt-1 ml-8 gap-x-6 md:gap-x-8 md:mr-0 text-xl"
        >
            <motion.li className={`z-10 hover:text-blue transition duration-500 ease-in-out`}>
                <NavLink
                    to="/repos"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    Repos
                </NavLink>
            </motion.li>
            <li className="z-10 hover:text-blue transition duration-500 ease-in-out">
                <NavLink
                    to="/about"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    About
                </NavLink>
            </li>
            <li className="z-10 hover:text-blue transition duration-500 ease-in-out">
                <NavLink
                    to="/errorpage"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    404
                </NavLink>
            </li>
            <li className="z-10 hover:text-blue transition duration-500 ease-in-out">
                <NavLink
                    to="/errorboundary"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    Error Boundary
                </NavLink>
            </li>

        </ul>
    )
}


export default HeaderLinks
