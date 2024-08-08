import React from 'react'
type OscarProp = {
    children: React.ReactNode
}
const Oscar = (props: OscarProp) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar
