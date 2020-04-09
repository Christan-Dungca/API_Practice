console.log('app is running');


const getPhotos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
        return data;
    } catch(e) {
        console.log('ERROR', e);
    }
} 

getPhotos();

const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const res = await fetch(url);
    const data = await res.json();

    console.log('DATA:', data);
}   

// getPosts();