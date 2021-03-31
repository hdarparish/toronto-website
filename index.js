//total number of photos available in the Unsplash collection
const numImagesAvailable = 116;
//number of photos to populate the
const numItemsToGenerate = 5; //how many photos you want to display
const collectionID = 2009317; //Toronto

const galleryContainer = document.querySelector(".masonry");
const renderGalleryItem = (randomNumber) => {
  fetch(
    `https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`
  ).then((response) => {
    let galleryItem = document.createElement("div");
    galleryItem.classList.add("container");
    galleryItem.innerHTML = `
        <img class="item" src="${response.url}" alt="gallery image"/>
        `;
    galleryContainer.append(galleryItem);
  });
};

const loadImages = () => {
  //generate an array of random numbers based on the number of images available in the UNSPLASH collection
  let randomArray = Array.from({ length: numItemsToGenerate }, () =>
    Math.floor(Math.random() * numImagesAvailable)
  );
  randomArray.map((index) => renderGalleryItem(index));
};

window.onload = () => {
  loadImages();
};
