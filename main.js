import './style.css'

// Your Pexels API key
const apiKey = 'uVdukPeIw5le4kv1cCaqQPCKmagV7yqAaeh5RCCX0UlllpIZzyOrJkXn';

// Number of images you want to fetch
const numberOfImages = 12;

// Constructing the API URL
const apiUrl =  `https://api.pexels.com/v1/search?query=photography&per_page=12`;

// Fetching data from the API
fetch(apiUrl, {
  headers: {
    Authorization: apiKey
  }
})
.then(response => response.json())
.then(data => {
  // Extracting image URLs from the response
  const images = data.photos.map(photo => photo.src.large);

  // Displaying images in the gallery div
  const galleryDiv = document.getElementById('imageGallery');
  images.forEach(imageUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    galleryDiv.appendChild(imgElement);
  });
})
.catch(error => console.error('Error fetching images:', error));

function toggleMenu() {
  var sideMenu = document.querySelector('.side-menu');
  if (sideMenu.style.left === '500px') {
    sideMenu.style.left = '20px';
  } else {
    sideMenu.style.left = '500px';
  }
}

// Function to handle touch events
function handleTouchStart(event) {
  event.preventDefault(); // Prevents scrolling
  toggleMenu();
}

// Add touch event listener to the hamburger menu
var hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('touchstart', handleTouchStart, false);