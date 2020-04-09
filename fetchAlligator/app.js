function other(){

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
    };
    
    const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-type': 'application/json'
        }
    };
    
    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(res => res.json())
    .then(json => console.log('New Post: ', json));
    
    //  UPDATE a resource using PUT
    const updatePost = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    
    const updateOptions = {
        method: 'PUT',
        body: JSON.stringify(updatePost),
        headers: {
            'Content-type': 'application/json'
        }
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts/1', updateOptions)
    .then(res => {
        if (res.ok){
            return res.json()
        } else {
            return Promise.reject()
        }
    })
    .then(json => console.log(json));
    
    // UPDATE a resource using PATCH
    const updatePostPatch = {
        title: 'bar'
    }
    
    const updateOptionsPatch = {
        method: 'PATCH',
        body: JSON.stringify(updatePostPatch),
        headers: {
            'Content-type': 'application/json'
        }
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts/1', updateOptionsPatch)
    .then(res => res.json())
    .then(res => console.log(res))
    
    //  DELETE a resource
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => console.log(res))
    
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

}
/* USING ASYNC AWAIT + FETCH */

// GETTING DATA WITH ASYNC AWAIT
const getData = async (type) => {
    const url = `https://jsonplaceholder.typicode.com/${type}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)

    } catch(e) {
        console.log(e)
    }
}

getData('posts');

// POSTING DATA WITH ASYNC AWAIT
const createPost = async (input = {title : 'no title', body: 'no body', userId : 1}) => {
    const {title, body, userId} = input; 
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const settings = {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId
        }),
        headers: {
            'Content-type' : 'application/json'
        }
    }

    try {
        const res = await fetch(url, settings);
        const data = await res.json();

        console.log('This is the response:', data);
    } catch(e) {
        console.log(e);
    }
}

createPost();

const deletePost = async (postNum) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postNum}`;
    settings = {
        method: 'DELETE'
    }
    
    try {
        const res = await fetch(url, settings);
        const data = await res.json()

        console.log(data);
    } catch (e) {
        console.log(e)
    }
}

deletePost(100);

// FILTERED DATA

