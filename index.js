// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({name, email})
  })
            .then(response => {
              return response.json()
            })
            .then(obj => {
              document.body.innerHTML = obj["id"]
            })
            .catch(e => {
              document.body.innerHTML = e.message
            })
}