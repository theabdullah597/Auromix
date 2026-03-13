import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../utils/animations'
import './Platform.css'

export default function ThankyouPage() {
    return (
        <div>
            <section className="page-hero section--primary" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="glow-overlay-gold" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                <div className="container">
                    <AnimatedSection className="text-center">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(245,192,70,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle size={34} style={{ color: 'var(--gold)' }} />
                            </div>
                        </div>
                        <div className="label label--gold mb-5">SUBMISSION CONFIRMED</div>
                        <h1 className="hero-h1 mb-5">Technical Brief Request<br /><span className="gold-text">Received</span></h1>
                        <p className="section-subtitle max-w-lg" style={{ margin: '0 auto 2rem' }}>
                            Your submission has been forwarded to the engineering team for review. Approved requests will receive structured documentation via secure delivery within 1–2 business days.
                        </p>
                        <p className="mono-text mb-10" style={{ fontSize: '0.78rem' }}>
                            AURIX™ Technical Brief · Enterprise Distribution
                        </p>
                        <div className="btn-row" style={{ justifyContent: 'center' }}>
                            <Link to="/aurix" className="btn btn--gold">
                                Explore AURIX™ Platform <ArrowRight size={16} />
                            </Link>
                            <Link to="/" className="btn btn--outline-white">
                                Return Home
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
