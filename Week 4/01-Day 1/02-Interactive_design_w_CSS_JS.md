### **Combining CSS and JavaScript for Interactive Design**

### **Learning Objectives:**  
By the end of this lesson, trainees will be able to:  

1. **Describe** how CSS and JavaScript work together to create interactive web designs.  
2. **Manipulate** CSS properties dynamically using JavaScript.  
3. **Implement** event-driven CSS changes through JavaScript.  
4. **Create** basic interactive features such as hover effects, modals, and dropdowns.  

---

#### **CSS and JavaScript: A Perfect Team**
CSS styles your webpage, while JavaScript makes it interactive. When combined, they create dynamic, engaging user experiences. For example, CSS can define how a button looks, and JavaScript can make the button respond to user clicks by changing its style or triggering animations.

---

#### **How JavaScript Interacts with CSS**
JavaScript can:
- **Modify inline styles**: Change CSS properties directly on elements.
- **Add or remove CSS classes**: Toggle predefined styles efficiently.
- **Manipulate the DOM**: Dynamically update element attributes or structures.

#### **Example: Changing an Element’s Color**
With JavaScript, you can change an element’s color dynamically:
```html
<div id="box" style="width: 100px; height: 100px; background-color: blue;"></div>
<button onclick="changeColor()">Change Color</button>

<script>
function changeColor() {
  document.getElementById('box').style.backgroundColor = 'red';
}
</script>
```
---

#### **Using CSS Classes with JavaScript**
A more efficient way to change styles is by adding or removing CSS classes.

#### **Example: Toggle Button State**
```html
<style>
  .active {
    background-color: green;
    color: white;
  }
</style>

<button id="toggleButton">Click Me</button>

<script>
const button = document.getElementById('toggleButton');
button.addEventListener('click', () => {
  button.classList.toggle('active');
});
</script>
```
Here, clicking the button toggles the `active` class, changing its appearance.

---

#### **Building Interactive Features**

#### **1. Hover Effects with JavaScript**
While CSS alone can handle simple hover effects, JavaScript provides greater control. For instance, you can highlight a list item when hovered over.

```html
<ul>
  <li onmouseover="highlight(this)" onmouseout="unhighlight(this)">Item 1</li>
  <li onmouseover="highlight(this)" onmouseout="unhighlight(this)">Item 2</li>
</ul>

<script>
function highlight(element) {
  element.style.backgroundColor = 'lightgray';
}

function unhighlight(element) {
  element.style.backgroundColor = '';
}
</script>
```

#### **2. Modals**
A modal is a dialog box that appears on top of the current page.

```html
<style>
  .modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
</style>

<div class="overlay" id="overlay" onclick="closeModal()"></div>
<div class="modal" id="modal">
  <p>This is a modal!</p>
  <button onclick="closeModal()">Close</button>
</div>

<button onclick="openModal()">Open Modal</button>

<script>
function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
</script>
```

#### **3. Dropdown Menu**
A dropdown menu is another interactive feature easily created using CSS and JavaScript.

```html
<style>
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>

<div class="dropdown">
  <button>Menu</button>
  <div class="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
  </div>
</div>
```

---

#### **Best Practices**
1. **Separate Concerns**: Use CSS for styling and JavaScript for interactivity.
2. **Optimize Performance**: Avoid frequent DOM manipulations.
3. **Graceful Fallbacks**: Ensure your design works without JavaScript for users who have it disabled.

---

#### **Key Takeaways**
1. CSS and JavaScript together create engaging and dynamic user experiences.
2. JavaScript can modify inline styles, toggle classes, and respond to events to change CSS properties.
3. Interactive features like modals, hover effects, and dropdowns are achievable with simple JavaScript and CSS combinations.

