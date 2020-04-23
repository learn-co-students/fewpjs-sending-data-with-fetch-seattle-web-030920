// Add your code here
// const
const ul = document.createElement("ul")
const body = document.querySelector("body")
body.appendChild(ul)

function submitData(name, email) {

    let formData = {
        name: name, 
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(json => processResp(json))
    .catch(error => appendError())
}
// append error to DOM 

function appendError(error) {
   
    let li = document.createElement("li")
    li.textContent = "Unauthorized Access"

    ul.appendChild(li)
}

// process the [response] response from server 

function processResp(json) {
    let x = json 
    let li = document.createElement("li")
 
    li.textContent = x.id 
    ul.appendChild(li)   
}