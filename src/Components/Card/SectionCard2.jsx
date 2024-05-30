import React from "react";

// import { useInView } from "react-intersection-observer";
// import section from "../../assets/boy1.png";
import section from "../../assets/abt.avif";

const SectionCard2 = () => {
  //   const { ref, inView } = useInView({
  //     triggerOnce: true,
  //     threshold: 0.5,
  //   });

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16 h-3/4">
            <img
              alt=""
              src={section}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="relative  items-center lg:ml-8 ">
            <p className="text-black font-medium">
              Hey, <br />
              At Orhaan Information Technology, our vision is to lead the way in
              harnessing cutting-edge technology to empower businesses and
              individuals worldwide. We envision a future where innovative
              solutions drive unprecedented efficiency, connectivity, and
              growth, revolutionizing industries and enriching lives. With a
              relentless commitment to excellence, integrity, and
              sustainability, we strive to be the foremost provider of
              transformative technology solutions, shaping a brighter tomorrow
              for generations to come
            </p>
            <p className="text-black font-medium">
              Orhaan Information Technology is dedicated to delivering
              exceptional technological solutions tailored to the unique needs
              of businesses and individuals. Our mission is to leverage our
              expertise in cutting-edge software development, cybersecurity, and
              digital innovation to empower our clients to thrive in an
              ever-evolving digital landscape. Through collaboration,
              creativity, and a commitment to excellence, we aim to exceed
              expectations, drive growth, and create lasting value for our
              stakeholders while contributing positively to society and the
              environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
