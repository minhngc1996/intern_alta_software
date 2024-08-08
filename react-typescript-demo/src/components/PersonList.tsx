import React from 'react'
import { PersonProps } from './Person.type'
type ListPerson = {
    listPerson: PersonProps[]
}
const PersonList = (props: ListPerson) => {
  return (
    <div>
      {
        props.listPerson.map((user,index) => {
            return (
                <h2 key={index}>{user.firstName} {user.lastName}</h2>
            )
        })
      }
    </div>
  )
}

export default PersonList
