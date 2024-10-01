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

// Get the element
const comingSoon = document.getElementById("comingSoon");

// Create the banner element
const banner = document.createElement("div");
banner.textContent = "Coming Soon!";
banner.classList.add("coming-soon-banner"); // Add a CSS class for styling

// Add the banner to the element
comingSoon.insertBefore(banner, comingSoon.firstChild);