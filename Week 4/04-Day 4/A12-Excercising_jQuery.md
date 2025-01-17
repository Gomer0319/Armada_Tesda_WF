### **Assignment: Explore jQuery Animations**

In this assignment, you will experiment with various jQuery animation methods to create dynamic effects on webpage elements. This project will help you understand how animations work in jQuery, allowing you to enhance your websites with smooth and interactive transitions.

#### **Estimated Time to Completion:** 1–2 hours  
#### **Level of Complexity:** Beginner to Intermediate 

---

### **Instructions**

1. Set up a new HTML file and link it to a jQuery script via the CDN.
2. Use the following animation methods to apply animations to different elements on your page:
   - **fadeIn()** and **fadeOut()** – for smooth fading effects.
   - **slideDown()** and **slideUp()** – for sliding elements in and out.
   - **animate()** – to create custom animations like resizing, moving, or changing color.
3. Test and customize these animations to create engaging effects for your webpage elements, such as:
   - A navigation bar that fades in when hovered over.
   - A button that slides down a hidden content section.
   - A div element that animates (moves or resizes) when clicked.
4. Use event listeners (such as `click`, `hover`) to trigger the animations.
5. Ensure all animations work smoothly and enhance user experience.

---

#### **Starter Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery Animations</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .content {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 20px;
      display: none;
    }
    .button {
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <button class="button" id="fadeButton">Click to Fade In/Out</button>
  <div class="content" id="contentBox"></div>

  <button class="button" id="slideButton">Click to Slide Down/Up</button>
  <div class="content" id="slideContent"></div>

  <!-- Your jQuery code will go here -->
  <script>
    // Your code for animations will be written here.
  </script>

</body>
</html>
```

---

#### **Page Requirements (MVP)**

1. **Fade In/Out**:  
   - Create a button that triggers a fade-in and fade-out effect for a hidden content div.
   
2. **Slide Down/Up**:  
   - Add a button that slides a content box down or up when clicked.

3. **Custom Animation**:  
   - Add a custom animation (using the `animate()` method) to resize a div and change its background color when clicked.

---

#### **Stretch Requirements**

1. **Multiple Animations**:  
   - Add multiple elements that use different jQuery animations at the same time, e.g., having multiple divs slide in and fade at different intervals.
   
2. **Easing Effects**:  
   - Experiment with the `easing` option in the `animate()` method to create smooth transitions for custom animations.

3. **Trigger Animations on Hover**:  
   - Add hover effects on any element to trigger animations (such as scaling up an element or changing its color).

---

### **Evaluation Criteria & Learning Objectives**

- Understand and use basic jQuery animation methods: `fadeIn()`, `fadeOut()`, `slideDown()`, `slideUp()`, and `animate()`.
- Apply animations based on user interactions (clicks, hover).
- Experiment with custom animations to create dynamic effects on elements.

---

### **Submission Guidelines**

1. Create a folder named `lastname_firstname_jqueryanimations` containing your HTML file.
2. Save your HTML file as `index.html`.
3. Compress the folder into a ZIP file named `lastname_firstname_jqueryanimations.zip`.
4. Submit the ZIP file via the designated platform or email it to your instructor with the subject line: "jQuery Animations Assignment."
5. Include a screenshot of your webpage with the animations in action.

---

### **Important Notes**

- Ensure your animations are smooth and don’t cause delays or performance issues.
- You may refer to the jQuery documentation for more information on animation methods and additional options.
- Focus on using animations to improve the user experience and make your page interactive.
