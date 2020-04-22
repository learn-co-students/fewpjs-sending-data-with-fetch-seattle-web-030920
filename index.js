// Add your code here
function submitData(name, email) {
    const dataObj = {
        name: name,
        email: email
    }
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataObj)
    }
    return fetch("http://localhost:3000/users", configObj)
        .then( resp => resp.json() )
        .then( function(object) {
            document.body.innerHTML = object.id
        })
        .catch( function(error) {
            document.body.innerHTML = error.message
        })
}