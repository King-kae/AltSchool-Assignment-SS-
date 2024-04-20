import React from 'react';

const HeaderMenuBtn = ({ openMenu, toggleMenu }) => {
    return (
        <button className='z-10 block md:hidden space-y-1'
            aria-label='nav mobile menu'
            onClick={toggleMenu}
        >
            <span
                className={`bg-zinc-700 dark:bg-neutral-50 w-4 h-0.5 block transition-opacity duration-500 ${openMenu ? "opacity-0" : "opacity-1"
                    }`}
            ></span>
            <span
                className={`bg-blue dark:bg-neutral-50 w-6 h-0.5 block transition-transform duration-500 ${openMenu ? "bg-red-700 translate-x-1 translate-y-2 rotate-45" : ""
                    }`}
            ></span>
            <span
                className={`bg-zinc-700 dark:bg-neutral-50 w-8 h-0.5 block transition-transform duration-500 ${openMenu ? "bg-red-700 -rotate-45" : ""
                    }`}
            ></span>
        </button>
    )
}
export default HeaderMenuBtn