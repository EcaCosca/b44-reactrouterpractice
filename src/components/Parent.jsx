import React from 'react'
import { Link } from 'react-router-dom';

const Parent = () => {
  return (
    <div>
        <h1>
            Parent
        </h1>
        <Link to="child">Go to Child Component</Link>
    </div>
  )
}

export default Parent