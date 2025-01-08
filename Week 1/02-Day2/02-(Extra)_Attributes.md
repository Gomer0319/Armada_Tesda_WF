### **(Extra) HTML Attributes: Key to Customizing Web Elements**

#### **Developmental Outcome**
By the end of this lesson, learners will:
1. Understand the role of attributes in HTML elements.
2. Learn how to use common attributes such as `src`, `href`, and `alt`.
3. Recognize the importance of attributes in enhancing accessibility and functionality.

---

#### **Attributes as Customization Tools**

A website can be compared to a well-designed appliance. The HTML elements are the core components—like the buttons, knobs, and screens—while the attributes are the settings that adjust how these components work. For example, the `src` attribute is like selecting the input for a screen, determining what content it displays, while the `href` attribute is similar to setting a destination on a GPS, guiding a user to a specific location. Just as these settings optimize an appliance’s performance, HTML attributes customize the behavior of web elements.

In this lesson, we’ll examine the key HTML attributes that every developer should understand to modify and enhance their web elements.

---

#### **Understanding HTML Attributes**

##### **What Are HTML Attributes?**

Attributes are additional information provided within HTML tags that modify the behavior or appearance of an element. They always come in name-value pairs, written in the form of `name="value"`.

Example:
```html
<img src="image.jpg" alt="A beautiful sunset">
```
In this example:
- `src="image.jpg"` specifies the image file to display.
- `alt="A beautiful sunset"` provides alternative text for accessibility.

---

##### **Common HTML Attributes**

Here are some of the most frequently used attributes that developers encounter:

1. **`src` (Source):**
   - Specifies the URL or file path of an image, video, or iframe content.
   - Example:
     ```html
     <img src="logo.png" alt="Company Logo">
     ```
   - Explanation: This sets the source of the image to "logo.png" and provides an alternative text "Company Logo."

2. **`href` (Hyperlink Reference):**
   - Defines the destination URL for an anchor (`<a>`) tag, creating a clickable link.
   - Example:
     ```html
     <a href="https://www.example.com">Visit Example</a>
     ```
   - Explanation: This makes "Visit Example" a clickable link that directs users to "https://www.example.com."

3. **`alt` (Alternative Text):**
   - Describes the content of an image for accessibility, shown when the image cannot be loaded or for screen readers.
   - Example:
     ```html
     <img src="image.jpg" alt="A beautiful sunset">
     ```
   - Explanation: This provides a description of the image for users with visual impairments.

4. **`class` (Class Attribute):**
   - Assigns one or more class names to an element, used for styling or JavaScript interaction.
   - Example:
     ```html
     <div class="container">
       <p>Welcome to our website!</p>
     </div>
     ```
   - Explanation: The `class="container"` assigns the "container" class to the `<div>`, which can be targeted by CSS or JavaScript.

5. **`id` (ID Attribute):**
   - Uniquely identifies an element on the page, useful for styling or DOM manipulation.
   - Example:
     ```html
     <button id="submitBtn">Submit</button>
     ```
   - Explanation: The `id="submitBtn"` assigns a unique identifier to the button, useful for targeting in JavaScript.

6. **`type` (Input Type):**
   - Specifies the type of an input element, determining how it behaves and what kind of data it accepts.
   - Example:
     ```html
     <input type="email" placeholder="Enter your email">
     ```
   - Explanation: The `type="email"` specifies that the input field expects an email address.

7. **`value` (Form Value):**
   - Sets or gets the value of form elements like inputs and buttons.
   - Example:
     ```html
     <input type="text" value="Default Text">
     ```
   - Explanation: The `value="Default Text"` sets the initial value of the text input field.

---

#### **Key Points**

- HTML attributes modify how elements behave or display content on the webpage.
- Some common attributes include `src`, `href`, `alt`, `class`, `id`, `type`, and `value`.
- Attributes are essential for improving accessibility (e.g., `alt`), functionality (e.g., `href`), and styling (e.g., `class`, `id`).
