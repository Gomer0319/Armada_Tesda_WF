

### **Adding Style: Fonts, Colors, and Sizes**

#### **Developmental Outcome**  
By the end of this lesson, learners will:  
1. Understand how to style text with properties like font-family, font-size, and color.  
2. Be able to apply background colors and adjust text and background contrast for better readability.  
3. Learn how to use units (e.g., px, em, rem) for font sizes and spacing.  
4. Understand the practical use cases of common CSS properties for fonts, colors, and sizes.  

---

#### **Bringing Your Webpage to Life**  

Now that we know how to target elements with CSS selectors, it’s time to start adding some personality to our webpage! Just like how we dress ourselves to reflect our style, we use **CSS properties** to define how the content of a webpage looks. This includes choosing fonts, colors, and adjusting sizes. These properties make a page visually appealing and can improve the user experience.

In this lesson, we’ll explore some of the most common properties used to style text and layout: **fonts**, **colors**, and **sizes**. These are essential tools for making your webpage readable, attractive, and user-friendly.

---

#### **Styling Fonts: Making Text Stand Out**  

The way your text looks can make a big difference in how users interact with your content. Here are the most commonly used font-related properties:

1. **font-family**:  
   - The `font-family` property defines the typeface of your text. You can use generic font families (like `serif`, `sans-serif`) or specific fonts (like `Arial`, `Times New Roman`).
   - **Use Case**:  
     - When you want your website to look consistent with a particular design.
   - **Example**:  
     ```css
     p {
       font-family: 'Arial', sans-serif;
     }
     ```
     - This makes the text of all `<p>` (paragraph) elements display in Arial, with sans-serif as a fallback if Arial isn’t available.

2. **font-size**:  
   - The `font-size` property controls the size of the text. You can use values in pixels (`px`), percentages (`%`), or relative units like `em` and `rem`.
   - **Use Case**:  
     - When you want to control how big or small your text appears to ensure readability across different devices.
   - **Example**:  
     ```css
     h1 {
       font-size: 36px;
     }
     ```
     - This will set the text size of `<h1>` elements to 36px.

3. **font-weight**:  
   - The `font-weight` property defines how thick or thin the text should be. You can use values like `normal`, `bold`, or specific numeric values (100 to 900).
   - **Use Case**:  
     - To make text bold for emphasis or styling.
   - **Example**:  
     ```css
     h2 {
       font-weight: bold;
     }
     ```
     - This makes all `<h2>` headings bold.

4. **font-style**:  
   - The `font-style` property allows you to apply styles like italics to your text.
   - **Use Case**:  
     - When you want to emphasize or create a specific look for certain text.
   - **Example**:  
     ```css
     em {
       font-style: italic;
     }
     ```
     - This makes any text inside `<em>` tags italic.

---

#### **Colors: Adding Vibrancy to Your Page**  

Color is an essential element in design, helping create mood and ensuring readability. Here are the key properties related to color:

1. **color**:  
   - The `color` property changes the text color.
   - **Use Case**:  
     - To make text more readable or add style to important parts of the page (e.g., headings or links).
   - **Example**:  
     ```css
     p {
       color: #333333;
     }
     ```
     - This changes the text color of all paragraphs to a dark grey.

2. **background-color**:  
   - The `background-color` property sets the background color for elements.
   - **Use Case**:  
     - To highlight sections or make a design more vibrant.
   - **Example**:  
     ```css
     header {
       background-color: #f0f0f0;
     }
     ```
     - This sets the background color of the `<header>` element to light grey.

3. **contrast and readability**:  
   - It’s essential to make sure your text has good contrast with its background to ensure readability.
   - **Use Case**:  
     - If you want users to easily read text on your page, use sufficient contrast between text color and background.
   - **Example**:  
     ```css
     body {
       color: #000000;
       background-color: #ffffff;
     }
     ```
     - This ensures black text on a white background for high readability.

---

#### **Sizes: Making Your Webpage Responsive**  

Adjusting text and element sizes is crucial for both visual appeal and accessibility. Here are the most commonly used properties for adjusting sizes:

1. **width and height**:  
   - The `width` and `height` properties control the size of an element.
   - **Use Case**:  
     - To make images or containers fit correctly within the design.
   - **Example**:  
     ```css
     img {
       width: 100%;
       height: auto;
     }
     ```
     - This makes sure the image fits the container's width while maintaining its aspect ratio.

2. **line-height**:  
   - The `line-height` property adjusts the spacing between lines of text.
   - **Use Case**:  
     - To make paragraphs more readable and avoid crowded text.
   - **Example**:  
     ```css
     p {
       line-height: 1.6;
     }
     ```
     - This increases the space between lines of text for better readability.

3. **padding and margin**:  
   - `padding` is the space inside an element, while `margin` is the space outside an element. These help create breathing room around text and other elements.
   - **Use Case**:  
     - To add space inside buttons, containers, or around elements for visual comfort.
   - **Example**:  
     ```css
     .button {
       padding: 10px 20px;
       margin: 15px;
     }
     ```
     - This adds padding inside the button and margin outside the button.

---

#### **Key Takeaways**  

- **Fonts**:  
   - Use `font-family`, `font-size`, `font-weight`, and `font-style` to control the look of your text and make it readable and appealing.  
- **Colors**:  
   - Use `color` and `background-color` to add vibrancy to your webpage and ensure text readability through contrast.  
- **Sizes**:  
   - Use `width`, `height`, `line-height`, `padding`, and `margin` to adjust the size and spacing of elements for better design and user experience.  
