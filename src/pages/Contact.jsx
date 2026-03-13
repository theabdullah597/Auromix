import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '../utils/animations'
import './Platform.css'
import './Contact.css'

const pathways = [
    {
        title: 'Strategic Consultation',
        desc: 'For organisations evaluating predictive infrastructure transformation.',
        outcomes: ['Architectural discussion', 'Deployment qualification', 'Technical brief overview'],
        accent: 'gold'
    },
    {
        title: 'Research Collaboration',
        desc: 'For institutions or enterprises exploring structured systems research.',
        outcomes: ['Research briefing', 'Project AETHEON™ overview', 'Collaboration discussion'],
        accent: 'purple'
    },
    {
        title: 'Enterprise Deployment',
        desc: 'For organisations ready to evaluate AURIX™ platform implementation.',
        outcomes: ['Pilot qualification', 'Integration review', 'Deployment roadmap'],
        accent: 'teal'
    },
]

export default function Contact() {
    const formRef = useRef(null)
    const [form, setForm] = useState({
        fullName: '', organisation: '', role: '', email: '',
        orgType: '', engagementType: '', infrastructure: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error

    const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('loading')

        // EmailJS Configuration Keys
        const serviceID = 'service_nmbfwtv'
        const templateID = 'template_7c5b1r8'
        const publicKey = '-OD1OTeL9dsbhwg8r'

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                console.log('Success:', result.text)
                setStatus('success')
                window.scrollTo({ top: 0, behavior: 'smooth' })
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
                        <div className="label label--gold mb-4">STRATEGIC ENGAGEMENT</div>
                        <h1 className="hero-h1 mb-5">Engage With<br /><span className="gold-text">Auromix Engineering</span></h1>
                        <p className="section-subtitle max-w-lg mb-8">
                            Auromix engages with enterprise organisations exploring predictive infrastructure optimisation, autonomous governance frameworks and advanced SaaS deployment models.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ENGAGEMENT PATHWAYS */}
            <section className="section section--secondary">
                <div className="container section-inner">
                    <AnimatedSection className="mb-14">
                        <div className="label mb-4">PATHWAYS</div>
                        <h2 className="section-h2">Engagement Pathways</h2>
                    </AnimatedSection>
                    <AnimatedGroup className="grid-3">
                        {pathways.map(p => (
                            <AnimatedItem key={p.title}>
                                <div className="glass-card" style={{ height: '100%' }}>
                                    <div className={`card-accent-line card-accent-line--${p.accent}`} />
                                    <h3 className="card-h3 mb-2">{p.title}</h3>
                                    <p className="small-text mb-4">{p.desc}</p>
                                    <ul className="home__bullet-list">
                                        {p.outcomes.map(o => <li key={o} className="small-text">{o}</li>)}
                                    </ul>
                                </div>
                            </AnimatedItem>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* FORM */}
            <section className="section section--primary">
                <div className="glow-overlay-purple" />
                <div className="container section-inner">
                    <AnimatedSection className="mb-12 text-center">
                        <div className="label mb-4">ENQUIRY FORM</div>
                        <h2 className="section-h2 mb-3">Request Engagement</h2>
                        <p className="section-subtitle max-w-lg" style={{ margin: '0 auto' }}>
                            All enquiries are reviewed by the engineering team. Enterprise qualification may be required prior to consultation scheduling.
                        </p>
                    </AnimatedSection>

                    {status === 'success' ? (
                        <AnimatedSection className="text-center">
                            <div className="home__cta-box" style={{ maxWidth: 580, margin: '0 auto' }}>
                                <div className="label label--gold mb-4">RECEIVED</div>
                                <h2 className="section-h2 mb-4">Enquiry Received</h2>
                                <p className="section-subtitle">
                                    Your submission has been forwarded to the engineering team for review. We will be in touch within 1–2 business days.
                                </p>
                            </div>
                        </AnimatedSection>
                    ) : (
                        <AnimatedSection>
                            <form ref={formRef} className="form-wrapper" onSubmit={handleSubmit} noValidate>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-fullName">Full Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                                        <input name="user_name" id="contact-fullName" className="form-input" required value={form.fullName} onChange={set('fullName')} placeholder="Your full name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-org">Organisation <span style={{ color: 'var(--gold)' }}>*</span></label>
                                        <input name="organisation" id="contact-org" className="form-input" required value={form.organisation} onChange={set('organisation')} placeholder="Organisation name" />
                                    </div>
                                </div>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-role">Role / Title <span style={{ color: 'var(--gold)' }}>*</span></label>
                                        <input name="role" id="contact-role" className="form-input" required value={form.role} onChange={set('role')} placeholder="Your role" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-email">Business Email <span style={{ color: 'var(--gold)' }}>*</span></label>
                                        <input name="user_email" id="contact-email" type="email" className="form-input" required value={form.email} onChange={set('email')} placeholder="business@organisation.com" />
                                    </div>
                                </div>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-orgType">Organisation Type</label>
                                        <select name="org_type" id="contact-orgType" className="form-select" value={form.orgType} onChange={set('orgType')}>
                                            <option value="">Select type</option>
                                            <option>SaaS Platform</option>
                                            <option>Fintech</option>
                                            <option>Enterprise IT</option>
                                            <option>Research Institution</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-engType">Engagement Type</label>
                                        <select name="engagement_type" id="contact-engType" className="form-select" value={form.engagementType} onChange={set('engagementType')}>
                                            <option value="">Select type</option>
                                            <option>Strategic Consultation</option>
                                            <option>Research Collaboration</option>
                                            <option>Enterprise Deployment</option>
                                            <option>Technical Brief Request</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-infrastructure">Brief Description of Infrastructure Environment</label>
                                    <textarea name="message" id="contact-infrastructure" className="form-textarea" rows={4} value={form.infrastructure} onChange={set('infrastructure')} placeholder="Describe your current cloud infrastructure, platform type or operational environment..." />
                                </div>

                                {status === 'error' && (
                                    <div className="small-text mb-4" style={{ color: 'var(--error, #ef4444)' }}>
                                        There was a problem sending your message. Please try again or email us directly.
                                    </div>
                                )}

                                <p className="small-text mb-8" style={{ color: 'var(--text-muted)' }}>
                                    Submitted information is processed solely for enterprise engagement evaluation in accordance with our{' '}
                                    <Link to="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link>.
                                </p>
                                <button type="submit" disabled={status === 'loading'} className="btn btn--gold w-full" style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '1rem' }}>
                                    {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <>Submit Strategic Enquiry <ArrowRight size={16} /></>}
                                </button>
                            </form>
                        </AnimatedSection>
                    )}

                    {/* Contact details */}
                    <AnimatedSection>
                        <div className="contact__details-strip">
                            <div className="contact__detail">
                                <Mail size={18} className="contact__detail-icon" />
                                <div>
                                    <div className="contact__detail-label">Email</div>
                                    <a href="mailto:enquiries@auromix.co.uk" className="contact__detail-value">enquiries@auromix.co.uk</a>
                                </div>
                            </div>
                            <div className="contact__divider" />
                            <div className="contact__detail">
                                <MapPin size={18} className="contact__detail-icon" />
                                <div>
                                    <div className="contact__detail-label">Location</div>
                                    <div className="contact__detail-value" style={{ maxWidth: 200, lineHeight: 1.4 }}>
                                        5 South Charlotte Street,<br />Edinburgh,<br />United Kingdom, EH2 4AN
                                    </div>
                                </div>
                            </div>
                            <div className="contact__divider" />
                            <div className="contact__sub-text">
                                <span className="mono-text" style={{ fontSize: '0.75rem' }}>Structured enterprise engagement only.</span>
                            </div>
                        </div>

                        {/* Embedded Google Map */}
                        <div className="contact__map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.951016629988!2d-3.2081708840616946!3d55.95013068060851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7a31eb270ad%3A0xe543cd9f52f36f86!2s5%20S%20Charlotte%20St%2C%20Edinburgh%20EH2%204AN!5e0!3m2!1sen!2suk!4v1709665245842!5m2!1sen!2suk"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Auromix Office Location"
                            ></iframe>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CLOSING STATEMENT */}
            <section className="section section--secondary">
                <div className="container section-inner--sm">
                    <AnimatedSection className="text-center">
                        <p className="section-subtitle max-w-xl" style={{ margin: '0 auto', fontStyle: 'italic' }}>
                            Auromix operates on a qualification-based engagement model to ensure structured and technically aligned collaboration.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
