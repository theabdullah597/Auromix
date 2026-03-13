import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Shield,
  Zap,
  BarChart3,
  GitBranch,
  Globe,
  Database,
} from "lucide-react";
import {
  AnimatedSection,
  AnimatedGroup,
  AnimatedItem,
  fadeUp,
} from "../utils/animations";
import "./Home.css";

const problemCards = [
  {
    icon: <Layers size={22} />,
    title: "Fragmented Architecture",
    desc: "Distributed services lack unified orchestration logic, creating blind operational zones.",
    accent: "gold",
  },
  {
    icon: <Zap size={22} />,
    title: "Threshold-Based Scaling",
    desc: "Reactive rule engines respond after stress signals appear, not before.",
    accent: "purple",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Over-Provisioned Resources",
    desc: "Static safety margins inflate infrastructure costs and reduce efficiency.",
    accent: "teal",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Manual Intervention Dependency",
    desc: "Human-led mitigation introduces latency and operational risk.",
    accent: "blue",
  },
];

// Enhanced Hero Animations
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const shiftCards = [
  {
    title: "Predictive Modelling",
    desc: "We model infrastructure behaviour using multi-dimensional telemetry correlation rather than single-metric triggers.",
    accent: "gold",
  },
  {
    title: "Probabilistic Governance",
    desc: "Dynamic scaling decisions are weighted by behavioural risk modelling rather than fixed thresholds.",
    accent: "purple",
  },
  {
    title: "Autonomous Response",
    desc: "System adjustments occur before observable degradation, minimising disruption.",
    accent: "teal",
  },
  {
    title: "Continuous Optimisation",
    desc: "Adaptive feedback loops recalibrate performance parameters over time.",
    accent: "blue",
  },
];

const aurixEngines = [
  {
    label: "TELEMETRY FUSION ENGINE",
    title: "Telemetry Fusion Engine",
    desc: "Multi-dimensional signal correlation across distributed infrastructure environments.",
    accent: "gold",
  },
  {
    label: "ADAPTIVE HEURISTIC ENGINE",
    title: "Adaptive Heuristic Engine",
    desc: "Reinforcement-driven scaling recalibration based on behavioural variance modelling.",
    accent: "purple",
  },
  {
    label: "PREDICTIVE RESILIENCE MODEL",
    title: "Predictive Resilience Model",
    desc: "Calculates instability probability vectors prior to threshold breach.",
    accent: "teal",
  },
  {
    label: "AUTONOMOUS WORKFLOW GOVERNANCE",
    title: "Autonomous Workflow Governance",
    desc: "Cross-system orchestration using event-driven intelligence layers.",
    accent: "blue",
  },
];

const researchPillars = [
  {
    label: "DOMAIN 01",
    title: "Telemetry Fusion Research",
    desc: "Multi-dimensional signal correlation across distributed environments.",
    accent: "gold",
  },
  {
    label: "DOMAIN 02",
    title: "Adaptive Heuristic Systems",
    desc: "Reinforcement-driven scaling recalibration frameworks.",
    accent: "purple",
  },
  {
    label: "DOMAIN 03",
    title: "Predictive Resilience Modelling",
    desc: "Failure probability scoring and instability forecasting algorithms.",
    accent: "teal",
  },
  {
    label: "DOMAIN 04",
    title: "Autonomous Governance Frameworks",
    desc: "Cross-system orchestration using event-driven intelligence layers.",
    accent: "blue",
  },
];

const securityCards = [
  {
    title: "Secure Development Lifecycle",
    points: [
      "Version-controlled code governance",
      "Peer-reviewed architecture validation",
      "Controlled deployment pipelines",
      "Environment segmentation",
    ],
    accent: "blue",
  },
  {
    title: "Data Protection & Encryption",
    points: [
      "End-to-end encryption",
      "Secure API gateway mediation",
      "Role-based access control",
      "Immutable audit logs",
    ],
    accent: "gold",
  },
  {
    title: "Infrastructure Resilience",
    points: [
      "High-availability architecture",
      "Predictive failover modelling",
      "Redundancy distribution",
      "Disaster recovery planning",
    ],
    accent: "purple",
  },
];

const industryCards = [
  {
    icon: <Globe size={20} />,
    title: "SaaS Platforms",
    points: [
      "Predictive scaling during traffic peaks",
      "Reduced cloud overhead",
      "Stabilised performance under growth",
    ],
    accent: "blue",
  },
  {
    icon: <Cpu size={20} />,
    title: "Fintech Infrastructure",
    points: [
      "Resilience during transaction surges",
      "Governance across distributed services",
      "Reduced operational incident frequency",
    ],
    accent: "purple",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Payroll & Workforce Systems",
    points: [
      "Peak-load stability during pay cycles",
      "Automation for operational triggers",
      "Predictive processing resilience",
    ],
    accent: "gold",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Recruitment Marketplaces",
    points: [
      "Dynamic multi-user activity balancing",
      "Predictive system response under spikes",
      "Real-time workflow orchestration",
    ],
    accent: "teal",
  },
  {
    icon: <Layers size={20} />,
    title: "Enterprise IT Operations",
    points: [
      "Unified orchestration layer visibility",
      "Reduced dependency on manual intervention",
      "Risk-weighted optimisation control",
    ],
    accent: "blue",
  },
  {
    icon: <Database size={20} />,
    title: "Data & Analytics Platforms",
    points: [
      "High-throughput stability optimisation",
      "Telemetry correlation governance",
      "Predictive infrastructure allocation",
    ],
    accent: "purple",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="glow-overlay-purple" />
        <div className="container hero__inner">
          <div className="home__hero-content text-center">
            <motion.div
              className="hero__content"
              initial="hidden"
              animate="visible"
              variants={heroStagger}
              style={{ margin: "0 auto" }}
            >
              <motion.h1 variants={heroReveal} className="hero-h1 mb-4">
                Adaptive Infrastructure
                <br />
                Intelligence
              </motion.h1>
              <motion.p variants={heroReveal} className="hero__subtext mb-8" style={{ margin: "0 auto" }}>
                Autonomous Enterprise Scaling &amp; Predictive Governance
              </motion.p>
              <motion.div variants={heroReveal} className="btn-row justify-center">
                <Link to="/aurix" className="btn btn--gold">
                  Explore AURIX Platform
                </Link>
                <Link to="/aetheon" className="btn btn--outline-purple">
                  Learn About AETHEON
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="container">
          <AnimatedSection>
            <div className="hero__stat-strip">
              <div className="hero__stat">
                <span className="hero__stat-label">Deployment</span>
                <span className="hero__stat-value">
                  Cloud-Native (AWS / Azure / GCP)
                </span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-label">Architecture</span>
                <span className="hero__stat-value">
                  Event-Driven Microservices
                </span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-label">Governance Model</span>
                <span className="hero__stat-value">
                  Probabilistic Scaling Logic
                </span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-label">Integration</span>
                <span className="hero__stat-value">
                  API-First Enterprise Layer
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 2 — THE PROBLEM ============ */}
      <section className="section section--secondary">
        <div className="glow-overlay-blue" />
        <div className="container section-inner">
          <AnimatedSection className="text-center mb-16">
            <div className="label mb-4">INFRASTRUCTURE REALITY</div>
            <h2 className="section-h2 mb-6">
              Today's Enterprise Infrastructure
              <br />
              Is Fundamentally Reactive
            </h2>
            <p
              className="section-subtitle max-w-xl"
              style={{ margin: "0 auto" }}
            >
              Modern enterprise systems rely on deterministic threshold triggers
              and manual intervention, resulting in inefficiency, cost
              volatility and systemic fragility.
            </p>
          </AnimatedSection>

          <AnimatedGroup className="grid-4">
            {problemCards.map((card) => (
              <AnimatedItem key={card.title}>
                <div className={`glass-card home__problem-card`}>
                  <div
                    className={`card-accent-line card-accent-line--${card.accent}`}
                  />
                  <div
                    className={`home__problem-icon home__problem-icon--${card.accent}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="card-h3">{card.title}</h3>
                  <p className="small-text">{card.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <AnimatedSection className="text-center mt-16">
            <div className="section-divider" />
            <p className="home__diagnostic-statement">
              The Future Requires{" "}
              <span className="gold-text">
                Predictive Infrastructure Intelligence.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 3 — AUTONOMOUS SHIFT ============ */}
      <section
        className="section section--primary"
        style={{ position: "relative" }}
      >
        <div
          className="glow-overlay-blue"
          style={{ bottom: "unset", top: "-150px", left: "-100px" }}
        />
        <div className="container section-inner">
          <div className="home__shift-layout">
            <AnimatedSection className="home__shift-header">
              <div className="label mb-4">THE AUTONOMOUS SHIFT</div>
              <h2 className="section-h2 mb-6">
                Engineering Predictive
                <br />
                Enterprise Environments
              </h2>
              <p className="section-subtitle max-w-lg">
                Auromix transitions organisations from reactive infrastructure
                management toward adaptive, probabilistic and autonomous system
                governance.
              </p>
            </AnimatedSection>

            <AnimatedGroup className="grid-2 home__shift-grid">
              {shiftCards.map((card) => (
                <AnimatedItem key={card.title}>
                  <div className="glass-card">
                    <div
                      className={`card-accent-line card-accent-line--${card.accent}`}
                    />
                    <h3 className="card-h3">{card.title}</h3>
                    <p className="small-text">{card.desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — AURIX PLATFORM ============ */}
      <section className="section section--secondary">
        <div className="container section-inner">
          <AnimatedSection className="home__aurix-header mb-16">
            <div className="label label--purple mb-4">
              PLATFORM ARCHITECTURE
            </div>
            <h2 className="section-h2 mb-4 max-w-lg">
              AURIX™ — Adaptive Unified Infrastructure Executor
            </h2>
            <p className="section-subtitle max-w-lg">
              AURIX™ operates as an intelligent orchestration layer across
              distributed enterprise environments, enabling predictive scaling,
              autonomous response and continuous optimisation.
            </p>
          </AnimatedSection>

          <div className="home__aurix-split">
            <AnimatedSection>
              <div className="home__engine-stack">
                {aurixEngines.map((e) => (
                  <div
                    key={e.title}
                    className={`left-border-card left-border-card--${e.accent}`}
                  >
                    <div className="mono-text mb-2">{e.label}</div>
                    <div className="card-h3" style={{ fontSize: "1rem" }}>
                      {e.title}
                    </div>
                    <p className="small-text">{e.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="home__aurix-right">
                <h3 className="card-h3 mb-4" style={{ fontSize: "1.25rem" }}>
                  Core Intelligence Layer
                </h3>
                <p className="section-subtitle mb-8">
                  AURIX™ integrates multi-signal telemetry, behavioural
                  modelling and probabilistic governance into a unified
                  orchestration framework capable of anticipating instability
                  before threshold breach.
                </p>
                <div className="home__feature-pills">
                  {[
                    "API-First Integration",
                    "Secure-by-Design Architecture",
                    "Cloud-Native Microservices",
                  ].map((f) => (
                    <div key={f} className="glass-card home__feature-pill">
                      <span className="small-text">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-16">
            <div className="section-divider" />
            <p
              className="home__diagnostic-statement"
              style={{ marginTop: "2rem" }}
            >
              Built for high-growth{" "}
              <span className="gold-text">
                SaaS, fintech and enterprise infrastructure
              </span>{" "}
              environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 5 — AETHEON RESEARCH ============ */}
      <section className="section section--primary">
        <div className="glow-overlay-purple" />
        <div className="container section-inner--lg">
          <AnimatedSection className="mb-16">
            <div className="label mb-4">RESEARCH INITIATIVE</div>
            <h2 className="section-h2 mb-4">Project AETHEON™</h2>
            <p className="mono-text mb-6" style={{ fontSize: "0.8rem" }}>
              Autonomous Enterprise Telemetry &amp; Heuristic Optimisation
              Network
            </p>
            <p className="section-subtitle max-w-xl">
              Project AETHEON™ is Auromix's internal advanced research programme
              focused on advancing predictive infrastructure intelligence,
              probabilistic governance and adaptive enterprise orchestration.
            </p>
          </AnimatedSection>

          <AnimatedGroup className="grid-4">
            {researchPillars.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="glass-card">
                  <div
                    className={`card-accent-line card-accent-line--${p.accent}`}
                  />
                  <div className="mono-text mb-3">{p.label}</div>
                  <h3 className="card-h3">{p.title}</h3>
                  <p className="small-text">{p.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <AnimatedSection className="mt-16">
            <div className="home__methodology-box">
              <h3 className="card-h3 mb-6" style={{ fontSize: "1.1rem" }}>
                Experimental Development Framework
              </h3>
              <div className="home__methodology-steps">
                {[
                  "Uncertainty Identification",
                  "Hypothesis Modelling",
                  "Algorithmic Prototyping",
                  "Simulation Testing",
                  "Controlled Deployment",
                  "Iterative Optimisation",
                ].map((step, i) => (
                  <div key={step} className="home__methodology-step">
                    <div className="home__step-num">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="small-text" style={{ fontWeight: 500 }}>
                      {step}
                    </div>
                    {i < 5 && <div className="home__step-arrow">→</div>}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <div className="home__prospectus-box">
              <h3 className="card-h3 mb-4" style={{ fontSize: "1.1rem" }}>
                Download Research Prospectus
              </h3>
              <p className="small-text mb-6">
                Access our structured research prospectus outlining
                architectural objectives, modelling uncertainties and innovation
                roadmap.
              </p>
              <Link to="/aurix-technical-brief" className="btn btn--gold">
                Download AETHEON™ Prospectus <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 6 — SECURITY ============ */}
      <section className="section section--secondary">
        <div className="container section-inner">
          <AnimatedSection className="mb-16">
            <div className="label label--blue mb-4">
              SECURITY &amp; GOVERNANCE
            </div>
            <h2 className="section-h2 mb-4 max-w-lg">
              Engineered for Enterprise Assurance
            </h2>
            <p className="section-subtitle max-w-lg">
              Auromix platforms are built with security, governance and
              resilience embedded at architectural level — not layered on after
              deployment.
            </p>
          </AnimatedSection>

          <AnimatedGroup className="grid-3">
            {securityCards.map((card) => (
              <AnimatedItem key={card.title}>
                <div className="glass-card" style={{ height: "100%" }}>
                  <div
                    className={`card-accent-line card-accent-line--${card.accent}`}
                  />
                  <h3 className="card-h3 mb-4">{card.title}</h3>
                  <ul className="home__bullet-list">
                    {card.points.map((p) => (
                      <li key={p} className="small-text">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <AnimatedSection className="mt-12">
            <div className="home__governance-box">
              <h3 className="card-h3 mb-3">
                Governance &amp; Compliance Readiness
              </h3>
              <p className="small-text max-w-lg">
                AURIX™ architecture is designed to align with enterprise
                governance standards, ensuring compatibility with internal
                compliance frameworks, audit protocols and operational risk
                management structures.
              </p>
              <p className="mono-text mt-4">
                Architecture documentation available upon enterprise
                consultation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 7 — ENTERPRISE APPLICATIONS ============ */}
      <section className="section section--primary grid-pattern">
        <div className="container section-inner">
          <AnimatedSection className="text-center mb-16">
            <div className="label label--teal mb-4">
              ENTERPRISE APPLICATIONS
            </div>
            <h2 className="section-h2 mb-5">
              Designed for High-Growth Digital Enterprises
            </h2>
            <p
              className="section-subtitle max-w-xl"
              style={{ margin: "0 auto" }}
            >
              AURIX™ is built for environments where load volatility,
              operational complexity and uptime requirements demand predictive
              governance — not reactive monitoring.
            </p>
          </AnimatedSection>

          <AnimatedGroup className="grid-3">
            {industryCards.map((card) => (
              <AnimatedItem key={card.title}>
                <div className="glass-card">
                  <div
                    className={`card-accent-line card-accent-line--${card.accent}`}
                  />
                  <div
                    className={`home__industry-icon home__industry-icon--${card.accent}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="card-h3">{card.title}</h3>
                  <ul className="home__bullet-list mt-4">
                    {card.points.map((p) => (
                      <li key={p} className="small-text">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <AnimatedSection className="mt-12">
            <div className="home__outcomes-box">
              <h3 className="card-h3 mb-6" style={{ textAlign: "center" }}>
                Common Outcomes Across Deployments
              </h3>
              <div className="home__outcomes-grid">
                {[
                  "Cost Optimisation",
                  "Uptime Stability",
                  "Operational Automation",
                  "Predictive Resilience",
                ].map((o) => (
                  <div key={o} className="glass-card home__outcome-item">
                    <span style={{ fontWeight: 600, fontSize: "0.92rem" }}>
                      {o}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SECTION 8 — STRATEGIC CTA ============ */}
      <section className="section section--secondary">
        <div
          className="glow-overlay-gold"
          style={{
            bottom: "unset",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
          }}
        />
        <div className="container section-inner">
          <AnimatedSection className="text-center">
            <div className="home__cta-box">
              <div className="label label--gold mb-4">STRATEGIC ENGAGEMENT</div>
              <h2 className="section-h2 mb-5">
                Ready to Engineer the
                <br />
                <span className="gold-text">Autonomous Enterprise?</span>
              </h2>
              <p
                className="section-subtitle max-w-lg"
                style={{ margin: "0 auto 2.5rem" }}
              >
                If your organisation is exploring predictive infrastructure
                governance, autonomous scaling systems or enterprise workflow
                orchestration, our engineering team is available for strategic
                consultation.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link to="/contact" className="btn btn--gold">
                  Request Strategic Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/aurix-technical-brief"
                  className="btn btn--outline-purple"
                >
                  Download Technical Brief
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
