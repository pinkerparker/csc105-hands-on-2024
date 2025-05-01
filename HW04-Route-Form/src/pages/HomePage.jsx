import React from 'react'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar/>
        <h1 className='font-bold my-10'>Welcome to the Home Page.</h1>
        
    </div>
  )
}

export default HomePage
