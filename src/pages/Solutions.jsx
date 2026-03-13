import { Link } from 'react-router-dom'
import { Globe, Cpu, BarChart3, GitBranch, Layers, Database, ArrowRight } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '../utils/animations'
import './Platform.css'

const solutionCards = [
    {
        icon: <Globe size={22} />,
        title: 'SaaS Platforms',
        desc: 'Optimise performance during peak traffic volatility. Predictive scaling without over-provisioning.',
        bullets: ['Predictive scaling during traffic peaks', 'Reduced cloud overhead', 'Stabilised performance under growth'],
        accent: 'blue'
    },
    {
        icon: <Cpu size={22} />,
        title: 'Fintech Infrastructure',
        desc: 'Enhance system resilience under transaction surges. Enterprise-grade governance for financial operations.',
        bullets: ['Resilience during transaction surges', 'Governance across distributed services', 'Reduced operational incident frequency'],
        accent: 'purple'
    },
    {
        icon: <BarChart3 size={22} />,
        title: 'Payroll & Workforce Platforms',
        desc: 'Stabilise load during cyclical processing spikes. Automation-driven operational consistency.',
        bullets: ['Peak-load stability during pay cycles', 'Automation for operational triggers', 'Predictive processing resilience'],
        accent: 'gold'
    },
    {
        icon: <GitBranch size={22} />,
        title: 'Recruitment & Marketplace Systems',
        desc: 'Balance dynamic multi-user activity environments with predictive governance.',
        bullets: ['Dynamic multi-user activity balancing', 'Predictive system response under spikes', 'Real-time workflow orchestration'],
        accent: 'teal'
    },
    {
        icon: <Layers size={22} />,
        title: 'Enterprise IT Operations',
        desc: 'Unified orchestration visibility and reduced dependence on manual intervention.',
        bullets: ['Unified orchestration layer visibility', 'Reduced dependency on manual intervention', 'Risk-weighted optimisation control'],
        accent: 'blue'
    },
    {
        icon: <Database size={22} />,
        title: 'Data & Analytics Platforms',
        desc: 'High-throughput stability for data-intensive enterprise environments.',
        bullets: ['High-throughput stability optimisation', 'Telemetry correlation governance', 'Predictive infrastructure allocation'],
        accent: 'purple'
    },
]

const whyCards = [
    { title: 'Engineered, Not Assembled', desc: 'Our systems are built from first principles using modern cloud-native architecture.', accent: 'gold' },
    { title: 'Enterprise-Grade Security', desc: 'Secure-by-design infrastructure with encryption, access controls and immutable audit trails.', accent: 'purple' },
    { title: 'Predictive Intelligence', desc: 'We move beyond reactive threshold monitoring into probabilistic modelling and adaptive heuristics.', accent: 'teal' },
    { title: 'Commercially Scalable', desc: 'Subscription licensing model with enterprise deployment flexibility and structured onboarding.', accent: 'blue' },
]

export default function Solutions() {
    return (
        <div>
            {/* HERO */}
            <section className="page-hero section--primary">
                <div className="glow-overlay-purple" />
                <div className="container" style={{ paddingBottom: '5rem' }}>
                    <AnimatedSection>
                        <div className="label mb-4">ENTERPRISE SOLUTIONS</div>
                        <h1 className="hero-h1 mb-5">Designed for High-Growth<br /><span className="gold-text">Digital Enterprises</span></h1>
                        <p className="section-subtitle max-w-lg">
                            AURIX™ is built for environments where load volatility, operational complexity and uptime requirements demand predictive governance — not reactive monitoring.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SOLUTIONS GRID */}
            <section className="section section--secondary">
                <div className="container section-inner--lg">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">APPLICATIONS</div>
                        <h2 className="section-h2">Industry Applications</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-3">
                        {solutionCards.map(s => (
                            <AnimatedItem key={s.title}>
                                <div className="glass-card" style={{ height: '100%' }}>
                                    <div className={`card-accent-line card-accent-line--${s.accent}`} />
                                    <div className={`home__industry-icon home__industry-icon--${s.accent} mb-4`}>{s.icon}</div>
                                    <h3 className="card-h3 mb-2">{s.title}</h3>
                                    <p className="small-text mb-4">{s.desc}</p>
                                    <ul className="home__bullet-list">
                                        {s.bullets.map(b => <li key={b} className="small-text">{b}</li>)}
                                    </ul>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* WHY AUROMIX */}
            <section className="section section--primary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">WHY AUROMIX</div>
                        <h2 className="section-h2">Engineered for Differentiation</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-4">
                        {whyCards.map(c => (
                            <AnimatedItem key={c.title}>
                                <div className="glass-card">
                                    <div className={`card-accent-line card-accent-line--${c.accent}`} />
                                    <h3 className="card-h3 mb-2">{c.title}</h3>
                                    <p className="small-text">{c.desc}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--secondary">
                <div className="glow-overlay-gold" />
                <div className="container section-inner">
                    <AnimatedSection className="text-center">
                        <div className="home__cta-box" style={{ maxWidth: 700, margin: '0 auto' }}>
                            <div className="label label--gold mb-4">STRATEGIC ENGAGEMENT</div>
                            <h2 className="section-h2 mb-5">Explore Enterprise Deployment</h2>
                            <p className="section-subtitle max-w-lg" style={{ margin: '0 auto 2.5rem' }}>
                                Enterprise pilot deployments available subject to technical qualification. Our engineering team is available for strategic consultation.
                            </p>
                            <div className="btn-row" style={{ justifyContent: 'center' }}>
                                <Link to="/contact" className="btn btn--gold">
                                    Request Strategic Consultation <ArrowRight size={16} />
                                </Link>
                                <Link to="/aurix-technical-brief" className="btn btn--outline-purple">
                                    Technical Brief Access
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
