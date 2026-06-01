
//Yahan p ek poora object hai,
const Card = (p) => {
  console.log(p);
  
  return (
    <div className="w-[350px] h-[470px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">

      {/* IMAGE SECTION */}
      <div className="relative flex justify-center bg-blue-100 w-full">
        <div className="w-[90%] h-[160px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl mt-4"></div>

        <img

          src={p.users.profileImage}
          alt={p.users.name}
          className="w-[120px] h-[120px] rounded-full object-cover absolute top-[100px] border-4 border-white"
        />
      </div>



    </div>
  );
};

export default Card;
