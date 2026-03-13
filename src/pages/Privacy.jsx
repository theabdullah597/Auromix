import { AnimatedSection } from '../utils/animations'
import './Legal.css'

export default function Privacy() {
    return (
        <div>
            <section style={{ background: 'var(--bg-primary)', paddingTop: 160, paddingBottom: 60 }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="label mb-4">LEGAL</div>
                        <h1 className="hero-h1 mb-4">Privacy Policy</h1>
                        <p className="mono-text mb-10" style={{ fontSize: '0.78rem' }}>Last Updated: February 2026</p>
                    </AnimatedSection>
                </div>
            </section>

            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="legal-content">
                            <p>
                                Auromix Ltd ("Auromix", "we", "our") is committed to protecting the privacy and security of personal information. This policy outlines how we collect, process and safeguard data in connection with our website and enterprise engagement services.
                            </p>

                            <h2>Information We Collect</h2>
                            <ul>
                                <li>Contact information (name, organisation, email, role)</li>
                                <li>Engagement details submitted through enquiry forms</li>
                                <li>Technical metadata (IP address, browser type, usage analytics)</li>
                                <li>Communication records</li>
                            </ul>

                            <h2>How We Use Information</h2>
                            <p>We use collected data to:</p>
                            <ul>
                                <li>Respond to enterprise enquiries</li>
                                <li>Evaluate engagement qualification</li>
                                <li>Provide requested documentation</li>
                                <li>Maintain security and integrity of our systems</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2>Lawful Basis (UK GDPR)</h2>
                            <p>Auromix processes personal data under the following lawful bases:</p>
                            <ul>
                                <li>Legitimate interest (enterprise engagement evaluation)</li>
                                <li>Contractual necessity</li>
                                <li>Legal compliance</li>
                            </ul>

                            <h2>Data Security</h2>
                            <p>Auromix maintains:</p>
                            <ul>
                                <li>Secure hosting environments</li>
                                <li>Controlled access permissions</li>
                                <li>Encrypted communications</li>
                                <li>Structured data retention policies</li>
                            </ul>

                            <h2>Data Retention</h2>
                            <p>
                                We retain personal data only for as long as necessary for legitimate business and legal purposes.
                            </p>

                            <h2>Third Parties</h2>
                            <p>Data may be processed by:</p>
                            <ul>
                                <li>Secure hosting providers</li>
                                <li>Email infrastructure providers</li>
                                <li>Analytics services</li>
                            </ul>
                            <p>No sale of personal data.</p>

                            <h2>Your Rights</h2>
                            <p>Under UK data protection law, individuals may:</p>
                            <ul>
                                <li>Request access</li>
                                <li>Request correction</li>
                                <li>Request erasure</li>
                                <li>Object to processing</li>
                            </ul>
                            <p>Contact: <a href="mailto:enquiries@auromix.co.uk" style={{ color: 'var(--gold)' }}>enquiries@auromix.co.uk</a></p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
