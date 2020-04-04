
// A simple GET request 
fetch('https://jsonplaceholder.typicode.com/posts') // without then() fetch returns a promise that is pending
    .then(res => res.json()) // expecting a json object be return so you use .json() method on response
    .then(res => console.log(res)) // returns array of objects
    // .then(res => res.map(post => post.title))
    // .then(titles => console.log(titles));

/* To make requests other than GET, pass-in an object as a second argument to a fetch call with the method to use as well as any needed headers and the body of the request */

// CREATE a resource
const myPost = {
    title: 'kimi no na wa',
    body: 'a beautiful animated movie which is full of suspense, romance and mystery',
    userId: 1
}

const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
.then(res => res.json())
.then(json => console.log('New Post: ', json));


/* Error handling with fetch using .ok() and return Promise.reject(reason)

fetch('https://jsonplaceholder.typicode.com/postszz', options)
.then( res => {
    if (res.ok){
        return res.json();
    } else {
        return Promise.reject({status : res.status, statusText : res.statusText})
    }
})
.then(res => console.log(res))
.catch(err => console.log('ERROR, with message', err.status));
*/