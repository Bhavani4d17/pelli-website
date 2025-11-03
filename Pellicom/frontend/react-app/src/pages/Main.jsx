import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main(){
  const nav = useNavigate()
  const [users, setUsers] = useState([])
  const [me, setMe] = useState(null)

  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('user') || 'null')
    if(!u) return nav('/')
    setMe(u)
    async function load(){
      try{
        const res = await fetch('http://localhost:5000/api/auth/users')
        const json = await res.json()
        const list = (json.users || []).filter(x => x.email !== u.email)
        setUsers(list)
      }catch(err){ console.error(err) }
    }
    load()
  },[])

  function logout(){
    localStorage.removeItem('user'); localStorage.removeItem('token'); nav('/')
  }

  return (
    <div>
      <header className="navbar">
        <div className="logo">Pelli<span className="gold">.com</span></div>
        <nav className="nav-actions">
          <button className="nav-btn" onClick={()=>nav('/about')}>About</button>
          <button id="logoutBtn" className="nav-btn" onClick={logout}>Logout</button>
        </nav>
      </header>

      <main style={{padding:'120px 40px'}}>
        <section id="welcome" className="welcome">
          {me && (
            <div style={{display:'flex',gap:16,alignItems:'center'}}>
              <img src={me.profileImage ? `http://localhost:5000/${me.profileImage.replace(/^\//,'')}` : 'https://via.placeholder.com/90'} style={{width:90,height:90,borderRadius:90,objectFit:'cover'}}/>
              <div>
                <h2 style={{margin:0}}>{me.firstName}</h2>
                <div style={{color:'#666'}}>{me.email}</div>
              </div>
            </div>
          )}
        </section>

        <section className="cards-grid" style={{marginTop:40}}>
          {users.map(u=>{
            const age = u.dob ? Math.floor((Date.now()-new Date(u.dob).getTime())/(1000*60*60*24*365)) + ' yrs' : ''
            const phone = u.phone || ''
            const phoneHref = phone ? `https://wa.me/${phone.replace(/[^0-9]/g,'')}` : '#'
            let image = u.profileImage || 'uploads/default.jpg'
            if(!image.startsWith('/')) image = '/' + image
            return (
              <div key={u._id||u.email} className="card">
                <img src={`http://localhost:5000${image}`} className="profile-img" alt={u.firstName} />
                <div className="card-body">
                  <h3>{u.firstName} {u.lastName||''}</h3>
                  <p>{age}</p>
                  <p>{u.education||''}</p>
                  <p>{u.religion||''}</p>
                  <p>{u.city||''}, {u.livingIn||''}</p>
                  {phone && <a className="wa" href={phoneHref} target="_blank" rel="noreferrer">💬 Chat</a>}
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </div>
  )
}
