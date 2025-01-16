### **Mastering Media Queries – Adapting Your Website to Every Screen**

#### **Developmental Outcomes:**
By the end of this lesson, trainees will be able to:
1. Understand the purpose and function of media queries in CSS.
2. Identify common screen resolutions and their use cases in media queries.
3. Write media queries to create responsive designs for multiple devices.
4. Recognize the role of responsive design in improving user experience.

---

### **Why Media Queries Matter**

In today’s world, websites are viewed on a variety of devices—phones, tablets, laptops, and large monitors. Each device has a different screen size, which can lead to layout issues if your website doesn’t adapt. This is where media queries step in. They allow you to apply CSS rules based on the characteristics of the user’s device, such as screen width, height, or resolution.

Media queries solve problems like:
- Ensuring text and images are readable and properly sized on smaller screens.
- Preventing layouts from breaking on larger or smaller devices.
- Enhancing user experience by adapting the design to the user’s device.

---

### **How Media Queries Work**

A media query is a CSS technique that applies styles only when certain conditions are met. It uses the `@media` rule, followed by a condition, to target specific devices or screen sizes. Here’s the basic syntax:

```css
@media (condition) {
  /* CSS rules here */
}
```

#### **Example:**
To apply a style only when the screen width is less than 600px:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

### **Common Screen Sizes in Media Queries**

Here are some popular screen resolutions and their typical use cases:

| **Device Type** | **Resolution (Width)** |
|------------------|-------------------------|
| Phones           | Up to 480px            |
| Tablets          | 481px to 768px         |
| Small Laptops    | 769px to 1024px        |
| Desktops         | 1025px and above       |

These ranges are commonly used, but you can customize them based on your design needs.

---

### **CSS Example: Applying Media Queries for Phone, Tablet, and Desktop**

Here’s how you can use media queries to style a webpage for three common device resolutions: phones, tablets, and desktops.

#### **HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Query Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to Responsive Design</h1>
  </header>
  <main>
    <p>This page changes style depending on the device size!</p>
  </main>
  <footer>
    <p>&copy; 2025 Responsive Web Design</p>
  </footer>
</body>
</html>
```

---

#### **CSS with Media Queries:**
```css
/* Base Styles (applies to all devices) */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  color: #333;
}

header, footer {
  background-color: #007BFF;
  color: white;
  text-align: center;
  padding: 20px;
}

main {
  padding: 20px;
  text-align: center;
}

/* Media Query for Phones (max-width: 480px) */
@media (max-width: 480px) {
  body {
    background-color: #f0f8ff; /* Light blue background */
  }
  header, footer {
    font-size: 16px; /* Smaller text for compact screens */
  }
  main {
    font-size: 14px; /* Adjust main content font size */
  }
}

/* Media Query for Tablets (max-width: 768px) */
@media (max-width: 768px) {
  body {
    background-color: #e6ffe6; /* Light green background */
  }
  header, footer {
    font-size: 18px; /* Slightly larger text for tablet screens */
  }
  main {
    font-size: 16px;
  }
}

/* Media Query for Desktops (min-width: 769px) */
@media (min-width: 769px) {
  body {
    background-color: #fffbe6; /* Light yellow background */
  }
  header, footer {
    font-size: 20px; /* Larger text for desktops */
  }
  main {
    font-size: 18px;
  }
}
```

---

### **How This Works:**
1. **Base Styles**: These are the default styles that apply to all devices unless overridden by a media query.
2. **Phone (max-width: 480px)**: Styles are applied when the screen width is 480px or less. This ensures a user-friendly experience on smaller screens like smartphones.
3. **Tablet (max-width: 768px)**: Styles are applied for screens between 481px and 768px, making content more legible and layouts cleaner for tablets.
4. **Desktop (min-width: 769px)**: Styles for larger screens ensure proper spacing, readability, and design consistency.

---

### **Key Takeaways:**
1. Media queries make your website responsive, ensuring it looks great on any device.
2. Common screen sizes like phones, tablets, and desktops have different needs, which you can address with targeted styles.
3. Using media queries enhances user experience and ensures your design is future-proof for a variety of devices.
4. Experiment with media queries to see how layouts adapt in real-time.

