import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup(){
  const nav = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)

  async function submit(e){
    e.preventDefault()
    if(password.length < 6) return alert('Password min 6 chars')
    try{
      const fd = new FormData()
      fd.append('firstName', firstName)
      fd.append('lastName', lastName)
      fd.append('email', email)
      fd.append('phone', phone)
      fd.append('password', password)
      if(file) fd.append('profileImage', file)

      const res = await fetch('http://localhost:5000/api/auth/register', { method:'POST', body: fd })
      const data = await res.json()
      if(res.ok){
        localStorage.setItem('user', JSON.stringify(data.user))
        nav('/main')
      } else alert(data.message || 'Signup failed')
    }catch(err){ console.error(err); alert('Server error') }
  }

  return (
    <div style={{padding:40}}>
      <div className="signup-container">
        <h2>Create Your Profile 💞</h2>
        <form onSubmit={submit} encType="multipart/form-data">
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder="First name" required />
          <input value={lastName} onChange={e=>setLastName(e.target.value)} placeholder="Last name" required />
          <input type="date" />
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" required />
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" required />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required />
          <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
          <button type="submit" className="submit-btn btn primary">Sign Up ✅</button>
        </form>
        <p className="switch-page">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
