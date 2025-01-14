// 1. Change the Title Text
const title = document.querySelector('h1');
title.textContent = "Welcome to DOM Manipulation!";

// 2. Highlight the Second Item in the List
const secondItem = document.querySelectorAll('ul li')[1];
secondItem.style.backgroundColor = 'lightblue';

// 3. Add a New List Item
const list = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = "New Item";
list.appendChild(newItem);

// 4. Add a Border to the First Section
const firstSection = document.querySelector('section');
firstSection.style.border = '2px solid red';

// 5. Hide the Image
const image = document.querySelector('img');
image.style.display = 'none';

// 6. Add an Event Listener to the Button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button Clicked!');
});

// 7. Update Text Content Dynamically
button.addEventListener('click', () => {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "You clicked the button!";
});

// 8. Traverse to a Sibling Element
const sibling = title.nextElementSibling;
sibling.textContent = "I am a sibling!";

// Stretch Goal 1: Alternate Background Colors in the List Items
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item, index) => {
    item.style.backgroundColor = index % 2 === 0 ? 'lightgray' : 'white';
});

// Stretch Goal 2: Add a Counter to Track Button Clicks
let clickCount = 0;
button.addEventListener('click', () => {
    clickCount++;
    const counterDisplay = document.querySelector('.counter');
    if (!counterDisplay) {
        const newCounter = document.createElement('p');
        newCounter.classList.add('counter');
        newCounter.textContent = `Button clicked ${clickCount} times`;
        document.body.appendChild(newCounter);
    } else {
        counterDisplay.textContent = `Button clicked ${clickCount} times`;
    }
});
