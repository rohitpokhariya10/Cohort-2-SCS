import React from 'react'

const Info = () => {
  return (
    <section className="w-full px-20 ">
      <div className="flex justify-between items-center text-center">

        {/* ITEM 1 */}
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-6xl font-medium">150+</h1>
          <h3 className="text-white/70 text-xl font-medium mt-2">
            Designers
          </h3>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-6xl font-medium">320+</h1>
          <h3 className="text-white/70 text-xl font-medium mt-2">
            Projects
          </h3>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-6xl font-medium">25+</h1>
          <h3 className="text-white/70 text-xl font-medium mt-2">
            Countries
          </h3>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-6xl font-medium">10+</h1>
          <h3 className="text-white/70 text-xl font-medium mt-2">
            Years Experience
          </h3>
        </div>

      </div>
    </section>
  )
}

export default Info
