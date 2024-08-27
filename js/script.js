$(document).ready(function() {
    const titleWords = ["photographer", "trail runner", "dog dad", "Denver-Based", "solutions specialist"]; // Add more words as needed
    let currentIndex = 0;

    setInterval(function() {
        $(".titleChange").fadeOut(500, function() { // Fade out current word
            $(this).text(titleWords[currentIndex]); // Change the text
            $(this).fadeIn(500); // Fade in the new word
            currentIndex = (currentIndex + 1) % titleWords.length; // Cycle through the words
        });
    }, 1500); // Change the word every 2 seconds
});