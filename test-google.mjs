const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6LUuBIL6qg8-w4Jkg67aaLM7A7x_zmGhnno12cl-XnD6g",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      contents:[
        {
          parts:[
            {
              text:"Hello"
            }
          ]
        }
      ]
    })
  }
)

console.log(await response.json())