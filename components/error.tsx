import React from 'react'

interface message {
    error:string
}

function Error({error}:message) {
  return (
    <div className='p-4 pt-4 rounded-sm text-white bg-red-500 bg-opacity-70'>{error}</div>
  )
}

export default Error