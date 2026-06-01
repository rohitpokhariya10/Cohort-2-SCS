Haan, bilkul sahi. Humne jo newContact object banaya, usko hum contacts array mein add kar rahe hain. Matlab har baar jab tum "Add Contact" karte ho, to tumhara naya contact us contacts array ke andar push ho jata hai. Is tarah tumhare saare contacts ek hi array me judte jaate hain aur tum unhe baad mein easily display kar sakte ho.

-----
elem.name
  .split(" ")
  .map(word => word[0])
  .join("")
  .substring(0, 2)
  .toUpperCase()


1)split("")--->name ko break karo on the basis of spaces


2)map(word => word[0])------> ye shorthand hai
>explaination--->elem.name.map(function(word){
    return word[0];
})
example---->"Rohit Pokhariya"
isme Rohit ek word hoga ---> word[0]=R
Pokhariya ek word hoga ---> word[0]=P


3)join("")--->R and P jo mila use joddo RP banjaeyga
4)substring(0, 2)--->string me se shuru ke 2 letter nikalo-->RP

-----
flex:1  --->jha bhi flex-1 use hoga us particular elemnt ko parent ka baca hua sara space dedo

agr flex-1 diya hai child ko and parent ko flex bhi bnana pdta hai and flex-col ya flex-row jha bhi remaining spce cahiye child ko
---