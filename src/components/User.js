import React from 'react'

const user = ({name, id, password}) => {
  return (
    <ul>
        <li>
            <p>{name}</p>
            <h3>{id}</h3>
            <p>{password}</p>
        </li>
    </ul>
  )
}

export default user