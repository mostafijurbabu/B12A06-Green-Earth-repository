Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()?

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Answer :

1.                              a. var is Old style, function-scoped, hoisted. Often avoided in modern JS     because   of confusion.

    b. let is Modern, block-scoped, safer for variables that will change.

    c. const is Block-scoped, immutable reference, ideal for constants or objects that shouldn’t be reassigned.

2.  a. map() = Transform each element in an array into something new.A new array of the same length with transformed elements.When you want to create a new array based on the original array.

    b.forEach() = Iterate over an array and perform an action for each element.undefined (it does not create a new array).When you want side effects (like logging, updating DOM, etc.), not transforming the array.

    c.filter() = Filter elements based on a condition.A new array containing only the elements that satisfy the condition.When you want to remove unwanted elements and keep only the ones you need.

3.                        Arrow functions were introduced in ES6 (ECMAScript 2015) as a more concise way to write functions in JavaScript. They have a few key differences from traditional functions, both in syntax and behavior.

example: const add = (a, b) => {
return a + b;
}
or const add = (a, b) => a + b;

        Arrow Functions is shorter function syntax,preserve(this),callback functions (like map, filter, forEach).Arrow functions do not have their own arguments object. You can use rest parameters.

4. Destructuring assignment in ES6 (ECMAScript 2015) is a way to unpack values from arrays or properties from objects into distinct variables in a concise and readable manner.Destructuring makes code shorter, cleaner, and avoids repetitive access to array indices or object properties.

5. Template literals in ES6 are a new way to work with strings, making them more powerful and readable than traditional string concatenation.template literals are like a modern upgrade to strings in JavaScript: cleaner, shorter, and more powerful.
