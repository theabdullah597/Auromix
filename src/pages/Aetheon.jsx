import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '../utils/animations'
import './Platform.css'
import './Aetheon.css'

const pillars = [
    {
        num: 'DOMAIN 01',
        title: 'Telemetry Fusion Research',
        accent: 'gold',
        desc: 'Multi-dimensional signal dependency modelling across distributed infrastructure environments.',
        bullets: ['Signal noise reduction modelling', 'Cross-metric dependency graphs', 'Latency vector forecasting'],
    },
    {
        num: 'DOMAIN 02',
        title: 'Adaptive Heuristic Systems',
        accent: 'purple',
        desc: 'Reinforcement-driven scaling recalibration based on behavioural variance modelling.',
        bullets: ['Risk-weighted scaling logic', 'Parameter entropy adjustment', 'Continuous feedback refinement'],
    },
    {
        num: 'DOMAIN 03',
        title: 'Predictive Resilience Modelling',
        accent: 'teal',
        desc: 'Forecasting instability vectors prior to observable degradation.',
        bullets: ['Instability probability indexing', 'Anomaly evolution tracking', 'Behavioural drift detection'],
    },
    {
        num: 'DOMAIN 04',
        title: 'Autonomous Governance Frameworks',
        accent: 'blue',
        desc: 'Designing orchestration engines capable of system-level decision autonomy.',
        bullets: ['Event-driven response modelling', 'API-mediated governance layers', 'Distributed control logic'],
    },
]

const timelineSteps = [
    { code: '01', label: 'Uncertainty Identification' },
    { code: '02', label: 'Hypothesis Modelling' },
    { code: '03', label: 'Algorithmic Prototyping' },
    { code: '04', label: 'Controlled Simulation' },
    { code: '05', label: 'Enterprise Environment Testing' },
    { code: '06', label: 'Iterative Optimisation' },
]

const roadmap = [
    { year: '2026', desc: 'Telemetry Fusion Engine v1' },
    { year: '2027', desc: 'Adaptive Heuristic Engine Deployment' },
    { year: '2028', desc: 'Autonomous Governance Model Integration' },
]

const thesisBlocks = [
    { label: 'Current State', title: 'Deterministic Rule Engines', color: 'var(--text-muted)' },
    { label: 'Target State', title: 'Probabilistic Behavioural Modelling', color: 'var(--gold)' },
    { label: 'Future State', title: 'Autonomous Governance Frameworks', color: 'var(--purple-light)' },
]

export default function Aetheon() {
    return (
        <div>
            {/* HERO */}
            <section className="page-hero section--primary">
                <div className="glow-overlay-purple" />
                <div className="container" style={{ paddingBottom: '5rem' }}>
                    <AnimatedSection>
                        <div className="label mb-4">INTERNAL RESEARCH PROGRAMME</div>
                        <h1 className="hero-h1 mb-3">Project AETHEON™</h1>
                        <p className="section-subtitle mb-2" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: 600 }}>
                            Autonomous Enterprise Telemetry &amp; Heuristic Optimisation Network
                        </p>
                        <div className="mono-text mb-6" style={{ fontSize: '0.78rem' }}>
                            Research Classification: Internal Advanced Systems Programme &nbsp;·&nbsp;
                            Status: Active Development Cycle &nbsp;·&nbsp;
                            Programme Code: AET-01
                        </div>
                        <p className="section-subtitle max-w-lg mb-8">
                            Project AETHEON™ is Auromix's structured research initiative focused on advancing predictive infrastructure modelling, adaptive scaling heuristics and autonomous governance frameworks.
                        </p>
                        <div className="btn-row">
                            <Link to="/aurix-technical-brief" className="btn btn--gold">
                                Download Research Prospectus <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="btn btn--outline-purple">
                                Request Research Briefing
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* RESEARCH THESIS */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-12">
                        <div className="label mb-4">RESEARCH THESIS</div>
                        <h2 className="section-h2 mb-5">Research Thesis</h2>
                        <p className="section-subtitle max-w-xl">
                            Modern enterprise infrastructure remains governed by deterministic threshold systems incapable of modelling probabilistic instability or behavioural volatility. Project AETHEON™ seeks to design adaptive frameworks capable of forecasting performance degradation before threshold breach.
                        </p>
                    </AnimatedSection>

                    <AnimatedGroup className="grid-3">
                        {thesisBlocks.map(b => (
                            <AnimatedItem key={b.title}>
                                <div className="glass-card" style={{ textAlign: 'center' }}>
                                    <div className="mono-text mb-3">{b.label}</div>
                                    <div className="card-h3" style={{ color: b.color }}>{b.title}</div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* RESEARCH PILLARS */}
            <section className="section section--primary">
                <div className="glow-overlay-purple" />
                <div className="container section-inner--lg">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">PRIMARY DOMAINS</div>
                        <h2 className="section-h2">Primary Research Domains</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-2">
                        {pillars.map(p => (
                            <AnimatedItem key={p.title}>
                                <div className="glass-card platform__engine-card">
                                    <div className={`card-accent-line card-accent-line--${p.accent}`} />
                                    <div className="mono-text mb-3">{p.num}</div>
                                    <h3 className="card-h3 mb-3">{p.title}</h3>
                                    <p className="small-text mb-4">{p.desc}</p>
                                    <ul className="platform__engine-bullets">
                                        {p.bullets.map(b => <li key={b} className="small-text">{b}</li>)}
                                    </ul>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* EXPERIMENTAL METHODOLOGY */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label label--purple mb-4">METHODOLOGY</div>
                        <h2 className="section-h2">Experimental Development Framework</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="aetheon__timeline">
                            {timelineSteps.map((step, i) => (
                                <div key={step.code} className="aetheon__timeline-item">
                                    <div className="aetheon__step-box">
                                        <div className="mono-text mb-2">{step.code}</div>
                                        <div className="small-text" style={{ fontWeight: 600 }}>{step.label}</div>
                                    </div>
                                    {i < timelineSteps.length - 1 && <div className="aetheon__connector" aria-hidden="true">→</div>}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* INNOVATION ROADMAP */}
            <section className="section section--primary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">ROADMAP</div>
                        <h2 className="section-h2">Research Roadmap</h2>
                    </AnimatedSection>
                    <div className="aetheon__roadmap">
                        {roadmap.map((r, i) => (
                            <AnimatedSection key={r.year} delay={i * 0.1}>
                                <div className="aetheon__roadmap-item">
                                    <div className="aetheon__roadmap-year">{r.year}</div>
                                    <div className="aetheon__roadmap-bar" />
                                    <div className="small-text" style={{ fontWeight: 500 }}>{r.desc}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMERCIAL INTEGRATION */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="text-center">
                        <div className="label mb-4">INTEGRATION</div>
                        <h2 className="section-h2 mb-5">Research to Platform Integration</h2>
                        <p className="section-subtitle max-w-lg" style={{ margin: '0 auto 2rem' }}>
                            Outputs from Project AETHEON™ are embedded directly into AURIX™ platform releases, ensuring commercial scalability and enterprise applicability.
                        </p>
                        <div className="glass-card" style={{ maxWidth: 460, margin: '0 auto', padding: '1.75rem 2rem' }}>
                            <div className="mono-text mb-2">UPCOMING</div>
                            <div className="card-h3">AURIX™ vNext — Intelligence Layer Expansion</div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--primary">
                <div className="glow-overlay-gold" />
                <div className="container section-inner">
                    <AnimatedSection className="text-center">
                        <div className="home__cta-box" style={{ maxWidth: 780, margin: '0 auto' }}>
                            <div className="label label--gold mb-4">RESEARCH ENGAGEMENT</div>
                            <h2 className="section-h2 mb-4">Engage With Our Research Division</h2>
                            <p className="section-subtitle max-w-lg" style={{ margin: '0 auto 2.5rem' }}>
                                Enterprise organisations and institutions interested in structured research collaboration or technical briefings may request engagement through our engineering team.
                            </p>
                            <div className="btn-row" style={{ justifyContent: 'center' }}>
                                <Link to="/aurix-technical-brief" className="btn btn--gold">
                                    Download Research Prospectus <ArrowRight size={16} />
                                </Link>
                                <Link to="/contact" className="btn btn--outline-purple">
                                    Schedule Research Consultation
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
