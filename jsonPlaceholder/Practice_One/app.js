
/* Getting Users from external api */
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

getUsers()
    .then(users => {
        const username = users[0].username;
        
        // Appending Username to DOM Element
        DOM.greeting.innerHTML += ` ${username}`;

    })

// Object to store dom elements
const DOM = {
    'greeting' : document.querySelector('.greeting'),
}

// TEST
console.log(DOM.greeting);
