function saveCommentChanges(films) {
    postData('../php/saveFilmChanges.php', films)
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

function saveUserChanges(users) {
    postData('../php/saveUserChanges.php', users)
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
    return response; // parses JSON response into native JavaScript objects
}