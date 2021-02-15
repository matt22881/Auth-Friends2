import React from 'react'
import Logout from './Logout'

const Nav = () => {
  return (
    <nav>
      {
       localStorage.token ?  <Logout /> : null
      }
    </nav>
  )
}
export default Nav 