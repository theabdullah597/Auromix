import { AnimatedSection } from '../utils/animations'
import './Legal.css'

export default function Cookie() {
    return (
        <div>
            <section style={{ background: 'var(--bg-primary)', paddingTop: 160, paddingBottom: 60 }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="label mb-4">LEGAL</div>
                        <h1 className="hero-h1 mb-4">Cookie Policy</h1>
                        <p className="mono-text mb-10" style={{ fontSize: '0.78rem' }}>Last Updated: February 2026</p>
                    </AnimatedSection>
                </div>
            </section>

            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="legal-content">
                            <p>
                                This website uses limited cookies to ensure functionality and security.
                            </p>

                            <h2>Essential Cookies</h2>
                            <p>
                                Required for core site functionality including navigation and security. These cannot be disabled.
                            </p>

                            <h2>Analytics Cookies</h2>
                            <p>
                                We may use anonymised analytics services to understand site usage. No personally identifiable data is shared with third parties.
                            </p>

                            <h2>Advertising Cookies</h2>
                            <p>
                                We do not use advertising or tracking cookies.
                            </p>

                            <h2>How to Disable Cookies</h2>
                            <p>
                                You may disable cookies via your browser settings. Note that doing so may affect site functionality.
                            </p>

                            <h2>Contact</h2>
                            <p>
                                Cookie enquiries: <a href="mailto:enquiries@auromix.co.uk" style={{ color: 'var(--gold)' }}>enquiries@auromix.co.uk</a>
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
