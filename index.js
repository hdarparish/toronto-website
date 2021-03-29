const numImagesAvailable = 116; //how many photos are total in the collection
const numItemsToGenerate = 5; //how many photos you want to display
const collectionID = 2009317; //Toronto

const galleryContainer = document.querySelector(".masonry");
function renderGalleryItem(randomNumber) {
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
}
randomArray = Array.from({ length: numItemsToGenerate }, () =>
  Math.floor(Math.random() * numImagesAvailable)
);

const loadImages = () => {
  for (let i = 0; i < randomArray.length; i++) {
    //let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomArray[i]);
  }
};
