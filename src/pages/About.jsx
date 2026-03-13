import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '../utils/animations'
import './Platform.css'
import './About.css'

const principleCards = [
    {
        num: '01',
        title: 'Systems First',
        desc: 'We prioritise architectural integrity over surface-level optimisation.',
        accent: 'gold'
    },
    {
        num: '02',
        title: 'Predictive by Design',
        desc: 'All platform components are engineered with forward-modelling logic embedded at core level.',
        accent: 'purple'
    },
    {
        num: '03',
        title: 'Commercial Scalability',
        desc: 'Research outputs are designed for structured SaaS deployment, not theoretical isolation.',
        accent: 'teal'
    },
]

const orgStructure = [
    {
        title: 'Research & Innovation Division',
        desc: 'Responsible for advancing Project AETHEON™ outputs and core modelling frameworks. Drives the predictive intelligence architecture underlying the AURIX™ platform.',
    },
    {
        title: 'Platform Engineering Division',
        desc: 'Responsible for commercial platform design, enterprise API development and scalable microservice architecture. Translates research into deployable systems.',
    },
    {
        title: 'Enterprise Engagement & Deployment',
        desc: 'Responsible for client qualification, strategic consultation and structured SaaS licensing. Drives commercial integration with enterprise environments.',
    },
]

const focusAreas = [
    { title: 'Predictive Infrastructure Intelligence', desc: 'Modelling infrastructure behaviour using multi-signal telemetry correlation and probabilistic forecasting.', accent: 'gold' },
    { title: 'Autonomous Workflow Orchestration', desc: 'Engineering event-driven orchestration frameworks for cross-system enterprise automation.', accent: 'purple' },
    { title: 'Probabilistic Governance Modelling', desc: 'Designing risk-weighted governance logic capable of adapting to behavioural volatility in real time.', accent: 'teal' },
]

const legalCols = [
    'Registered in the United Kingdom',
    'Enterprise Software Development (SIC 62012)',
    'SaaS Platform Development & Licensing',
    'Research Programme: Project AETHEON™',
]

export default function About() {
    return (
        <div>
            {/* HERO */}
            <section className="page-hero section--primary">
                <div className="glow-overlay-purple" />
                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <AnimatedSection>
                        <div className="label mb-4">ABOUT AUROMIX</div>
                        <h1 className="hero-h1 mb-5">Engineering Predictive<br /><span className="gold-text">Enterprise Systems</span></h1>
                        <p className="section-subtitle max-w-xl">
                            Auromix is a UK-based enterprise software development and licensing company focused on advancing predictive infrastructure intelligence and autonomous system governance.
                        </p>
                    </AnimatedSection>

                    {/* Legal Strip */}
                    <AnimatedSection>
                        <div className="about__legal-strip">
                            {legalCols.map(col => (
                                <div key={col} className="about__legal-item">
                                    <span className="mono-text" style={{ fontSize: '0.75rem' }}>{col}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FOUNDATIONAL THESIS */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="label mb-5">FOUNDATIONAL PHILOSOPHY</div>
                        <h2 className="section-h2 mb-6">Our Foundational Thesis</h2>
                        <div className="about__thesis">
                            <p className="section-subtitle mb-5">
                                Modern enterprise infrastructure remains fundamentally reactive. Scaling occurs after stress signals emerge. Workflows rely on manual mitigation. Systems are governed by deterministic thresholds.
                            </p>
                            <p className="section-subtitle">
                                Auromix was established to design adaptive, probabilistic and autonomous governance frameworks capable of transitioning enterprise environments from reactive control to predictive intelligence.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ENGINEERING PRINCIPLES */}
            <section className="section section--primary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">PRINCIPLES</div>
                        <h2 className="section-h2">Engineering Principles</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-3">
                        {principleCards.map(p => (
                            <AnimatedItem key={p.title}>
                                <div className="glass-card">
                                    <div className={`card-accent-line card-accent-line--${p.accent}`} />
                                    <div className="mono-text mb-3">{p.num}</div>
                                    <h3 className="card-h3">{p.title}</h3>
                                    <p className="small-text mt-2">{p.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* ORG STRUCTURE */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">ORGANISATION</div>
                        <h2 className="section-h2">Organisational Structure</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-3">
                        {orgStructure.map(o => (
                            <AnimatedItem key={o.title}>
                                <div className="glass-card" style={{ height: '100%' }}>
                                    <h3 className="card-h3 mb-3">{o.title}</h3>
                                    <p className="small-text">{o.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* OPERATIONAL FOCUS */}
            <section className="section section--primary">
                <div className="glow-overlay-purple" />
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">OPERATIONAL FOCUS</div>
                        <h2 className="section-h2">Operational Focus Areas</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-3">
                        {focusAreas.map(f => (
                            <AnimatedItem key={f.title}>
                                <div className="glass-card">
                                    <div className={`card-accent-line card-accent-line--${f.accent}`} />
                                    <h3 className="card-h3 mb-3">{f.title}</h3>
                                    <p className="small-text">{f.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* GOVERNANCE */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="label mb-5">GOVERNANCE</div>
                        <h2 className="section-h2 mb-5">Governance &amp; Responsibility</h2>
                        <p className="section-subtitle max-w-xl">
                            Auromix operates under structured governance standards with emphasis on secure development lifecycle, architectural documentation, compliance alignment and enterprise accountability.
                        </p>
                        <p className="mono-text mt-4" style={{ fontSize: '0.8rem' }}>
                            Board-level oversight of research direction and platform evolution.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* CORPORATE POSITIONING */}
            <section className="section section--primary">
                <div className="container section-inner">
                    <AnimatedSection>
                        <div className="glass-card" style={{ maxWidth: 780 }}>
                            <div className="label mb-4">CORPORATE POSITIONING</div>
                            <h3 className="card-h3 mb-4" style={{ fontSize: '1.15rem' }}>Corporate Positioning</h3>
                            <p className="small-text" style={{ lineHeight: 1.85 }}>
                                Auromix operates as a research-driven enterprise software organisation focused on the development and commercialisation of predictive infrastructure technologies. The company does not provide generic IT consultancy services; its focus remains on structured platform engineering and controlled SaaS deployment.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--secondary">
                <div className="glow-overlay-gold" />
                <div className="container section-inner">
                    <AnimatedSection className="text-center">
                        <div className="home__cta-box" style={{ maxWidth: 700, margin: '0 auto' }}>
                            <h2 className="section-h2 mb-3">The Future of Enterprise Infrastructure Is Autonomous.</h2>
                            <p className="section-subtitle mb-8" style={{ margin: '1rem auto 2.5rem' }}>
                                Auromix exists to engineer that transition.
                            </p>
                            <Link to="/contact" className="btn btn--gold">
                                Engage With Our Engineering Team <ArrowRight size={16} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
