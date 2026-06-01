 import React from 'react'
 
 const App = () => {
        const user = "Rohit"
        const age = 22
        const rohitFriends =["Saksham" , "Shivam" , "Atif" ]
        const arr = [90,80,45,25]
   return (
     <div>
        <h1>Hi , {user} Your age is {age}</h1>
        {
            rohitFriends.map(function (idx) {
                return <h1 key={idx}>Radhe Radhe</h1>
                
            })

        } 
        
        {
            rohitFriends.map(function (elem,idx) {
                console.log(elem);
                
                return <h1 key={idx}>{elem}</h1>
                
            })
        }

        {
            rohitFriends.map(function (elem,idx) {
                console.log(elem);
                
                return elem
                
            })
        }
       <br></br>
        {/* use of filter() */}
        {
            arr.filter(function(elem){
                return elem>30
            })
        }

        






     </div>
   )
 }
 
 export default App