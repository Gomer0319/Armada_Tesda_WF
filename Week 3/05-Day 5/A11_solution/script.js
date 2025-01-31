// add atleast 3 images to profile image. Create next and previous buttons to switch between images. Use JS to change the image when next or previous button is clicked
// Set a timer to automatically cycle through images every 3 seconds

const images = [
    "./assets/my_image.png",
    "./assets/my_image2.png",
    "./assets/my_image3.png"
]

const profileImage = document.getElementById("profile_image");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Set the initial profile image
updateProfileImage();

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateProfileImage();
}, 3000);

// Function to update the profile image
function updateProfileImage() {
    profileImage.src = images[currentIndex];

}

//next button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateProfileImage();
})

//previous button
previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateProfileImage();
})

// add a back to top button that appears when the user scrolls down at a certain point. Implement smooth scrolling to return to the top of the page when clicked.
// make the button visible only when the user scrolls down at a certain point
// add a fade-in/out effect for when the button appears or disappears

const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.textContent = "Back to Top"; // initially hide the button
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
    } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    }    
});


backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Validate the contact form before submission
const contactForm = document.getElementById("contact_form");
contactForm.addEventListener("submit", (event) => {
    if (!contactForm.checkValidity()) {
        event.preventDefault();
        alert("Please fill out all required fields.");
    }
});



