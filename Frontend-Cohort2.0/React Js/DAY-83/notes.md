task 2--> API ke data ko handle karna using context API (API ke data ko central karna)


1)Product.jsx
Tumne poora concept perfectly pakad liya hai. Link lagane ka main purpose yehi hota hai ki jab user kisi product par click kare, toh woh us specific product ke detail page par pahunch jaaye. Aage chalke tum wahin Add to Cart, Buy Now, ya aur bhi features add kar sakte ho.
Agar tum Link use nahi karte, toh product sirf UI me dikhega, lekin uspar click karne se kuch bhi navigate nahi hoga — bas static data rahega.
Isliye tumne bilkul sahi approach follow ki hai 👍
Link use karke tumne har product ko clickable bana diya hai, aur future me product details page tak navigate karna easy ho gaya hai.
Keep it up! 💪🔥




2)productdetails.jsx
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);



  > 2️⃣ {} ka matlab kya hai? (Core JS concept)

JS me {} ka matlab hota hai
👉 object

{
  top: 0,
  behavior: "instant"
}


🧠 Iska meaning:

“Main scroll karna chahta hoon top = 0 tak, aur behavior instant ho”

 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);


>  