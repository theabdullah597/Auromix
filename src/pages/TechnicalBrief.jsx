import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Lock, FileText, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '../utils/animations'
import './Platform.css'

const docStructure = [
    { code: '01', title: 'Executive Architecture Summary' },
    { code: '02', title: 'Core Intelligence Engine Overview' },
    { code: '03', title: 'Predictive Governance Framework' },
    { code: '04', title: 'Deployment & Licensing Model' },
    { code: '05', title: 'Research Integration Overview' },
    { code: '06', title: 'Security & Governance Alignment' },
]

export default function TechnicalBrief() {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [form, setForm] = useState({
        fullName: '', org: '', role: '', email: '',
        orgSize: '', infrastructure: '', useCase: '', timeline: ''
    })
    const [status, setStatus] = useState('idle')

    const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setStatus('loading')

        emailjs.sendForm('service_zz2sj4p', 'template_ax15t9b', formRef.current, '-OD1OTeL9dsbhwg8r')
            .then((result) => {
                setStatus('idle')
                navigate('/technical-brief-request-received')
            }, (error) => {
                console.error('Error:', error.text)
                setStatus('error')
            })
    }

    return (
        <div>
            {/* HERO */}
            <section className="page-hero section--primary">
                <div className="glow-overlay-purple" />
                <div className="container" style={{ paddingBottom: '5rem' }}>
                    <AnimatedSection>
                        <div className="brief__classification-bar">
                            <span className="mono-text" style={{ fontSize: '0.72rem' }}>
                                Document Classification: Enterprise Technical Overview &nbsp;·&nbsp; Access Level: Qualification-Based Distribution
                            </span>
                        </div>
                        <div className="label mb-4">ENTERPRISE DOCUMENTATION ACCESS</div>
                        <h1 className="hero-h1 mb-5">
                            Request the AURIX™<br /><span className="gold-text">Technical Brief</span>
                        </h1>
                        <p className="section-subtitle max-w-lg">
                            Access structured documentation outlining platform architecture, predictive modelling logic and enterprise deployment framework.
                        </p>
                        <p className="small-text mt-4" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Lock size={13} /> Restricted to qualified enterprise enquiries.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-12">
                        <div className="label mb-4">DOCUMENT STRUCTURE</div>
                        <h2 className="section-h2">Document Structure</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-2">
                        {docStructure.map(d => (
                            <AnimatedItem key={d.code}>
                                <div className="glass-card brief__doc-row">
                                    <div className="mono-text brief__doc-code">{d.code} —</div>
                                    <div className="brief__doc-title"><FileText size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {d.title}</div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* QUALIFICATION FORM */}
            <section className="section section--primary">
                <div className="glow-overlay-blue" />
                <div className="container section-inner">
                    <AnimatedSection className="mb-12 text-center">
                        <div className="label mb-4">QUALIFICATION FORM</div>
                        <h2 className="section-h2 mb-3">Submit Qualification Details</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            All requests are reviewed prior to documentation release.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection>
                        <form ref={formRef} className="form-wrapper" onSubmit={handleSubmit} noValidate>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-name">Full Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input name="user_name" id="brief-name" className="form-input" required value={form.fullName} onChange={set('fullName')} placeholder="Your full name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-org">Organisation Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input name="organisation" id="brief-org" className="form-input" required value={form.org} onChange={set('org')} placeholder="Organisation name" />
                                </div>
                            </div>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-role">Role / Title <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input name="role" id="brief-role" className="form-input" required value={form.role} onChange={set('role')} placeholder="CTO / Director of Engineering" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-email">Business Email <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input name="user_email" id="brief-email" type="email" className="form-input" required value={form.email} onChange={set('email')} placeholder="name@organisation.com" />
                                </div>
                            </div>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-size">Organisation Size</label>
                                    <select name="org_size" id="brief-size" className="form-select" value={form.orgSize} onChange={set('orgSize')}>
                                        <option value="">Select size</option>
                                        <option>{'< 10 employees'}</option>
                                        <option>10–50</option>
                                        <option>50–250</option>
                                        <option>250+</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="brief-useCase">Intended Use Case</label>
                                    <select name="use_case" id="brief-useCase" className="form-select" value={form.useCase} onChange={set('useCase')}>
                                        <option value="">Select use case</option>
                                        <option>Infrastructure Optimisation</option>
                                        <option>Fintech Scaling</option>
                                        <option>Enterprise Modernisation</option>
                                        <option>Research Collaboration</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="brief-infra">Infrastructure Environment</label>
                                <textarea name="message" id="brief-infra" className="form-textarea" rows={4} value={form.infrastructure} onChange={set('infrastructure')} placeholder="Describe current cloud infrastructure, platform type or operational environment..." />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="brief-timeline">Estimated Timeline</label>
                                <select name="timeline" id="brief-timeline" className="form-select" value={form.timeline} onChange={set('timeline')}>
                                    <option value="">Select timeline</option>
                                    <option>Immediate</option>
                                    <option>3–6 months</option>
                                    <option>6–12 months</option>
                                    <option>Exploratory</option>
                                </select>
                            </div>

                            {status === 'error' && (
                                <div className="small-text mb-4" style={{ color: 'var(--error, #ef4444)' }}>
                                    There was a problem sending your request. Please try again later.
                                </div>
                            )}

                            <p className="small-text mb-8" style={{ color: 'var(--text-muted)' }}>
                                Submitted information is processed solely for enterprise engagement evaluation in accordance with our{' '}
                                <Link to="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link>.
                            </p>
                            <button type="submit" disabled={status === 'loading'} className="btn btn--gold w-full" style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '1rem' }}>
                                {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <>Submit Technical Brief Request <ArrowRight size={16} /></>}
                            </button>
                        </form>
                    </AnimatedSection>

                    <AnimatedSection className="mt-12">
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.5rem 2rem',
                            textAlign: 'center'
                        }}>
                            <p className="small-text" style={{ color: 'var(--text-muted)' }}>
                                Auromix operates a qualification-based documentation release model. Approved requests receive access within 1–2 business days.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
