import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white sticky  top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center invisible">
                        <a href="/" className="text-2xl font-bold text-primary">
                            Ng Yi Kai
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#about" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                About Me
                            </a>
                            <a href="#projects" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Projects
                            </a>
                            <a href="#skills" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Experience
                            </a>
                            <a href="#contact" className="text-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden fixed bg-white w-full" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu} >
                            About Me
                        </a>
                        <a href="#projects" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Projects
                        </a>
                        <a href="#skills" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Experience
                        </a>
                        <a href="#contact" className="text-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar