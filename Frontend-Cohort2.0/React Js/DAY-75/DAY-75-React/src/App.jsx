import React, { useState } from 'react'


const App = (e) => {
  const [userName, setUserName] = useState("")
  const [userRole, setUserRole] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [userDesc, setUserDesc] = useState("")


  //step-->1 localStorage me data hai tuh lao nhi tuh empty array do
  let localData = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : []

  //array banaya React state ki help se taki dyanically ui me changes reflect ho paye
  //step-->2 useState me bh initial me ye data save karke rkho taki referesh me bhi dala na jaye
  //purpose--> jo data localStorage me save hoga vo ui me dikhta rhe
  const [allUsers, setAllUsers] = useState(localData)
  console.log(localData);
  


  const submitHandler = (e) => {
    console.log(allUsers);
    
    //form ka default behaviour stop hojata hai (jese form submit hone par page reload na ho)
    e.preventDefault()
    // console.log(userName,imageUrl,userDesc,userRole);

    //form submit hone ke baad  input fields clear hojaye
    setUserName("")
    setImageUrl("")
    setUserDesc("")
    setUserRole("")

    //syntax-->const updatedArray = [...oldArray, newItem];
    //newItem  --> kuch bhi ho skta hai objext,string,array,number etc
    const updateUsers = [...allUsers ,{ userName, userRole, userDesc, imageUrl }]
    console.log(updateUsers);
    //react ko btara hai ui update rerender karo changes hue hai
    setAllUsers(updateUsers)
    
    //step->3 
    localStorage.setItem("userDetails", JSON.stringify(updateUsers))
    


  }
  //Red Remove button in Card
  const deleteHandler = (idx) => {
    // console.log("element deleted");

    //phele state ki copy bnaye
    const copyallUsers = [...allUsers]
    copyallUsers.splice(idx, 1)
    setAllUsers(copyallUsers)
    //step-->4
    localStorage.setItem("userDetails",JSON.stringify(copyallUsers))


  }
  return (
    <div className='bg-black h-screen text-amber-50 '>
      <form onSubmit={(e) => {
        //submitHandler function call
        submitHandler(e)
      }} className='  px-2 py-2 flex flex-wrap   p-2'>
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          type="text"
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          placeholder='Enter your name' />

        <input
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
          type="text"
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          placeholder='Image URL' />

        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value)
          }}
          type="text"
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          placeholder='Enter Description' />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          type="text"
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          placeholder='Enter your Role' />

        <button className='active:scale-95 text-xl  px-5 py-2 bg-emerald-600 rounded w-[15%] m-4'>Create User</button>
      </form>

      <div className=' px-4 py-10 flex flex-wrap  gap-[10px] pl-[15px]'>
        {
          allUsers.map(function (elem, idx) {
            console.log(elem, idx);

            return <div key={idx} className='w-[24vw] rounded-xl py-5 px-8 flex flex-col items-center  text-center  bg-amber-50 text-black ml-2'>
              <img className="h-24 w-23 rounded-full object-cover object-center" src={elem.imageUrl} alt="" />
              <h1 className='text-2xl font-semibold my-2'>{elem.userName}</h1>
              <h5 className='text-base text-blue-500 text-lg font-semibold my-2'>{elem.userRole}</h5>
              <p className='text-sm font-md leading-tight'>{elem.userDesc}</p>
              <button
                onClick={() => {
                  //ye idx index hai elem(card) ka jo create hora hai map(idx) vala hi idx hai-->splice me kaam ayega
                  deleteHandler(idx)
                }}
                className=' mt-4 rounded px-4 py-2 bg-red-600 text-white font-semibold text-xs active:scale-95 cursor-pointer'>Remove</button>
            </div>

          })
        }

      </div>

    </div>
  )
}

export default App