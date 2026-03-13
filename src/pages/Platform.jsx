import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  AnimatedSection,
  AnimatedGroup,
  AnimatedItem,
} from "../utils/animations";
import "./Platform.css";

const engines = [
  {
    num: "ENGINE 01",
    title: "Telemetry Fusion Engine",
    accent: "gold",
    desc: "A multi-dimensional telemetry aggregation framework that correlates CPU, memory, latency, traffic behaviour and system load variables in real time.",
    bullets: [
      "Cross-metric dependency modelling",
      "Noise filtration algorithms",
      "Latency pattern recognition",
    ],
  },
  {
    num: "ENGINE 02",
    title: "Adaptive Heuristic Engine",
    accent: "purple",
    desc: "Dynamic scaling governance powered by reinforcement-based parameter recalibration.",
    bullets: [
      "Behavioural trend modelling",
      "Risk-weighted scaling logic",
      "Continuous parameter refinement",
    ],
  },
  {
    num: "ENGINE 03",
    title: "Predictive Resilience Model",
    accent: "teal",
    desc: "Calculates instability probability vectors prior to threshold breach.",
    bullets: [
      "Failure probability scoring",
      "Anomaly pattern evolution",
      "Pre-emptive scaling activation",
    ],
  },
  {
    num: "ENGINE 04",
    title: "Autonomous Workflow Governance",
    accent: "blue",
    desc: "Cross-platform orchestration logic integrating distributed enterprise subsystems.",
    bullets: [
      "Event-driven automation triggers",
      "API-mediated coordination",
      "Intelligent decision trees",
    ],
  },
];

const deploymentBoxes = [
  {
    title: "Cloud-Native Integration",
    desc: "Deployed across AWS, Azure and GCP environments using containerised orchestration layers.",
    accent: "blue",
  },
  {
    title: "Secure API Layer",
    desc: "Enterprise API gateway with rate limiting, authentication and endpoint governance.",
    accent: "gold",
  },
  {
    title: "Modular Feature Activation",
    desc: "Selective engine deployment aligned with organisational requirements and growth phase.",
    accent: "purple",
  },
];

const stackLayers = [
  { num: "LAYER 04", label: "Enterprise Applications Layer" },
  { num: "LAYER 03", label: "AURIX™ Intelligence Layer" },
  { num: "LAYER 02", label: "Cloud Infrastructure Layer" },
  { num: "LAYER 01", label: "Telemetry & Data Sources" },
];

const problemCards = [
  { from: "Reactive Monitoring", to: "Performance Volatility", accent: "gold" },
  { from: "Static Scaling Policies", to: "Cost Inflation", accent: "purple" },
  { from: "Manual Mitigation", to: "Operational Risk", accent: "teal" },
];

export default function Platform() {
  return (
    <div className="platform-page">
      {/* HERO */}
      <section className="page-hero section--primary">
        <div className="glow-overlay-purple" />
        <div className="container platform-hero__inner">
          <AnimatedSection>
            <div className="label mb-4">AURIX™ PLATFORM</div>
            <div className="mono-text mb-3">
              AURIX™ v1.0 — Enterprise Release Architecture
            </div>
            <h1 className="hero-h1 mb-6">
              Adaptive Unified
              <br />
              <span className="gold-text">Infrastructure Executor</span>
            </h1>
            <p className="section-subtitle max-w-xl mb-8">
              AURIX™ is an intelligent orchestration layer designed to transform
              reactive infrastructure environments into predictive,
              self-optimising enterprise ecosystems.
            </p>
            <div className="btn-row">
              <Link to="/aurix-technical-brief" className="btn btn--gold">
                Request Platform Brief <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--outline-purple">
                View Architecture Overview <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Metadata strip */}
        <div className="container">
          <AnimatedSection>
            <div className="platform__meta-strip">
              <div className="platform__meta-item">
                <span className="platform__meta-label">Deployment</span>
                <span className="platform__meta-value">
                  Cloud-native (AWS / Azure / GCP compatible)
                </span>
              </div>
              <div className="platform__meta-divider" />
              <div className="platform__meta-item">
                <span className="platform__meta-label">Architecture</span>
                <span className="platform__meta-value">
                  Event-driven microservices
                </span>
              </div>
              <div className="platform__meta-divider" />
              <div className="platform__meta-item">
                <span className="platform__meta-label">Governance Model</span>
                <span className="platform__meta-value">
                  Probabilistic scaling logic
                </span>
              </div>
              <div className="platform__meta-divider" />
              <div className="platform__meta-item">
                <span className="platform__meta-label">Integration</span>
                <span className="platform__meta-value">
                  API-first enterprise layer
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROBLEM AURIX SOLVES */}
      <section className="section section--secondary">
        <div className="container section-inner">
          <AnimatedSection className="text-center mb-14">
            <div className="label mb-4">THE PROBLEM</div>
            <h2 className="section-h2">
              Enterprise Infrastructure Requires Predictive Governance
            </h2>
          </AnimatedSection>
          <AnimatedGroup className="grid-3">
            {problemCards.map((c) => (
              <AnimatedItem key={c.from}>
                <div className="glass-card platform__problem-card">
                  <div
                    className={`card-accent-line card-accent-line--${c.accent}`}
                  />
                  <div className="platform__problem-from">{c.from}</div>
                  <div className="platform__arrow">→</div>
                  <div
                    className={`platform__problem-to platform__to--${c.accent}`}
                  >
                    {c.to}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* CORE ENGINES */}
      <section className="section section--primary">
        <div className="glow-overlay-purple" />
        <div className="container section-inner--lg">
          <AnimatedSection className="mb-14">
            <div className="label mb-4">CORE INTELLIGENCE</div>
            <h2 className="section-h2">Core Intelligence Engines</h2>
          </AnimatedSection>
          <AnimatedGroup className="grid-2">
            {engines.map((e) => (
              <AnimatedItem key={e.title}>
                <div className="glass-card platform__engine-card">
                  <div
                    className={`card-accent-line card-accent-line--${e.accent}`}
                  />
                  <div className="mono-text mb-3">{e.num}</div>
                  <h3 className="card-h3 mb-3">{e.title}</h3>
                  <p className="small-text mb-4">{e.desc}</p>
                  <ul className="platform__engine-bullets">
                    {e.bullets.map((b) => (
                      <li key={b} className="small-text">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* ARCHITECTURE STACK */}
      <section className="section section--secondary">
        <div className="container section-inner">
          <AnimatedSection className="mb-14">
            <div className="label label--purple mb-4">ARCHITECTURE</div>
            <h2 className="section-h2">System Architecture Overview</h2>
          </AnimatedSection>
          <div className="platform__stack">
            {stackLayers.map((layer, i) => (
              <AnimatedSection key={layer.num} delay={i * 0.08}>
                <div className="platform__stack-layer">
                  <span className="mono-text">{layer.num}</span>
                  <span className="platform__stack-label">{layer.label}</span>
                </div>
                {i < stackLayers.length - 1 && (
                  <div className="platform__stack-connector" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODEL */}
      <section className="section section--primary">
        <div className="container section-inner">
          <AnimatedSection className="mb-14">
            <div className="label mb-4">DEPLOYMENT</div>
            <h2 className="section-h2">Enterprise Deployment Model</h2>
          </AnimatedSection>
          <AnimatedGroup className="grid-3">
            {deploymentBoxes.map((d) => (
              <AnimatedItem key={d.title}>
                <div className="glass-card">
                  <div
                    className={`card-accent-line card-accent-line--${d.accent}`}
                  />
                  <h3 className="card-h3 mb-3">{d.title}</h3>
                  <p className="small-text">{d.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
          <AnimatedSection className="mt-10">
            <p className="mono-text text-center" style={{ fontSize: "0.8rem" }}>
              Enterprise pilot deployments available subject to technical
              qualification.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--secondary">
        <div className="glow-overlay-gold" />
        <div className="container section-inner">
          <AnimatedSection className="text-center">
            <div
              className="home__cta-box"
              style={{ maxWidth: 780, margin: "0 auto" }}
            >
              <div className="label label--gold mb-4">CTA</div>
              <h2 className="section-h2 mb-5">
                Request the AURIX™ Technical Brief
              </h2>
              <p
                className="section-subtitle max-w-lg"
                style={{ margin: "0 auto 2.5rem" }}
              >
                Access structured documentation outlining architectural
                modelling, predictive governance logic and deployment framework.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link to="/aurix-technical-brief" className="btn btn--gold">
                  Download Technical Brief <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn--outline-purple">
                  Schedule Engineering Consultation
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
