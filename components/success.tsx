import React from 'react'

interface message {
    success:string
}

function Success({success}:message) {
  return (
    <div className='p-4 pt-4 rounded-sm text-white bg-emerald-500 bg-opacity-80'>{success}</div>
  )
}

export default Success