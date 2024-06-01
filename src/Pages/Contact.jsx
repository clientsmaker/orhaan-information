import React from 'react'
import ContactCard from '../Components/Card/ContactCard'
import WhatsappButton from '../Components/WhatsappButton'

const Contact = () => {
  return (
    <>
    <div
      className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundColor: "#c6b069" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-2xl text-center text-white ">
        <h3 className="text-4xl text-black font-bold mb-4">Contact</h3>
        <p className="text-lg">
        Our friendly team is always here to chat.
        </p>
      </div>
    </div>
    <ContactCard />
    <WhatsappButton />
    </>
  )
}

export default Contact