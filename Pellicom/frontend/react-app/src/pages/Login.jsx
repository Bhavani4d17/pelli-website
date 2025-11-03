import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  async function submit(e){
    e.preventDefault()
    try{
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if(res.ok){
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        nav('/main')
      } else alert(data.message || 'Login failed')
    }catch(err){ console.error(err); alert('Server error') }
  }

  return (
    <div className="login-page" style={{padding:40}}>
      <div className="login-container">
        <h2>Welcome Back 💖</h2>
        <form onSubmit={submit}>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email ID" required />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
          <button className="btn primary" type="submit">Login</button>
        </form>
        <p className="switch-page"><Link to="/forgot">Forgot Password?</Link> | <Link to="/">Home</Link></p>
      </div>
    </div>
  )
}
