# FE Tasks, 201101

This is a set of technical aptitude tests for front end development. 

Work is organised in the `src` folder.

If you are attempting the bonus tasks 5 & 6:
- Feel free to use any build tools of your choice for compiling sass to css.
- Feel free to use any testing frameworks of your choice when unit testing your work.
- Please make “npm test" run your tests and "npm run build" build your assets.

## Tasks

1. Builds a JavaScript function that checks if a supplied word is a palindrome (reads the same backwards as forwards, e.g. kayak, rotator, radar etc). if the word is a palindrome, function returns `true`, otherwise it returns `false`.

2. Builds an HTML page that holds a card which contains:
  - An image
  - The heading "An Introduction to the Biggest Mysteries of the Cosmos"
  - A Description "This course introduces what we know about the universe, before exploring four key mysteries that are the focus of cutting-edge research in cosmology."
  - A price

Example of a card: 
![Card example](https://github.com/davidtrussler/NS_FE-test/blob/main/card.png "Card example")

3. Builds styling to support the card built in task 2 using SCSS and BEM naming conventions.
  - run `sass --watch src/styles/styles.scss:src/styles/styles.css` to use in development

4. In Javascript (ES5 or ES6): given an array of objects:

```
var people = [ { name: "Bob", age: 29 }, { name: "Alice", age: 42, }, { name: "Greg", age: 23 }, { name: "Jean", age: 50 } ];
```

  - 4.1 Order the people by age in decending order
  - 4.2 Order the people by name alphabetically A-Z
  - 4.3 Pull just the ages into a new array

5. Bonus: Cover the javascript functions you have written with unit tests.

6. Bonus: Include build tools/packages to test javascript and compile your scss into css.

