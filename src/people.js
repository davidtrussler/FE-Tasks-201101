var people = [
	{ name: "Bob", age: 29 }, 
	{ name: "Alice", age: 42 }, 
	{ name: "Greg", age: 23 }, 
	{ name: "Jean", age: 50 }
];

// Order the people by age in decending order
people.sort(function(a, b) {
	return b.age - a.age; 
}); 

// Order the people by name alphabetically A-Z
people.sort(function(a, b) {
	if (a.name < b.name) {
		return -1; 
	}

	if (a.name > b.name) {
		return 1; 
	}

	return 0;
});

// Pull just the ages into a new array
let ages = people.map(person => person.age); 
