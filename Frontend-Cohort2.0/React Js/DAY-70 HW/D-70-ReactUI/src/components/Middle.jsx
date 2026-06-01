import React from 'react'

const Middle = () => {
  return (
    <section className="w-full flex items-center min-h-[500px] px-16 gap-12">

      {/* LEFT CONTENT */}
      <div className="w-1/2 flex flex-col justify-center gap-6 bg-white/10 backdrop-blur-md  h-[400px] p-[20px] rounded-md">
        <h3 className="text-xl tracking-widest text-gray-100 font-bold font-thin">
          ABOUT
        </h3>

        <h1 className="text-4xl font-semibold text-white leading-tight max-w-[450px]">
          WHERE FASHION MEETS FREEDOM
        </h1>

        <div className="flex gap-8 text-gray-300 text-sm leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum obcaecati iure unde nihil nobis veniam accusamus.
          </p>

          <p>
            Placeat reiciendis aliquid, minima distinctio voluptatem
            laborum assumenda quisquam incidunt fugit enim.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 h-[400px] overflow-hidden rounded-lg">
        <img
          src="https://i.pinimg.com/1200x/3e/bf/5a/3ebf5ae35cb776ee24ddd8af2ea005d1.jpg"
          alt="fashion"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  )
}

export default Middle
