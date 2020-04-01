
/* GET REQUEST */

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log('there is an error');
        console.log(error);
    }
}

/* RENDERING SPECIFIC USER TO SCREEN*/
getUsers()
    .then(users => {
        const username = users[0].username;
         
        // Appending Username to DOM Element
        DOM.greeting.innerHTML += ` ${username}`;
    })

/* WAITING FOR FORM SUBMISSION TO SEND POST REQUEST */
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    var title = document.querySelector("#form--name").value;
    var body = document.querySelector("#form--body").value;
    var userId = document.querySelector("#form--id").value;

    createrResource(title, body, userId);
})

const createrResource = async (title, body, userId) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    const settings = {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    };

    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

// Object to store dom elements
const DOM = {
    'greeting' : document.querySelector('.nav__welcome-msg'),
    'form' : document.querySelector('.form'),
}


// TEST

// document.querySelector('.form').addEventListener('submit', function(e) {

//     e.preventDefault(); 

//     var title = document.querySelector("#form--name").value;
//     var body = document.querySelector("#form--body").value;
//     var userId = document.querySelector("#form--id").value;

    

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             body,
//             userId
//         }),
//         headers: {
//             "Content-type" : "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
// })