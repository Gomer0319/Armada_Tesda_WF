### **Knowledge Check: JS Basics**

1. Which of the following best describes JavaScript?  
   a) A tool for designing web page layouts.  
   b) A programming language used to add interactivity to web pages.  
   c) A file format for storing images.  
   d) A database for managing web data.

2. How can JavaScript be added to an HTML file?  
   a) Using a `<style>` tag.  
   b) By linking a `.css` file.  
   c) Using a `<script>` tag.  
   d) By embedding a `.js` file into the `<title>` tag.

3. Which keyword is used to declare a variable that cannot be reassigned?  
   a) `var`  
   b) `let`  
   c) `const`  
   d) `assign`

4. What is the output of the following code?  
   ```javascript
   let x = 10;
   x = 20;
   console.log(x);
   ```  
   a) `10`  
   b) `20`  
   c) `undefined`  
   d) Error

5. Which of the following is a primitive data type in JavaScript?  
   a) Object  
   b) String  
   c) Array  
   d) Function  

6. What is the result of the following code?  
   ```javascript
   let a = null;
   console.log(typeof a);
   ```  
   a) `null`  
   b) `object`  
   c) `undefined`  
   d) `number`

7. Which operator is used to calculate the remainder of a division?  
   a) `+`  
   b) `%`  
   c) `*`  
   d) `/`  

8. What is the result of this comparison?  
   ```javascript
   5 === "5"
   ```  
   a) `true`  
   b) `false`  
   c) `undefined`  
   d) Error  

#### **Bonus Question (Extra):**  
What will the following code output, and why?  
```javascript
let x = 5 + "5";
console.log(x);
```  
a) `10`  
b) `55`  
c) Error  
d) `undefined`

---

### **Answer Key**  
1. b) A programming language used to add interactivity to web pages.  
2. c) Using a `<script>` tag.  
3. c) `const`  
4. b) `20`  
5. b) String  
6. b) `object`  
7. b) `%`  
8. b) `false`  

**Bonus Answer:** b) `55`.  
Explanation: When a number is added to a string, JavaScript converts the number to a string and concatenates the two, resulting in `"55"`.  