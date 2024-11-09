import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params=useParams()
  return (
    <>
      i am user {params.username}
    </>
  
  )
}

export default User