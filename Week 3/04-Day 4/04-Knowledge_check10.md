### **Knowledge Check: DOM and Traversing**

#### 1. **What does the `getElementById()` method return?**  
a) An array of elements with the specified class  
b) The first element with the specified ID  
c) A collection of all elements on the page  
d) All elements with the specified tag name

#### 2. **Which method would you use to select the first element with the class `item`?**  
a) `getElementsByClassName("item")`  
b) `querySelector(".item")`  
c) `querySelectorAll(".item")`  
d) `getElementById("item")`

#### 3. **How do you access the first child of an element?**  
a) `element.firstElementChild`  
b) `element.firstChild`  
c) `element.nextElementSibling`  
d) `element.previousElementSibling`

#### 4. **Which of the following will return the previous sibling of an element?**  
a) `element.previousElementSibling`  
b) `element.firstElementChild`  
c) `element.parentElement`  
d) `element.nextElementSibling`

#### 5. **Which of the following is a correct way to change the text content of an element with the ID `title`?**  
a) `document.getElementById("title").content = "New Title";`  
b) `document.getElementById("title").textContent = "New Title";`  
c) `document.getElementById("title").innerHTML = "New Title";`  
d) Both b) and c) are correct

#### 6. **What is the purpose of the `classList.add()` method?**  
a) It removes a class from an element  
b) It adds a class to an element  
c) It changes the text content of an element  
d) It selects all elements with a specific class

#### 7. **Which method would you use to get a collection of all elements with the class `highlight`?**  
a) `getElementById("highlight")`  
b) `getElementsByClassName("highlight")`  
c) `querySelectorAll(".highlight")`  
d) Both b) and c)

#### 8. **What does the `parentElement` property return?**  
a) The next sibling of an element  
b) The previous sibling of an element  
c) The parent node of the current element  
d) The first child of the current element

#### 9. **Bonus Question: What would the following code snippet do?**  
```javascript
let firstItem = document.querySelector(".item");
let parent = firstItem.parentElement;
parent.style.backgroundColor = "lightgray";
```
a) Change the background color of the first item with the class `item`  
b) Change the background color of the parent element of the first item with the class `item`  
c) Change the text color of the first item with the class `item`  
d) Change the background color of all items with the class `item`

#### 10. **Bonus Question: Which method would you use to select all `<p>` elements on a page?**  
a) `getElementsByTagName("p")`  
b) `querySelector("p")`  
c) `querySelectorAll("p")`  
d) Both a) and c)

---

### **Answer Key:**
1. b) The first element with the specified ID  
2. b) `querySelector(".item")`  
3. a) `element.firstElementChild`  
4. a) `element.previousElementSibling`  
5. d) Both b) and c) are correct  
6. b) It adds a class to an element  
7. d) Both b) and c)  
8. c) The parent node of the current element  
9. b) Change the background color of the parent element of the first item with the class `item`  
10. d) Both a) and c)