### **Knowledge Check Solutions: Conditional Statements and Loops**


### **1. Conditional Logic: Deciding What to Wear**
**Code:**
```javascript
let weather = "rainy";

if (weather === "sunny") {
  console.log("Wear sunglasses.");
} else if (weather === "rainy") {
  console.log("Carry an umbrella.");
} else if (weather === "snowing") {
  console.log("Wear a coat.");
} else {
  console.log("Stay prepared for anything.");
}
```

**Explanation:**  
The `if-else` chain checks the value of `weather` and executes the appropriate message based on the condition.

---

### **2. Loops: Counting Even Numbers**
**Code:**
```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(i); // Print even numbers
}
```

**Explanation:**  
The loop iterates from 1 to 20. The `if` condition checks if the number is odd, and the `continue` statement skips the rest of the loop body for odd numbers.

---

### **3. Combining Conditional Statements and Loops: Finding a Specific Value**
**Code:**
```javascript
let numbers = [3, 7, 12, 19, 21, 24];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    console.log(numbers[i]); // Print the number greater than 20
    break; // Stop the loop
  }
}
```

**Explanation:**  
The `for` loop iterates through the array, and the `if` condition checks for the first number greater than 20. Once found, it prints the number and exits the loop with `break`.

---

### **4. Ternary Operator: Simplifying Choices**
**Code:**
```javascript
let loggedIn = true;
let message = loggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
```

**Explanation:**  
The ternary operator evaluates the `loggedIn` condition. If true, it assigns "Welcome back!" to `message`; otherwise, it assigns "Please log in.".

---

### **5. Deciding the Right Loop**
**Chosen Loop: `for` Loop**

**Reason:**  
A `for` loop is suitable because we know the number of iterations (the length of the `tasks` array) and need to stop printing when a specific condition is met.

**Code:**
```javascript
let tasks = ["Buy groceries", "Clean the house", "Pay bills", "Call mom"];

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === "Pay bills") {
    break; // Stop the loop when the task is "Pay bills"
  }
  console.log(tasks[i]); // Print the task
}
```

**Explanation:**  
The loop iterates through the `tasks` array, printing each task. When it encounters "Pay bills", the `break` statement stops the loop.