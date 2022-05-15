function saveCommentChanges(films) {

}

function saveUserChanges(users) {
    
    
    postData('./json/usuarios.json', users)
        .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        });
  
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}