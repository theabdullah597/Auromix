import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
    platform: [
        { label: 'AURIX™ Overview', to: '/aurix' },
        { label: 'Platform Architecture', to: '/aurix' },
        { label: 'Research Initiative', to: '/aetheon' },
        { label: 'Security & Governance', to: '/aurix' },
    ],
    enterprise: [
        { label: 'Industry Applications', to: '/solutions' },
        { label: 'Strategic Consultation', to: '/contact' },
        { label: 'Technical Briefing', to: '/aurix-technical-brief' },
        { label: 'Deployment Model', to: '/aurix' },
    ],
    company: [
        { label: 'About Auromix', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Use', to: '/terms' },
        { label: 'Cookie Policy', to: '/cookie' },
    ],
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container grid-pattern">
                <div className="footer__top">
                    <div className="footer__brand-col">
                        <Link to="/" className="footer__brand" aria-label="Auromix Home">
                            <img
                                src="/logo.png"
                                alt=""
                                className="footer__logo-img"
                            />
                            <span className="footer__brand-name" style={{ fontSize: '1.25rem', marginTop: '2px' }}>AUROMIX</span>
                        </Link>
                        <p className="footer__brand-desc">
                            Auromix develops predictive enterprise SaaS platforms engineered to transition organisations from reactive infrastructure management toward autonomous operational governance.
                        </p>
                        <p className="footer__brand-meta">
                            United Kingdom &nbsp;·&nbsp; Enterprise Software Development &amp; Licensing
                        </p>
                    </div>

                    <div className="footer__links-col">
                        <h4 className="footer__links-heading">PLATFORM</h4>
                        <ul>
                            {footerLinks.platform.map(l => (
                                <li key={l.label}><Link to={l.to} className="footer__link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-col">
                        <h4 className="footer__links-heading">ENTERPRISE</h4>
                        <ul>
                            {footerLinks.enterprise.map(l => (
                                <li key={l.label}><Link to={l.to} className="footer__link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-col">
                        <h4 className="footer__links-heading">COMPANY</h4>
                        <ul>
                            {footerLinks.company.map(l => (
                                <li key={l.label}><Link to={l.to} className="footer__link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copy">© 2026 Auromix Ltd. All rights reserved.</p>
                    <p className="footer__sub">
                        Project AETHEON™ &nbsp;·&nbsp; AURIX™ Platform &nbsp;·&nbsp; Confidential Infrastructure Technology
                    </p>
                </div>
            </div>
        </footer>
    )
}
