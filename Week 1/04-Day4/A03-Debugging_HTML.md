### **Assignment: Debugging Errors and Applying Best Practices**

In this assignment, you will work with a poorly structured HTML document. Your task is to identify and fix errors such as missing closing tags, incorrect usage of semantics, and improper application of the PCS (Parent-Child-Sibling) relationship. This will help reinforce best practices in structuring HTML documents.

#### **Estimated Time to Completion:** 45 minutes  
#### **Level of Complexity:** Beginner

---

### **Instructions**

1. Carefully review the provided HTML document.
2. Identify and fix issues related to missing closing tags, improper semantics, and PCS relationships.
3. Make sure to apply best practices for clean and organized code.
4. Submit the corrected HTML file by the due date.

---

### **Evaluation Criteria & Learning Objectives**

- Demonstrate an understanding of proper HTML structure and semantics.
- Apply the PCS relationship when organizing HTML elements.
- Identify and fix common HTML errors such as missing closing tags.
- Ensure the corrected document follows best practices for clarity and maintainability.

---

### **Directions**

#### **Page Requirements (MVP)**

1. **Document Setup:**
   - Save your file as `lastname_firstname_debug.html`.
   - Include the `<!DOCTYPE html>` declaration and a `<head>` section with a `<title>` tag.

2. **Review the HTML Code:**
   - You will be provided with a HTML code that contains errors. Here's the HTML document to be debugged:

   ```html
   <!DOCTYPE html>
    <html>
    <head>
    <title>My Webpage</title>
    </head>
    <body>

    <header>
        <h1>Welcome to My Website</h1>
        <div class="nav">
        <a href="#">Home</a>
        <a href="#">About Us</A>
        <a href="#">Contact</a>
        </div>
    </header>

    <div class="content">
        <div>
        <h2>About Us</h3>
        <p>We are a company that specializes in web development and digital solutions.</p>
        </div>

        <div>
        <ul>
            <li>Web Design</li>
            <div>Web Development</div>
            <li>SEO</li>
            <div>Marketing</div>
        </ul>
        </div>
        
        <div>
        <section>
            <h2>Our Services</h2>
            <p>We provide comprehensive digital solutions to businesses of all sizes.</p>
        </section>
        </div>

        <footer>
        <p>Contact us at <a href="mailto:contact@company.com">contact@company.com</a></p>
        <p>Follow us on social media</p>
        <div class="social">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
        </footer>

    </div>

    <aside>
        <h3>Latest News</h3>
        <p>Check out our latest blog post on digital marketing trends.</p>
    </aside>

    <div>
        <h2>Testimonials</h2>
        <p>See what our clients have to say about our services.</p>
        <section>
        <blockquote>“The team at MyWeb is exceptional! Highly recommended.”</blockquote>
        <footer>- Jack Dude, CEO</footer>
        </section>
        <section>
        <blockquote>“Best web design services we’ve had.”</blockquote>
        <footer>- Jean Green, Founder</footer>
        </section>
    </div>

    </body>
    </html>
    ```

   
3. **Fix the Issues:**
   - Correct any missing or mismatched closing tags (e.g., for `<div>`, `<ul>`, `<li>`, etc.).
   - Replace any non-semantic elements with appropriate semantic tags (e.g., replace `<div>` with `<section>`, `<header>`, etc. where appropriate).
   - Organize the HTML document according to the PCS relationship, ensuring that elements are nested logically and meaningfully.
   
4. **Good Practices:**
   - Ensure your code is well-indented for readability.
---

#### **Stretch Requirements**
If you want to challenge yourself further, consider adding these features:

1. **Semantic Improvements:**
   - Use additional semantic tags such as `<article>`, `<aside>`, or `<footer>` where appropriate to further improve the structure of the document.

---

### **Submission Guidelines**

1. Save your completed file as `lastname_firstname_debug.html`.
2. Submit the file via the designated platform or email it to your instructor with the subject line: "HTML Assignment: Debugging Errors."

---

### **Important Notes**
- Focus on fixing structural and semantic issues in the HTML code.
- Avoid making changes unrelated to the issues mentioned in the assignment (e.g., styling or adding unnecessary elements).
- Use comments to clearly mark areas where you’ve made corrections.