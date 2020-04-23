let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


function submitData (userName, userEmail){
    return fetch("http://localhost:3000/users", configObj)
    .then(response => {return response.json()})
      .then(object => {document.body.textContent = object[ "id" ]})
        .catch(error => {document.body.innerHTML = error.message})
}

