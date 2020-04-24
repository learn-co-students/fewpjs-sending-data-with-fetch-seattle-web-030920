// Add your code here
function submitData(name, email)
{
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: `${name}`, email: `${email}`})
    };

    return fetch('http://localhost:3000/users', configurationObject).then(resp => resp.json())
    .then(function(object) 
    {
        document.body.innerHTML += object.id;
        // let idp = document.createElement('p');
        // idp.innerText = object.id; 
        // document.body.appendChild(idp);     
        console.log(object);
    })
    .catch(function(error)
    {
        document.body.innerHTML += error.message;
        // let errorP = document.createElement('p');
        // errorP.innerText = error.message; 
        // document.body.appendChild(errorP);
        console.log(error.message);
    });
}