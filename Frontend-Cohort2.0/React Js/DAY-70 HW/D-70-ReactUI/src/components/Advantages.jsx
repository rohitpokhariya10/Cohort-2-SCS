const Advantages = () => {
  return (
    <section className="text-white py-16 px-6 md:px-10 flex flex-col gap-12 ">
      <h2 className="text-3xl font-semibold">OUR ADVANTAGES</h2>

      {/* Row 1 - Image Left */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Left Image */}
        <img
          src="https://i.pinimg.com/736x/3b/33/1f/3b331f6951a51b7573f9e8ac8b5c2bc9.jpg"
          alt="runway models"
         className="rounded-lg object-cover object-center h-[370px] w-full md:w-1/2"

        />

        {/* Right Cards */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
          {/* Card 1 */}
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-semibold text-lg mb-2">INDEPENDENT DESIGNERS</h3>
              <p className="text-sm text-gray-400">
                Our platform celebrates the creativity of independent designers, offering unique, boundary-pushing fashion you won't find anywhere else.
              </p>
            </div>
            <div className="flex justify-start mt-4">
              <button className="w-9 h-9 rounded-full bg-white/10 text-white text-sm flex items-center justify-center hover:bg-white hover:text-black transition">
                →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-semibold text-lg mb-2">EXCLUSIVE UNIQUITY</h3>
              <p className="text-sm text-gray-400">
                We bring you curated, one-of-a-kind pieces made with vision and individuality. Experience designs that stand apart from the crowd.
              </p>
            </div>
            <div className="flex justify-start mt-4">
              <button className="w-9 h-9 rounded-full bg-white/10 text-white text-sm flex items-center justify-center hover:bg-white hover:text-black transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Image Right */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Left Cards */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
          {/* Card 3 */}
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-semibold text-lg mb-2">HIGH QUALITY</h3>
              <p className="text-sm text-gray-400">
                Each piece is crafted with exceptional attention to detail, ensuring premium quality that lasts — from fabric to finish.
              </p>
            </div>
            <div className="flex justify-start mt-4">
              <button className="w-9 h-9 rounded-full bg-white/10 text-white text-sm flex items-center justify-center hover:bg-white hover:text-black transition">
                →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="font-semibold text-lg mb-2">ECO-FRIENDLY FASHION</h3>
              <p className="text-sm text-gray-400">
                We’re committed to sustainability through ethical sourcing, biodegradable fabrics, and low-waste production practices.
              </p>
            </div>
            <div className="flex justify-start mt-4">
              <button className="w-9 h-9 rounded-full bg-white/10 text-white text-sm flex items-center justify-center hover:bg-white hover:text-black transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <img
          src="https://i.pinimg.com/736x/52/37/87/523787af6d2173dffaa8848c43fad5be.jpg"
          alt="atelier mannequins"
          className="rounded-lg object-cover h-[370px] w-full md:w-1/2"
        />
      </div>
    </section>
  );
};

export default Advantages;
