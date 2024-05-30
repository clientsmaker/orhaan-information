import React from 'react'

const ServiceCard = () => {
    const services = [
        {
          title: "Web Design",
          description:
            "Orhaan Information Technology is committed to delivering captivating, functional, and user-friendly web design solutions that elevate our clients' online presence..",
        //   backgroundImage: itconsultency,
        },
        {
          title: "SEO",
          description:
            "At Orhaan Information Technology, we are dedicated to helping businesses thrive in the digital age by providing expert SEO solutions that optimize their online presence and drive measurable results.",
        //   backgroundImage: itsupport,
        },
        {
          title: "Marketing Via Social MediaMarketing",
          description:
            "Marketing Via Social MediaMarketing via social media offers an effective way to reach and engage with your target audience, build brand awareness, and drive traffic to your products or services.",
        //   backgroundImage: securitysolution,
        },
        {
          title: "PBX ConfigurationAt ",
          description:
            " Orhaan Information Technology, we are dedicated to revolutionizing communication for businesses through our expert PBX configuration services",
        //   backgroundImage: pos,
        },
        {
          title: "IVR Creation & SetupAt",
          description:
            " Orhaan Information Technology, our mission is to empower businesses with seamless and intuitive IVR solutions that revolutionize customer interactions.",
        //   backgroundImage: networkinfrastructure,
        },
        {
          title: "CCTV Camera Setup & Configuration",
          description:
            "  Orhaan Information Technology, our mission is to enhance safety and security through expert CCTV camera setup and configuration services",
        //   backgroundImage: itamc,
        },
      ];
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    {services.map((service, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-md  hover:text-white transition-all duration-300 relative overflow-hidden"
         
        >
          <div className="bg-gray-300  p-6 rounded-lg h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-black">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard