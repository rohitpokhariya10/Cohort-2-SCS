FFREE AOI: https://picsum.photos/v2/list
//ese  ata hai response
response.data = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    download_url: "https://picsum.photos/id/0/5000/3333"
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    download_url: "https://picsum.photos/id/1/5000/3333"
  }
]
---
abhi kya kar raha hu (logic)

1)Button click → getData()

2)API call → setAllData
---
Ab me  chahte hu ki:
👉 Page load hote hi API call ho jaaye

Iske liye hi useEffect hota hai ✅
s1)import React, { useState, useEffect } from 'react'

s2)const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)
  } catch (err) {
    console.log(err)
  }
}
s3)useEffect(() => {
  getData()
}, [])

[] ka matlab:

sirf first render (page load) pe call karo
----
