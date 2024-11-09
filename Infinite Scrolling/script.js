const container = document.querySelector('.container');
const URL = 'https://robohash.org/';
let count = 0;
const maxCount = 100;
const batchSize = 5;
let isLoading = false;

// Function to get a random number
function getRandom() {
    return Math.floor(Math.random() * 100);
}

// Function to create and append images
async function getPost() {
    if (isLoading || count >= maxCount) return; // Prevent duplicate loads
    isLoading = true;

    try {
        for (let i = 0; i < batchSize; i++) {
            const img = document.createElement('img');
            img.src = `${URL}${getRandom()}`;
            img.alt = 'Random Robot';
            img.loading = 'lazy'; // Enable lazy loading
            container.appendChild(img);
            count++;
        }
    } catch (error) {
        console.error("Error loading images:", error);
    } finally {
        isLoading = false;
    }
}

// Debounce function to optimize scroll events
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Scroll event handler with debounce
window.addEventListener('scroll', debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Load more images when near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        getPost();
    }
}, 200));

// Initial load of images
getPost();