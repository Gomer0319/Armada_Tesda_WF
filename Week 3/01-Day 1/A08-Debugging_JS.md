### **Assignment: Debug and Fix JavaScript Code**

Your task is to practice debugging and fixing JavaScript code with issues related to variables, data types, and operators. The goal is to identify and correct the errors in the provided program, ensuring it functions as expected. Debugging is an essential skill in programming and helps ensure your code works efficiently.

---

#### **Estimated Time to Completion:** 30–45 minutes  
#### **Level of Complexity:** Beginner  

---

### **Instructions**

1. Review the broken JavaScript program provided below.  
2. Debug the program by identifying and fixing the errors related to:  
   - Variable declaration and initialization.  
   - Data type mismatches.  
   - Operator usage.  
3. Use **[jsbin.com](https://jsbin.com/)** to test and debug your code. It’s an online tool that allows you to edit, run, and view the results of JavaScript programs directly in your browser.  
   - Copy the provided code into the JavaScript section of JSBin.  
   - Use the **Console** tab in JSBin to view the program’s output and identify any issues.  
4. Once corrected, the program should:  
   - Calculate the total price of items in a shopping cart.  
   - Apply a discount if the total price exceeds a certain threshold.  
   - Display the total price after applying the discount.  
5. Save the final version of your fixed program.

---

#### **Code to Debug**

```javascript
// Variables
let items = [10, 20, "30", 40]; // Array of prices
let discount = 0.1; // Discount rate (10%)
let totalPrice = 0;

// Calculate the total price
for (let i = 0; i < items.length; i++) {
  totalPrice += items[i]; // Add each item to totalPrice
}

// Apply discount if total price is above 100
if (totalPrice > 100) {
  let discountedPrice = totalPrice * discount;
  totalPrice = totalfries - discountedPrice;
}

// Display the final price
console.log("The final price is: " + totalPrice);
```

---

### **Evaluation Criteria & Learning Objectives**

#### **Learning Objectives:**  
- Understand the importance of proper variable declaration and initialization.  
- Practice fixing logical and semantic errors in code.  
- Apply operators effectively to solve real-world programming problems.  

#### **Evaluation Criteria:**  
1. Debugging: The program runs without syntax or logical errors.  
2. Accuracy: The program calculates the total price and applies the discount correctly.  
3. Clean Code: The code follows best practices, including appropriate comments and variable naming.

---

### **Directions**

#### **Assignment Requirements (MVP)**

1. Debug the provided JavaScript program to:  
   - Fix variable declarations and ensure proper initialization.  
   - Correct any data type mismatches (e.g., numbers vs. strings).  
   - Ensure operators are used correctly in calculations.  

2. The final output should display the correct total price, including any applied discount.  

3. Use **jsbin.com** to debug your code step by step:
   - Start by pasting the code into the JavaScript editor.
   - Use `console.log()` to monitor the program's behavior and fix errors incrementally.

#### **Stretch Requirements:**

- Modify the program to display a detailed breakdown of the calculation, including:  
  - The original total price.  
  - The discount applied (if any).  
  - The final price.  
- Allow the user to add more items to the `items` array dynamically using `prompt()`.

---

### **Submission Guidelines**

1. Save your fixed program in a file named:  
   **lastname_firstname_debugging.js**  
   (e.g., **smith_john_debugging.js**).  
2. Submit the `.js` file via the designated platform or email it to your instructor with the subject line:  
   **"Debugging Assignment Submission."**

---

### **Important Notes**  
- Focus on identifying and fixing errors step by step.  
- Use `console.log()` statements to check your fixes at different stages of debugging.  
- Avoid advanced JavaScript features; stick to the basics covered in lessons so far.  
- Testing your code on **[jsbin.com](https://jsbin.com/)** can make the debugging process faster and more interactive.
