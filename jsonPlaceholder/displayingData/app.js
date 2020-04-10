
/* example get request https://pixabay.com/api/?key=10508573-91c4fd6a2f0fe907b6329f306&q=yellow+flowers&image_type=photo */

const apiKey = '10508573-91c4fd6a2f0fe907b6329f306';

const DOM = {
    'headerPhoto' : document.querySelector('.header .header__main-photo'),
}

const getPhotos = async () => {
    const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const imagesUrl = data.hits.map((image) => {
            return image.webformatURL
        });
    
        return imagesUrl
    } catch (error) {
        console.log(error)
    } 
}

const photoHandler = async () => {
    try {
        const photosList = await getPhotos()
        createImage(photosList[0]);
    } catch (e) {
        console.log(e);
    }
}
photoHandler();

const createImage = (imageUrl) => {
    const mainPhoto = DOM.headerPhoto;

    const imageToInsert = `<img src="${imageUrl}" alt="photo of something">`

    mainPhoto.insertAdjacentHTML('afterbegin', imageToInsert);

    console.log('done:', mainPhoto);
}


console.log(DOM.headerPhoto);