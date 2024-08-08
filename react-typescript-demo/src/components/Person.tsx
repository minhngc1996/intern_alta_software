import React from 'react'
import { ListPerson, PersonProps } from './Person.type'
const Person = (props: ListPerson) => {
  return <div>
    {
      props.name.firstName
    }
    {
      props.name.lastName
    }
  </div>
}

export default Person
