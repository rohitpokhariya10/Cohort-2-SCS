const Hero = () => {
    return (
        <section className="hero-container mt-[100px] relative w-full min-h-[90vh] overflow-hidden px-4">

            {/* IMAGE */}
            <img
                src="https://images.unsplash.com/photo-1681554437813-efc656499bc6?q=80&w=1170&auto=format&fit=crop"
                alt="hero"
                className="hero absolute inset-0 w-full max-w-[96%] mx-auto h-[650px] object-cover ml-[20px] rounded-md"
            />


            {/* TEXT CONTENT */}
            <div className="relative z-10 px-20 pt-48 text-white">
                <h1 className="text-[150px] leading-none font-extralight tracking-tight">
                    Design
                </h1>

                <h1 className="text-[140px] leading-none font-extralight ml-32">
                    & Freedom
                </h1>

                <p className="mt-10 ml-32 max-w-xl text-white/100 text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque debitis optio nisi aliquid quisquam similique impedit.
                </p>
            </div>

            {/* CTA BUTTON */}
            <button className="absolute bottom-30 right-50 w-14 h-14 rounded-full 
        bg-white/20 backdrop-blur-md text-white text-xl 
        flex items-center justify-center 
        hover:bg-white hover:text-black transition-all duration-300">
                →
            </button>

        </section>
    );
};

export default Hero;
