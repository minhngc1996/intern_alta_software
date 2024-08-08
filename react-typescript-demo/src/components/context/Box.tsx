import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Box = () => {
    //Sử dụng useContext để truy cập vào giá trị theme từ context:
    const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
      Theme Context
    </div>
  )
}

export default Box
