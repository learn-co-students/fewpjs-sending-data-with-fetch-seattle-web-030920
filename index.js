// Add your code here
function submitData(name, email) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    }

    return fetchRequest(configurationObject)
}

function appendResponse(response) {
    document.body.innerHTML = response
}

function fetchRequest(postObject) {
    return fetch("http://localhost:3000/users", postObject)
    .then(res => res.json())
    .then(json => {
        appendResponse(json.id)
        return json
    })
    .catch(error => {
        alert("Bad things! Ragnarok!");
        appendResponse(error.message)
    })
}


// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }