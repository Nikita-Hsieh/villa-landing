import villaImage from "./assets/villa.jpg"
import profileImg1 from "./assets/profile-1.jpg"
import profileImg2 from "./assets/profile-2.jpg"

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative py-5 px-10">
      <img
        src={villaImage}
        alt="Background Image"
        className="h-full w-full object-center object-cover absolute inset-0 z-0"
      />
      <div className="h-full w-full bg-transparent z-10 relative rounded-2xl border-[20px] border-white flex">
        {/* main content */}
        <div className="w-1/2 h-full flex flex-col bg-white px-5 py-5 pr-10 overflow-hidden">
          <div className="flex w-full">
            <div className="tracking-tight text-6xl font-[500] w-fit flex flex-col mr-2">
              <h2 className="h-18 items-center flex overflow-hidden">
                <span>Reserver Your</span>
              </h2>
              <h2 className="h-18 items-center flex overflow-hidden">
                <span>Ideal Villa</span>
              </h2>
            </div>

            <div className="w-[80px] h-[80px] flex flex-wrap gap-1">
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
            </div>
          </div>

          <div className="flex mt-5 mb-5 items-center w-full gap-5">
            <p className="text-nowrap text-sm font-bold">Let't go explore!</p>
            <div className="h-[1px] w-full bg-black/10"></div>
          </div>

          <div className="flex w-full gap-6">
            <span className="text-sm font-black">01</span>
            <p className="leading-[1.3] text-sm">
              Escape to a world of luxury and tranquility. Our exclusive villas
              offer breathtaking views, private pools, and top-tier amenities to
              make your stay unforgettable.
            </p>
            <button className="w-96 h-10 rounded-full flex items-center justify-center text-white bg-black font-light text-sm">
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
            </button>
          </div>

          {/* 3 States Num */}
          <div className="flex flex-wrap w-full my-5 items-center justify-center md:justify-between gap-6">
            {[
              { value: "115k+", label: "Capital Raised" },
              { value: "65k+", label: "Happy Customers" },
              { value: "85k+", label: "Property Options" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center md:items-start gap-1"
              >
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-sm text-black/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* side content */}
        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  )
}

export default App
