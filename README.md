# FE Tasks, 201101

This is a quick technical aptitude test for front end development. 
There is a src folder included in this package, try to organise your work in this folder.

If you are attempting the bonus tasks 5,6:
- Feel free to use any build tools of your choice for compiling sass to css.
- Feel free to use any testing frameworks of your choice when unit testing your work.
- Please make “npm test" run your tests and "npm run build" build your assets.

1. In Javascript (ES5 or ES6), build a function that checks if a word is a palindrome (reads the same backwards as forwards, e.g. kayak, rotator, radar etc). if the word is a palindrome, function should return true, else, false.

2. In HTML, build a page that holds a card which contains:
- An image (you can use a placeholder image from: https://place-hold.it/)
- The heading "An Introduction to the Biggest Mysteries of the Cosmos"
- A Description "This course introduces what we know about the universe, before exploring four key mysteries that are the focus of cutting-edge research in cosmology."
- A price

Example of a card: 

![Card example](https://github.com/davidtrussler/NS_FE-test/blob/main/card.png "Card example")

3. In SCSS, build styling to support the card that you have built in task 2 using BEM naming conventions.

4. In Javascript (ES5 or ES6): given an array of objects:

```
var people = [ { name: "Bob", age: 29 }, { name: "Alice", age: 42, }, { name: "Greg", age: 23 }, { name: "Jean", age: 50 } ];
```

- 4.1 Order the people by age in decending order
- 4.2 Order the people by name alphabetically A-Z
- 4.3 Pull just the ages into a new array

5. Bonus: Cover the javascript functions you have written with unit tests.

6. Bonus: Include build tools/packages to test javascript and compile your scss into css.
