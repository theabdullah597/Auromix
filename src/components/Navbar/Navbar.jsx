import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
    { to: '/', label: 'Home', exact: true },
    { to: '/aurix', label: 'AURIX™' },
    { to: '/aetheon', label: 'Project AETHEON™' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => setOpen(false), [location])

    return (
        <header className={`navbar__wrapper ${scrolled ? 'navbar__wrapper--scrolled' : ''}`}>
            {/* Mobile backdrop */}
            <div
                className={`navbar__backdrop ${open ? 'navbar__backdrop--open' : ''}`}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            />
            <div className={`navbar ${scrolled ? 'navbar--floating' : ''} ${open ? 'navbar--open' : ''}`}>
                <div className="navbar__inner">
                    <Link to="/" className="navbar__brand" aria-label="Auromix Home">
                        <img
                            src="/logo.png"
                            alt=""
                            className="navbar__logo-img"
                        />
                        <span className="navbar__brand-name">Auromix</span>
                    </Link>

                    <button
                        className="navbar__toggle"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation"
                        aria-expanded={open}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="navbar__nav navbar__nav--desktop" aria-label="Desktop navigation">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.exact}
                                className={({ isActive }) =>
                                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link to="/aurix-technical-brief" className="btn btn--gold navbar__cta">
                            Technical Brief
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`navbar__nav navbar__nav--mobile ${open ? 'navbar__nav--open' : ''}`} aria-label="Mobile navigation">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.exact}
                        className={({ isActive }) =>
                            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
                <Link to="/aurix-technical-brief" className="btn btn--gold navbar__cta">
                    Technical Brief
                </Link>
            </nav>

        </header>
    )
}
