import React, { useState } from 'react'
type AuthUser = {
    name: string
    email: string
}
const User = () => {
    const [user, setUser] = useState< AuthUser | null >(null)
    const handleLogin = () => {
        setUser({
            name:'Nguyễn Công Minh',
            email:'minhnguyen@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }


  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {
        user !== null ? 
        <div>
            <div>Username is {user.name}  </div>
            <div>Email is {user.email}  </div>  
        </div>
        :
        <p>User chưa login</p>
      }
    </div>
  )
}

export default User
