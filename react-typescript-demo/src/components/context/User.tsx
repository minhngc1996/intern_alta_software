import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
const User = () => {
    const userContext  = useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name:'Minh Nguyễn',
                email: 'minhnguyen@example.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email {userContext?.user?.email}</div>    
    </div>
  )
}

export default User
