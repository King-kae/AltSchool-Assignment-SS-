import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"


const HeaderLinks = () => {
    const activeClassName = "font-bold text-blue-700"

    return (
        <ul
            
            className="hidden md:flex justify-center flexBasis-5/7 -mt-1 ml-8 gap-x-6 md:gap-x-8 md:mr-0 text-xl"
        >
            <motion.li className={`z-10`}>
                <NavLink
                    to="/repos"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    Repos
                </NavLink>
            </motion.li>
            <li className="z-10">
                <NavLink
                    to="/about"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    About
                </NavLink>
            </li>
            <li className="z-10">
                <NavLink
                    to="/errorpage"

                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    404
                </NavLink>
            </li>
            <li className="z-10">
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
