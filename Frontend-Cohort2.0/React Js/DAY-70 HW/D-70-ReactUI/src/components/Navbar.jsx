const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-[80px] w-full z-50  px-10 py-4 flex justify-between items-center">
      <h3 className="text-white font-semibold text-2xl">DIVSY</h3>

      <div className="flex gap-6 items-center">
        <button className="bg-white/5 text-white/70 px-4 py-1.5 rounded-md">Designers</button>
        <button className="bg-white/5 text-white/70 px-4 py-1.5 rounded-md">Collaborate</button>
        <button className="bg-white/5 text-white/70 px-4 py-1.5 rounded-md">Events</button>
        <button className="bg-white/5 text-white/70 px-4 py-1.5 rounded-md">Blog</button>
        <button className="bg-white/5 text-white/70 px-4 py-1.5 rounded-md">Club</button>

        <button className="bg-[#E85C3A] text-white px-5 py-2 rounded-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;
