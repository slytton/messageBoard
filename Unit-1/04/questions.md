* What are Angular expressions? How do they compare to tags from templating engines you've used before?
  * ** Angular expressions are a way to gain access to javascript from within the browser. They also allows you to do things like angular filters. Angular expressions seem much more powerful and open ended that handlebars.**


* What happens when you write invalid code in an expression? What type of error do you get?
  * ** You get an error in the browser console that provides a link with more information. **


* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
  * ** Angular filters are built in tools that modify data. They include: **
    1. **currency**
    1. **number**
    1. **date**
    1. **json**
    1. **etc ...**


* What's the syntax for filters?
  * `data | filter`


* Can you use more than one filter?
  * Yes


* We'll soon see how to create custom filters. What is a use case for a custom filter?
  * A custom filter would be useful if we wanted to perform the same modification on multiple pieces of data.
