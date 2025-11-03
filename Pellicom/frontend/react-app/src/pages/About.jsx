import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div style={{padding:40}}>
      <header style={{textAlign:'center', marginBottom:40}}>
        <h1 style={{fontSize:32, fontWeight:600, color:'#c59d5f'}}>About <span style={{color:'#c59d5f'}}>Pelli.com</span></h1>
        <p>Connecting hearts, celebrating traditions, and helping you find your perfect life partner.</p>
      </header>

      <section>
        <h2 style={{color:'#444'}}>Our Story</h2>
        <p style={{maxWidth:800, textAlign:'justify'}}>Pelli.com was built with one simple idea — to make finding your life partner an effortless, meaningful, and secure experience. Inspired by Indian values, family traditions, and the modern need for trust-based matchmaking, Pelli.com bridges the gap between technology and tradition.</p>
      </section>

      <section>
        <h2 style={{color:'#444'}}>What We Offer</h2>
        <p style={{maxWidth:800, textAlign:'justify'}}>We provide a trusted platform where individuals and families can connect, share profiles, and explore compatible matches. Every profile is created thoughtfully — with details like education, background, culture, and lifestyle — helping users make genuine connections beyond photos.</p>
      </section>

      <div style={{textAlign:'center', marginTop:24}}>
        <Link to="/">⬅ Back</Link>
      </div>
    </div>
  )
}
