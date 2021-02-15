import React from 'react'
export default function Logout(props) {
  
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
  
  return (
    <button onClick={handleClick}>
      LogOut
    </button>
  )
}
