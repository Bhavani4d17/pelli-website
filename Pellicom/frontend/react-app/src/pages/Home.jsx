import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home(){
  const nav = useNavigate()
  return (
    <div>
      <header className="navbar">
        <div className="logo">Pelli<span className="gold">.com</span></div>
        <nav className="nav-actions">
          <Link to="/about" className="nav-link">About</Link>
          <button className="nav-btn" onClick={() => nav('/login')}>Login</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-inner">
            <h1>Find Your Perfect Match 💖</h1>
            <p className="subtitle">Telugu Matrimony Platform made with trust, love, and connections.</p>
            <div className="hero-ctas">
              <button className="primary-cta" onClick={() => nav('/signup')}>Start Your Journey</button>
            </div>
          </div>
        </section>

        <section className="features">
          <article className="feature"><h3>💌 Sign Up</h3><p>Create your profile in just a few steps</p></article>
          <article className="feature"><h3>💞 Connect</h3><p>Find matches that truly align with your heart</p></article>
          <article className="feature"><h3>💬 Interact</h3><p>Chat, express, and take the next step in your journey</p></article>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Pelli.com | Reserved by Mani</p>
      </footer>
    </div>
  )
}
