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