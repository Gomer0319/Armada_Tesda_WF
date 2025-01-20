### **Knowledge Check: Event Listeners**

**1. What is the purpose of an event listener in JavaScript?**  
a) To add styling to an element.  
b) To "listen" for a specific event and execute a function when it occurs.  
c) To remove an element from the DOM.  
d) To loop through an array of elements.  

---

**2. Which method is used to attach an event listener to an element?**  
a) `element.onEvent`  
b) `element.attachEvent`  
c) `element.addEventListener`  
d) `element.setEvent`  

---

**3. What is the correct way to prevent a form from refreshing the page upon submission?**  
a) Use `event.stopPropagation()`.  
b) Use `return false`.  
c) Use `event.preventDefault()`.  
d) Use `form.reset()`.  

---

**4. Which event type is triggered when a user hovers over an element?**  
a) `hover`  
b) `mouseover`  
c) `mouseenter`  
d) `mouseenter`  

---

**5. What is the output of the following code when the button is clicked?**  

**HTML:**  
```html
<button id="testButton">Click me</button>
```  

**JavaScript:**  
```javascript
let button = document.getElementById("testButton");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
});
```  
a) Nothing happens.  
b) An error occurs because the button ID is incorrect.  
c) "Button was clicked!" is logged to the console.  
d) The page refreshes automatically.  

---

#### **Debugging Questions**  

**6. What is wrong with the following code, and how would you fix it?**  

**HTML:**  
```html
<button id="submitBtn">Submit</button>
```  

**JavaScript:**  
```javascript
let btn = document.querySelector("#submit-button");

btn.addEventListener("click", function() {
    console.log("Form submitted!");
});
```  

---

**7. Why does this code log the same message for every button when clicked? How would you fix it?**  

**HTML:**  
```html
<button class="actionBtn">Action 1</button>  
<button class="actionBtn">Action 2</button>  
<button class="actionBtn">Action 3</button>  
```  

**JavaScript:**  
```javascript
let buttons = document.querySelectorAll(".actionBtn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked!");
    });
});
```  

---

### **Answer Key**  

**1.** b) To "listen" for a specific event and execute a function when it occurs.  
**2.** c) `element.addEventListener`.  
**3.** c) Use `event.preventDefault()`.  
**4.** b) `mouseover`.  
**5.** c) "Button was clicked!" is logged to the console.  
**6.** The query selector `#submit-button` is incorrect. It should be `#submitBtn` to match the ID in the HTML. Correct code:  
```javascript
let btn = document.querySelector("#submitBtn");
```  
**7.** The code logs the same message because the inner function always logs the same string. To log unique messages based on the button, use `button.textContent` or a similar property inside the callback function. Example:  
```javascript
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.textContent + " clicked!");
    });
});
```