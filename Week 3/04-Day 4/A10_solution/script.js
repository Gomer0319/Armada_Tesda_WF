// select the main heading (h1, name) and change the color
const h1 = document.querySelector('h1')
h1.style.color = 'red'

// update the nav links by adding background color when hovered
const navLinks = document.querySelectorAll('.nav_links li')
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'lightblue'
    })
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''
    })
})

// Select the about me section (section class="about") and change its content
const aboutSection = document.querySelector('.about')
aboutSection.textContent = "I am a passionate developer excited to build amazing web experiences!"

// add a button labeled "Update Bio" that updates the text when clicked// Select the .about section
const updateButton = document.createElement('button');
updateButton.textContent = 'Update Bio';
updateButton.id = "update_bio"; // sets an id
updateButton.style.margin = '0 24px'; // adjust margin
updateButton.addEventListener('click', () => {
    aboutSection.textContent = "This is new.";
});

aboutSection.appendChild(updateButton);

// - Select all technology images in the Technologies Section using querySelectorAll().Loop through them and add a simple **border effect** when hovered over (onmouseover).
const techImages = document.querySelectorAll('.technologies img')

techImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.border = '2px solid rgb(226, 128, 128)'
        image.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    })

    image.addEventListener('mouseout', () => {
        image.style.border = ''
        image.style.backgroundColor = ''
    })
})

// - Add a "Toggle Theme" button that changes the page’s background color between light and dark modes.
const toggleThemeButton = document.createElement('button');
const body = document.body
toggleThemeButton.textContent = 'Dark Mode';
toggleThemeButton.id = 'toggle_theme';
toggleThemeButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Light Mode'
        body.style.backgroundColor = ''
    } else {
        toggleThemeButton.textContent = 'Dark Mode'
        body.style.backgroundColor = 'rgb(80, 80, 80)'
    }
})

document.body.appendChild(toggleThemeButton)

