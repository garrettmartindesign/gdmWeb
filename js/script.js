//reload, no cache
fetch('data.json', { cache: 'no-cache' })
  .then(response => response.json())

//type fade/alternate on homepage
$(document).ready(function() {
    const titleWords = ["photographer", "trail runner", "dog dad", "solutions specialist", "front-end developer"]; // Words to change to
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