import React from "react"

import villaImage from "./assets/villa.jpg"
import profileImg1 from "./assets/profile-1.jpg"
import profileImg2 from "./assets/profile-2.jpg"
import propertyImg from "./assets/property1.jpg"
import locationImg from "./assets/locationImg.webp"
import { delay, easeOut, motion } from "framer-motion"

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative py-5 px-10">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src={villaImage}
        alt="Background Image"
        className="h-full w-full object-center object-cover absolute inset-0 z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="h-full w-full bg-transparent z-10 relative rounded-2xl border-[20px] border-white flex"
      >
        {/* main content */}
        <div className="w-1/2 h-full flex flex-col bg-white px-5 py-5 pr-10 overflow-hidden">
          <div className="flex w-full">
            <div className="tracking-tight text-6xl font-[500] w-fit flex flex-col mr-2">
              <h2 className="h-18 items-center flex overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  Reserver Your
                </motion.span>
              </h2>
              <h2 className="h-18 items-center flex overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  Ideal Villa
                </motion.span>
              </h2>
            </div>

            {/* Small Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-[80px] h-[80px] flex flex-wrap gap-1"
            >
              <div className="h-14 w-14 rounded-full">
                <img
                  src={profileImg1}
                  alt="Profile Img"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-9 w-9 rounded-full">
                <img
                  src={profileImg2}
                  alt="Profile Img"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-7 w-7 rounded-full">
                <img
                  src={profileImg1}
                  alt="Profile Img"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex mt-5 mb-5 items-center w-full gap-5">
            <p className="text-nowrap text-sm font-bold">Let't go explore!</p>
            <div className="h-[1px] w-full bg-black/10"></div>
          </div>

          <div className="flex w-full gap-6">
            <span className="text-sm font-black">01</span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="leading-[1.3] text-sm"
            >
              Escape to a world of luxury and tranquility. Our exclusive villas
              offer breathtaking views, private pools, and top-tier amenities to
              make your stay unforgettable.
            </motion.p>
            <motion.button className="w-96 h-10 rounded-full flex items-center justify-center text-white bg-black font-light text-sm">
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-up-right"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </motion.button>
          </div>

          {/* 3 States Num */}
          <div className="flex  w-full my-5 items-center  justify-between">
            {[
              { value: "115k+", label: "Capital Raised", delay: 1 },
              { value: "65k+", label: "Happy Customers", delay: 1.2 },
              { value: "85k+", label: "Property Options", delay: 1.4 },
            ].map((stat, index, arr) => (
              <React.Fragment key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="flex gap-0 flex-col"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-sm text-black/80">{stat.label}</span>
                </motion.div>

                {index < arr.length - 1 && (
                  <div className="h-7 w-[2px] bg-black/20" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="w-[90%] min-h-64 max-h-[50%] mx-auto mt-auto rounded-3xl overflow-hidden">
            <img
              src={propertyImg}
              alt="property image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* side content */}
        <div className="w-1/2 h-full relative flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0 "
          >
            <div className="text-sm z-10 relative bg-white w-56 font-medium leading-[1.2] border-[10px] border-white rounded-2xl mt-5 ms-5 flex flex-row gap-3">
              <div>
                <p>Cupertino, CA</p>
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black text-white mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-up-right"
                  >
                    <path d="M13 5H19V11" />
                    <path d="M19 5L5 19" />
                  </svg>
                </div>
              </div>
              <img
                src={locationImg}
                alt="location image"
                className="w-24 h-20 object-cover rounded-2xl"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-30 left-0 text-white/70 text-sm px-5 leading-relaxed z-10 w-1/2"
            >
              Whether nestled in a tropical paradise, perched on a scenic
              hillside, or located by the ocean, each villa is a sanctuary
              designed for those who appreciate the finer things in life.
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-5 left-0 z-10 bg-amber-400 text-black my-5 ms-5 px-10 h-10 rounded-full items-center flex justify-center font-medium text-sm w-fit"
            >
              Get Villa Today!
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default App
