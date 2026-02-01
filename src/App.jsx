import React from "react"

const App = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/food.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-extrabold mb-4">
          <span className="text-yellow-300">Yum</span>
          <span className="italic">zo</span>
        </h1>
        <p className="text-xl">
          Discover the best food & restaurants near you
        </p>
      </div>

    </section>
  )
}

export default App
