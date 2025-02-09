import villaImage from "./assets/villa.jpg"

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
        <div className="w-1/2 h-full flex flex-col"></div>
        {/* side content */}
        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  )
}

export default App
