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
