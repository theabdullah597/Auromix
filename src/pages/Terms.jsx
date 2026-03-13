import { AnimatedSection } from '../utils/animations'
import './Legal.css'

export default function Terms() {
    return (
        <div>
            <section style={{ background: 'var(--bg-primary)', paddingTop: 160, paddingBottom: 60 }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="label mb-4">LEGAL</div>
                        <h1 className="hero-h1 mb-4">Terms of Use</h1>
                        <p className="mono-text mb-10" style={{ fontSize: '0.78rem' }}>Last Updated: February 2026</p>
                    </AnimatedSection>
                </div>
            </section>

            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="legal-content">
                            <h2>1. Website Use</h2>
                            <p>
                                This website is provided for informational purposes regarding Auromix enterprise software products and research initiatives. No guarantee of uninterrupted access.
                            </p>

                            <h2>2. Intellectual Property</h2>
                            <p>
                                All content, platform names (AURIX™, Project AETHEON™), documentation and materials are the intellectual property of Auromix Ltd. No reproduction without prior written permission.
                            </p>

                            <h2>3. No Professional Advice</h2>
                            <p>
                                Information on this website does not constitute technical, financial or legal advice.
                            </p>

                            <h2>4. Limitation of Liability</h2>
                            <p>Auromix shall not be liable for:</p>
                            <ul>
                                <li>Indirect or consequential loss</li>
                                <li>Reliance on website materials</li>
                                <li>Unauthorised system access beyond our control</li>
                            </ul>

                            <h2>5. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of England &amp; Wales.
                            </p>

                            <h2>6. Contact</h2>
                            <p>
                                For legal enquiries: <a href="mailto:enquiries@auromix.co.uk" style={{ color: 'var(--gold)' }}>enquiries@auromix.co.uk</a>
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
