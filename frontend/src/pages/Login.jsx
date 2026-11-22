import { useState } from 'react'
import { ArrowRight, BookOpen, Eye, EyeOff, GraduationCap, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/primitives'
import { useSchool } from '../context/useSchool'

export default function Login() {
  const { isAuthenticated, signIn } = useSchool()
  const navigate = useNavigate()
  const [email, setEmail] = useState('alex.morgan@northstar.edu')
  const [password, setPassword] = useState('northstar2025')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  if (isAuthenticated) return <Navigate to="/app" replace />
  function submit(event) {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) { setError('Enter a valid school email and password.'); return }
    setError(''); signIn(); navigate('/app')
  }
  return <main className="login-page"><section className="login-story"><div className="login-story-inner"><a className="login-brand" href="/app"><span className="brand-mark"><BookOpen size={18} /></span><strong>northstar</strong></a><div className="story-copy"><span className="story-eyebrow"><Sparkles size={14} /> A BETTER WAY TO RUN SCHOOL</span><h1>Make room for<br /><em>what matters.</em></h1><p>One calm, connected place for the people and moments that move a school forward.</p><div className="story-quote"><div className="quote-stars">★★★★★</div><blockquote>“Northstar gives our team back the time and headspace to focus on our students.”</blockquote><div className="quote-author"><span className="quote-avatar">JM</span><span><strong>Jordan Mitchell</strong><small>Head of School, Brookfield</small></span></div></div></div><div className="story-bottom"><span><ShieldCheck size={15} /> Built for school communities</span><span>© Northstar 2025</span></div><div className="story-shape shape-a" /><div className="story-shape shape-b" /><div className="story-grid" /></div></section><section className="login-form-side"><div className="login-mobile-brand"><span className="brand-mark"><BookOpen size={18} /></span><strong>northstar</strong></div><div className="login-form-wrap"><span className="login-icon"><GraduationCap size={20} /></span><span className="section-kicker">WELCOME BACK</span><h2>Sign in to your school</h2><p className="login-subtitle">Your school community is right where you left it.</p><form onSubmit={submit} noValidate><label className="login-field">School email<div><Mail size={16} /><input type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} /></div></label><label className="login-field">Password<div><LockKeyhole size={16} /><input type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label><div className="login-options"><label><input type="checkbox" defaultChecked /> Keep me signed in</label><button type="button" className="forgot-link">Forgot password?</button></div>{error && <p className="login-error" role="alert">{error}</p>}<Button type="submit" className="login-submit">Sign in <ArrowRight size={16} /></Button></form><div className="login-divider"><span />or<span /></div><Button variant="secondary" className="sso-button" onClick={() => { signIn(); navigate('/app') }}>Continue with school SSO</Button><p className="login-help">Need access? <a href="mailto:help@northstar.edu">Contact your school administrator</a></p></div><div className="login-footer"><span>Privacy</span><span>Terms</span><span>Help center</span></div></section></main>
}