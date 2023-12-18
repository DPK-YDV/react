import React from 'react'
import { useParams } from 'react-router-dom'

function MyParams() {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-800 text-white text-3xl text-center my-5 py-5'>User : {userid}</div>
  )
}

export default MyParams