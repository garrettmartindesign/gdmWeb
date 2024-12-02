//reload, no cache
fetch('data.json', { cache: 'no-cache' })
  .then(response => response.json())

//type fade/alternate on homepage
$(document).ready(function() {
    const titleWords = ["photographer", "trail runner", "dog dad", "artist"]; // Words to change to
    let currentIndex = 0;

    setInterval(function() {
        $(".titleChange").fadeOut(500, function() { // Fade out current word
            $(this).text(titleWords[currentIndex]); // Change the text
            $(this).fadeIn(500); // Fade in the new word
            currentIndex = (currentIndex + 1) % titleWords.length; // Cycle through the words
        });
    }, 1500); // Change the word every 2 seconds
});

// Get all elements with the class "comingSoon"
const comingSoonElements = document.querySelectorAll(".comingSoon");
comingSoonElements.forEach(element => {
  // Create the banner element
  const banner = document.createElement("div");
  banner.textContent = "Coming Soon!";
  banner.classList.add("coming-soon-banner"); // Add a CSS class for styling
  element.insertBefore(banner, element.firstChild); // Add the banner to the element
});

//download business contact information
document.getElementById('downloadBtn').addEventListener('click', function() {
  // Create a vCard formatted string
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:Garrett Martin Design\nTEL;TYPE=work,voice:+13039092779\nEMAIL:garrettmartindesign@gmail.com\nURL:garrettmartindesign.com\nEND:VCARD";
  // Create a Blob (binary data) from the vCard string
  var blob = new Blob([vcard], { type: "text/vcard" });
  // Create a download link and trigger the download
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download 
 = 'garrettMartinDesign.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//Arrow hover
function changeImage(newImageSrc) {
  document.getElementById('arrowHoverSwap').src = newImageSrc;
}

//scroll to top
// Select the link element (replace '#myLink' with the actual ID of your link)
const link = document.querySelector('#topScroll');

// Add an event listener for clicks on the link
link.addEventListener('click', function(event) {
  // Prevent the default link behavior (jumping to the anchor)
  event.preventDefault();   


  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//Icon scrolling at the top
//'my-icon1', 'my-icon2', 'my-icon3', 'my-icon4', 'my-icon5', 'my-icon6', 'my-icon6', 'my-icon7', 'my-icon8', 'my-icon9', 'my-icon10'

const banner = document.getElementById('banner');
    const iconContainer = document.getElementById('icon-container');
    const iconTypes = ['my-icon1', 'my-icon2', 'my-icon3', 'my-icon4', 'my-icon5',
      'my-icon6', 'my-icon7', 'my-icon8', 'my-icon9', 'my-icon10', 'my-icon1', 'my-icon2', 'my-icon3', 'my-icon4', 'my-icon5',
      'my-icon6', 'my-icon7', 'my-icon8', 'my-icon9', 'my-icon10'
    ];
    const numIcons = iconTypes.length;
    const iconWidth = 20 + 10;

    const containerWidth = numIcons * iconWidth;
    iconContainer.style.width = `${containerWidth}px`;

    for (let i = 0; i < numIcons; i++) {
      const icon = document.createElement('div');
      icon.classList.add('iconS');
      const iconType = iconTypes[i];
      icon.classList.add(iconType);
      iconContainer.appendChild(icon);
    }
 
    // Select all anchor links that point to an ID on the same page
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each anchor link
anchorLinks.forEach(link => {
  link.addEventListener('click',   
 function(event) {
    event.preventDefault(); // Prevent the default jumpy behavior

    const targetId = this.getAttribute('href'); // Get the target element's ID
    const targetElement = document.querySelector(targetId);   
 // Select the target element

    // Scroll smoothly to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

// Change the color to red
navbarTogglerIcon.style.color = 'white'; 

// Or, change the color using a CSS class
navbarTogglerIcon.classList.add('my-icon-color');
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-collapse'); // Assuming your navbar has the class "navbar-collapse"
const navbarLinks = document.querySelectorAll('.navbar-nav a'); // Select all links within the navbar

// Add a click event listener to each navbar link
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (navbar.classList.contains('show')) {
      navbarToggler.click(); // Trigger a click on the toggle button to close the navbar
    }
  });
});

// Add a click event listener to the document (to close on clicks outside the navbar)
document.addEventListener('click', function(event) {
  if (!navbarToggler.contains(event.target) && !navbar.contains(event.target) && navbar.classList.contains('show')) {
    navbarToggler.click();
  }
});

//photo gallery
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Create a modal element
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Create an image element for the modal
        const modalImage = document.createElement('img');
        modalImage.src = image.src;


        // Append the image to the modal and the modal to the body
        modal.appendChild(modalImage);
        document.body.appendChild(modal);

        // Add a click event listener to close the modal
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

//load more button gallery 
const loadMoreBtn = document.getElementById('loadMoreBtn');
const gallery = document.querySelector('.gallery');

const moreImages = [
    "img/photography/A-Sunset-From-the-Hudson.png",
    "img/photography/artemis_condo.png",
    "img/photography/batonrouge-bridge.png"
];

loadMoreBtn.addEventListener('click', () => {
    moreImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        gallery.appendChild(img);
    });
    loadMoreBtn.style.display = 'none';
});