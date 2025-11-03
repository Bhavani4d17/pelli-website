import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Forgot(){
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPass, setNewPass] = useState('')

  async function sendOtp(){
    if(!email) return alert('Enter email')
    try{
      const res = await fetch('http://localhost:5000/api/auth/forgot-password', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email}) })
      const data = await res.json()
      if(res.ok){ alert('OTP sent'); setStep(2) } else alert(data.message||'Error')
    }catch(err){ console.error(err); alert('Server error') }
  }

  async function reset(){
    if(!otp || !newPass) return alert('Fill all')
    try{
      const res = await fetch('http://localhost:5000/api/auth/reset-password', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, otp, newPassword: newPass }) })
      const data = await res.json()
      if(res.ok){ alert('Password reset. Please login.'); window.location.href='/login' } else alert(data.message||'Error')
    }catch(err){ console.error(err); alert('Server error') }
  }

  return (
    <div style={{display:'flex',justifyContent:'center',padding:40}}>
      <div style={{width:360,background:'#fff',padding:28,borderRadius:12}}>
        {step===1 && (
          <div>
            <h2>Forgot Password</h2>
            <p>Enter your registered email to receive an OTP.</p>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <button className="btn primary" onClick={sendOtp}>Send OTP</button>
          </div>
        )}
        {step===2 && (
          <div>
            <h2>Enter OTP</h2>
            <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="OTP" />
            <input value={newPass} onChange={e=>setNewPass(e.target.value)} type="password" placeholder="New password" />
            <button className="btn primary" onClick={reset}>Reset Password</button>
          </div>
        )}
        <p style={{marginTop:12}}><Link to="/">← Back to home</Link></p>
      </div>
    </div>
  )
}
