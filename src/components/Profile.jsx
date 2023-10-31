import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const Profile = () => {
    const { userId } = useParams()
    console.log(userId)
    
  return (
    <div>
        <h1>
            Profile id is: {userId}
        </h1>
    </div>
  )
}

export default Profile