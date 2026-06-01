 <Card/> ---> {Card()} both are same
 <Card/>---> JSX me ese karte hai funtion call
 {Card()} aur ese bhi

 example
 ---------------------
import React from 'react'
import Card from "./components/Card";

const App = () => {
  return (
    <div>
     {Card(0,1)}
      {Card(0,2)}
    </div>
  )
}

export default App
 -------------
import React from 'react'


const Card = (a,b) => {
  return (
    <div>
        <h1>This is Card {a+b}</h1>
         <h1>This is Card {a+b}</h1>
    </div>
  )
}

export default Card

 ------
 40:00
 Talwindcss--> w-fit h-screen

 45:00
 ek componnt bnado usme data pass kare reuse kro
 46:00
 > Props drilling---> same fucnction callkarna argument dena and parameter me receive karna yhi hai bas syntax is different.

>47:30
props pass karna--->
👉 String → quotes
👉 Number / boolean / array / object → {}
>App.jsx
syntax--> <Card user = "Rohit" age = {30}>

 -----
 >Card.jsx
 props is a  object kuch bhi name rakh sakte ho props ki jgh
 Card.jsx component me props receive krnege Card component ke function me (props) ese ya koi bhi name rakhlo

 >Props ko ui me kese dikhayenge
return(
 <div>
 <h1>
 this is   {props.user} and age is {props.age}
 </h1>
 <div>
)
-----
51:00-->
React me functional based components hote hai
phele hote the class based components
basically components  are functions bas syntax alag hota hai value pass karne ka acess karne ka etc..

>bas isme agar kuch pass kre u vo object ki form me jata hai and hume object ke perspective se receive karna hota hai like 
--->props.age
---
agr props nhi passs kroge tu empty obj jata hai
----
>props is a object--->object ko directly ui me nhi dikha skte object ki value karskte hai
access kar skte haiprops ko jes eobject ko karte hai
 
 --->props.age--->props.user

 ek componet banke usi ko reuse karr rhe hai alag alag data pass kakrke
------
 59:40
 1:00:00--> real use case of components ek button bnadya style krdia ab bas us button ka data cange kro and us button vale component ko khi bhi use 
 kar skte ho bar bar button and style nhi karna  hoga.

 <Button text1= "Buy Now" >
  <Button text2= "Explore Now" >

1:00:50--->prop drilling smja diya jo  bh uper se leke yha tak samjaya vo hai Prop Drilling
----------------------------------------
1:04:40---> Short revision of prop drilling
-----------------------------------------
Project 1:7:30
prop me key kya hota hai?--> react me har ek element ko key pass karte hai
>1:11:00 very important
>1:15:00--> task

----------------------------------------------
  
import React from 'react'
👉 Vite + React me ye line required nahi hoti
Par agar likhi hai → koi problem nahi.
(Just knowledge ke liye bata raha hoon)
------

 
