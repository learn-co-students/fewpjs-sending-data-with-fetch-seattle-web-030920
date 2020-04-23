// Add your code here
let obj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
      })
}
fetch("http://localhost:3000/dogs", obj)
.then(function(response) {
    return response.json()
})
.then(function(object) {
    console.log(object)
})
.catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });

function submitData(userName, userEmail) {
    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    return fetch("http://localhost:3000/users", obj)
    .then(response => response.json())
    .then(function(object){
        // let element = document.createElement('h1')
        // element.innerText = object.id
        // document.body.appendChild(element)
        document.body.innerHTML = object.id
        console.log(object)
    })
    .catch(function(error) {
    //    let response = document.createElement('h1')
    //    response.innerText = error.message
    //    document.body.appendChild(response)
        document.body.innerHTML = error.message
        console.log(error.message)
    })
}