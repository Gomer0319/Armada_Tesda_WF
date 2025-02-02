### **Day 2: The Body and HTML Elements**

#### **Developmental Outcome**
By the end of this lesson, learners will:
1. Understand the role of the `<body>` tag in an HTML document.
2. Identify and describe the basic components of an HTML element.
3. Recognize the significance of structuring content within the `<body>` tag.

---

#### **Introduction: The Body of a Webpage**
Imagine a webpage as a house. The house has a framework that holds it together, rooms that serve specific purposes, and decorations that make it appealing. In HTML, the `<body>` tag is like the main living space of the house—it contains all the visible content of the webpage that users interact with.

The `<body>` tag resides within the broader structure of an HTML document. While the `<head>` tag contains information about the webpage (metadata), the `<body>` tag holds everything users see and experience, including text, images, tables, forms, and links.

#### **What is the `<body>` Tag?**
The `<body>` tag:
- Encapsulates the main content of an HTML document.
- Appears after the `<head>` tag and within the `<html>` tag.
- Contains all elements that are rendered in the browser.

Here's a simple example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Page!</h1>
    <p>This is where all visible content goes.</p>
  </body>
</html>
```

Actual output in the browser:

<img src="Assets/actual_body_output.png" alt="actual browser body">

In this example, the `<h1>` and `<p>` tags are part of the `<body>`, making them visible on the webpage.

---

#### **HTML Elements: The Building Blocks**
Now that we’ve identified the `<body>` as the container for webpage content, let’s discuss what fills it—HTML elements.

#### **What is an HTML Element?**
An HTML element is the basic unit of content in an HTML document. It comprises:
1. **Opening Tag:** Marks the start of an element. E.g., `<h1>`.
2. **Content:** The information or structure displayed on the page. E.g., `Welcome to My Page!`.
3. **Closing Tag:** Marks the end of an element. E.g., `</h1>`.

Example of an HTML element:
```html
<h1>Welcome to My Page!</h1>
```
- The `<h1>` tag is the opening tag.
- The text "Welcome to My Page!" is the content.
- The `</h1>` tag is the closing tag.

#### **Self-Closing Tags**
Some elements do not require a closing tag. These are known as self-closing or void elements. 

Example:
```html
<img src="image.jpg" alt="An example image">
```

#### **Attributes: Adding More Detail**
Attributes provide additional information about an element. They are placed inside the opening tag and consist of a name and a value.

Example:
```html
<a href="https://www.example.com">Visit Example</a>
```
- The `href` attribute specifies the URL the link points to.
- The text "Visit Example" is what the user sees and clicks.

#### **A Hint About Hierarchy**
HTML elements often have relationships with one another, forming a hierarchy within the document. For example, some elements act as parents containing other elements, while others are siblings at the same level. This structure is key to understanding how content is organized and styled.

We will discuss these relationships in detail—parent, child, and sibling elements—in an upcoming lesson.

---

#### **Key Takeaways**
- The `<body>` tag contains all the visible content of a webpage.
- HTML elements are the building blocks of a webpage, consisting of an opening tag, content, and a closing tag (or self-closing for certain elements).
- Attributes add more detail to elements, while hierarchy (parent, child, and sibling relationships) allows for structured and organized content.

