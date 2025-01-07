### **What's in the <head>?**

#### **Developmental Outcome**
By the end of this lesson, learners will:
1. Understand the role and purpose of the `<head>` section in an HTML document.
2. Identify key elements found in the `<head>` section and their functions.

---

#### **The Structure of an HTML Document: The Role of the `<head>`**

The `<head>` section is a crucial part of an HTML document, as it provides important information about the page. While the content inside the `<head>` is not visible on the webpage itself, it controls how the page behaves and interacts with the browser, search engines, and other external systems.

---

#### **Key Elements in the `<head>` Section**

1. **`<title>`**  
   The `<title>` tag defines the title of the webpage, which appears in the browser tab or window. It's an essential part of SEO (Search Engine Optimization) and helps users identify the page.
   ```html
   <title>My First Webpage</title>
   ```

2. **`<meta>`**  
   The `<meta>` tag is used for providing metadata about the page. It can include information like the character encoding, the page's description, and keywords for search engines.
   - **`<meta charset="UTF-8">`**: Specifies the character encoding (UTF-8 is widely used).
   - **`<meta name="description" content="A personal blog about web development">`**: Provides a description of the page's content for search engines.
   ```html
   <meta charset="UTF-8">
   <meta name="description" content="A personal blog about web development">
   ```

3. **`<link>`**  
   The `<link>` tag links external resources to the HTML document, such as stylesheets (CSS). It helps to connect the page to other resources like fonts or icons.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

4. **`<style>`**  
   The `<style>` tag allows you to embed CSS directly within the HTML document. This is useful for small projects or when quick styling is needed.
   ```html
   <style>
     body { font-family: Arial, sans-serif; }
   </style>
   ```

5. **`<script>`**  
   The `<script>` tag is used to include JavaScript code or link to external JavaScript files. While JavaScript is often placed at the bottom of the `<body>`, it can also be included in the `<head>` for configuring settings or linking to external libraries.
   ```html
   <script src="script.js"></script>
   ```

---

#### **Key Takeaways**

- The **`<head>`** section contains important elements like the title, metadata, external links to resources, and scripts that define the behavior and configuration of the page.
- The **`<title>`** tag defines the page's title seen in the browser tab.
- The **`<meta>`** tag provides essential metadata, like character encoding and page descriptions.
- The **`<link>`** tag is used to link external resources, such as CSS files, while **`<style>`** can be used to include internal CSS directly.
- The **`<script>`** tag is used to link or include JavaScript code, controlling the dynamic behavior of the page.