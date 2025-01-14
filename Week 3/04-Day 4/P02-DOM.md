### **Practice Assignment: Exploring the DOM - Manipulation and Traversing**

In this assignment, you’ll focus on fundamental DOM manipulation and traversing techniques using JavaScript. You will dynamically create, modify, and traverse DOM elements, reinforcing your understanding of the DOM and its practical applications.

#### **Estimated Time to Completion:** 30-45 minutes
#### **Level of Complexity:** Beginner

---

### **Instructions**

1. **Setup**:
   - Create a new HTML file (`index.html`) and a JavaScript file (`script.js`).
   - Link the JavaScript file to the HTML document.

2. **Tasks**:

   **Task 1: Create and Append Elements**
   - Create a `<div>` element dynamically using JavaScript.
   - Append it as a child to an existing `<div>` with `id="container"` in your HTML.

   **Task 2: Modify Element Content**
   - Select the `<div>` you just appended.
   - Change its text content to "Hello, DOM!".

   **Task 3: Style Modification**
   - Change the background color of the `<div>` you created to `lightblue`.
   - Set its width to `200px` and height to `100px`.
   - Add a border with `1px solid gray`.

   **Task 4: DOM Traversal and Modification**
   - Create a list (`<ul>`) dynamically with three list items (`<li>`), each containing different text (e.g., "Item 1", "Item 2", "Item 3").
   - Append this list to the existing `<div>` with `id="container"`.

   **Task 5: Event Handling**
   - Add a click event listener to each `<li>` in the list.
   - When clicked, change the text color of the clicked `<li>` to `red`.

---

### **Evaluation Criteria & Learning Objectives**

- Demonstrate understanding of basic DOM manipulation techniques.
- Correctly apply methods to create, modify, and traverse DOM elements.
- Implement event handling to respond to user interactions.
- Practice using JavaScript to enhance interactivity and visual presentation on webpages.

---

### **Directions**

#### **Page Requirements (MVP)**

1. **Setup and File Linking:**
   - Ensure your `index.html` links to the `script.js` file.

2. **Container Setup:**
   - Use the following HTML structure as your starting point:

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>DOM Practice</title>
     </head>
     <body>
         <div id="container">
             <!-- Dynamic content will be added here -->
         </div>
         <script src="script.js"></script>
     </body>
     </html>
     ```

3. **DOM Manipulation Tasks:**
   - Complete all five tasks listed above.

4. **File Setup:**
   - Save your JavaScript file as `script.js`.

#### **Stretch Goals**

1. Add a button below the list (`<ul>`) that says "Reset Colors".
   - When clicked, it should reset the text color of all `<li>` elements back to black.

2. Add a new `<li>` dynamically to the list each time a button labeled "Add Item" is clicked.
   - The new `<li>` should contain the text "New Item" followed by the current count of items (e.g., "New Item 4").

---

### **Submission Guidelines**

1. Save your completed `index.html` and `script.js` files.
2. Submit these files via the designated platform or email them to your instructor with the subject line: "Practice Assignment: Exploring the DOM".

---

### **Important Notes**

- Focus on using basic DOM manipulation methods like `document.createElement`, `appendChild`, and `addEventListener`.
- Avoid adding unnecessary elements or unrelated features to the provided HTML structure.
- Include comments in your JavaScript file to explain your code logic.

