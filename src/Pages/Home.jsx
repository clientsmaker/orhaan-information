import React from 'react'
import Homecard from '../Components/Card/Homecard'
import SectionCard2 from '../Components/Card/SectionCard2'
import ServiceCard from '../Components/Card/ServiceCard'

const Home = () => {
  return (
    <>
    <Homecard />
    <SectionCard2 />
    <h1 className='text-3xl font-bold text-black text-center lg:-mt-20'>Our Services</h1>
    <ServiceCard />
    </>
  )
}

export default Home