import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMoonOutline, IoSunnySharp } from "react-icons/io5";
import HeaderLinks from "./HeadeLinks";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuBtn from "./HeaderMenuBtn";
import { FaHome } from "react-icons/fa";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((p) => !p);
  };
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <header className={`bg-neutral-50 dark:bg-zinc-700 dark:text-neutral-50 text-zinc-700`}>
        <nav className="p-4 md:px-8 flex justify-between items-center ">
          <p className='z-10'>
            <NavLink 
                to="/"
                className='text-2xl md:text-4xl font-josefin dark:text-neutral-50'
                end
            >
                <FaHome className="text-blue" />
            </NavLink>
          </p>
          <HeaderLinks />
          <div className='hidden z-10 px-3 pb-3 relative md:flex justify-center'>
            <button className="invisible" aria-label="toggle theme" onClick={handleTheme}>
              {theme === "light" ? <IoMoonOutline /> : <IoSunnySharp />}
            </button>
          </div>
          <HeaderMenuBtn openMenu={openMenu} toggleMenu={handleMenu} />
        </nav>
         <HeaderMenu open={openMenu} theme={theme} handleTheme={handleTheme} /> 
      </header>
      <Outlet />
    </>
  );
};

export default Header;