import React from "react";

import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

import Logo from "../../assets/images/logo.png";
import DarkMode from "./DarkMode";

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "Pricing",
        link: "#",
    },
    {
        id: 4,
        name: "Contact",
        link: "#",
    },
];
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className="relative z-[9999] text-black dark:text-white duration-300">
            <div className="container py-2 md:py-0">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="" className="h-16" />
                        <p className="text-3xl">
                            VR <span className="font-bold">World</span>
                        </p>
                    </div>
                    {/* Desktop Menu section */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {NavLinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id} className="py-4">
                                        <a
                                            href={link}
                                            className="text-xl font-semibold hover:text-primary py-2 
                                            hover:border-b-2 hover:border-secondary transition-colors 
                                            duration-500"
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}

                            {/* Darkmode feature */}
                            <DarkMode />
                        </ul>
                    </nav>

                    {/* Mobile View Sidebar */}
                    <div className="md:hidden block relative">
                        <div className="flex items-center gap-4">
                            {/* Darkmode feature */}
                            <DarkMode />

                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className="cursor-pointer "
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer "
                                    size={30}
                                />
                            )}
                        </div>

                        {showMenu && (
                            <nav className="block md:hidden absolute top-[4rem] right-[1rem] min-w-[200px]">
                                <ul className="flex flex-col items-center gap-4 bg-gradient-to-r 
                                    from-primary to-secondary p-4">
                                    {NavLinks.map(({ id, name, link }) => {
                                        return (
                                            <li key={id} className="p-4">
                                                <a
                                                    href={link}
                                                    className="text-xl font-semibold hover:text-primary py-2 
                                            hover:border-b-2 hover:border-secondary transition-colors 
                                            duration-500"
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
