### **HTML and Its Structure**

#### **Learning Objectives**  

By the end of this lesson, learners will be able to:  

- **Explain** the role of HTML in web development.  
- **Identify** the basic structure of an HTML document.  
- **Describe** the importance of HTML in creating web pages and its role as the foundation for web content.  


<*Insert video here explaining the training course, what HTML, CSS, and JS are (Brief), Introduction of HTML* >

#### **Building Blocks of the Web: Understanding HTML**

Think of HTML (HyperText Markup Language) as the skeleton of a web page. Just like how bones give structure to the body, HTML provides the basic structure for web content. It’s the first step in creating a webpage, allowing browsers to display text, images, links, and other essential elements.

---

#### **What is HTML?**

HTML is the standard language used to create and design documents on the web. It's a **markup language**, meaning it uses tags to define different parts of a web page. These tags help browsers know how to display text, images, links, and other content.

- **Markup Language**: HTML uses **tags** to mark up elements of a page, such as headings, paragraphs, and images, so browsers can interpret them correctly.
- **Structure**: HTML defines the layout of a webpage by arranging elements into a readable format.
- **HyperText**: Refers to linking content within and across pages on the web, allowing users to navigate easily.

---

#### **Basic Structure of an HTML Document**

An HTML document follows a specific structure that includes essential components. Let’s break it down:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text on my webpage.</p>
    <a href="https://www.example.com">Click here to visit Example</a>
  </body>
</html>
```

**Here’s how each part works:**

1. **`<!DOCTYPE html>`**:  
   This declaration defines the document type and version of HTML being used (HTML5 in this case). It ensures that the browser renders the page correctly.

2. **`<html>`**:  
   This is the root element that contains all the content of the webpage.

3. **`<head>`**:  
   The `<head>` element contains metadata about the webpage, such as its title, character set, and links to external files (like stylesheets or scripts). It doesn’t display content on the webpage itself.

   - **`<title>`**:  
     The `<title>` tag sets the title of the webpage, which appears in the browser tab.

4. **`<body>`**:  
   The `<body>` tag contains the visible content of the webpage—this is where you add headings, paragraphs, images, links, and other elements that users interact with.

   - **`<h1>`**:  
     This is a heading tag, with `<h1>` representing the most important heading. It helps organize content into a hierarchical structure.
   
   - **`<p>`**:  
     The `<p>` tag is used for paragraphs of text, making content more readable and structured.
   
   - **`<a>`**:  
     The `<a>` tag defines hyperlinks, allowing users to navigate to other pages. The `href` attribute within the `<a>` tag specifies the destination URL.

---

#### **Why HTML Matters**

HTML is crucial for web development because it serves as the foundation for all web content. Every webpage you visit is built on HTML, whether it's a simple text page or a complex interactive site. Without HTML, browsers would have no way of understanding the content and displaying it properly.

- **Creating Structure**: HTML allows you to organize content in a structured way, making it easier for users to navigate.
- **Connecting Information**: With links (hyperlinks), HTML enables seamless navigation between different pages on the web.
- **Foundation for Other Technologies**: HTML is the first step in web development. It works in tandem with other technologies, such as **CSS** for styling and **JavaScript** for interactivity.

---

#### **Key Takeaways**

- **HTML (HyperText Markup Language)** is the language used to create the structure of webpages.
- **HTML Documents** are built with specific elements and tags to define the structure, content, and layout of a webpage.
- HTML defines the **head** and **body** sections, with the head containing metadata and the body holding visible content like headings, paragraphs, and links.
- HTML is essential because it enables browsers to render content and links pages together, forming the foundation for web development.