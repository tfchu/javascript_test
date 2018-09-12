// create objects
var person = {};                        // or var person = new Object();
// add properties of primitive types
person.firstname = "Tony";              // or person["firstname"] = "Tony";
person.lastname = "Chu";                // or person["lastname"] = "Chu"; 
// show the object
console.log(person);                    // show the object
// access properties
console.log(person.lastname);           // or person["lastname"]
// add properties of object types
person.address = {};
person.address.street = '111 Main st';  // or person.address["street"] = '111 Main st'
// access properties
console.log(person.address.street);         // or person["address"]["street"]

// create object the easier way, space, new line are also ok
var tony = {
    firstname: 'Tony', 
    lastname: 'Chu', 
    isProgrammer: true, 
    address: {
        street: '111 Main st'
    }
};
// add another property
tony.address2 = {street: '333 Second st'}
console.log(tony);

// create a function
function greet(person){
    console.log('Hi ' + person.firstname);
}
greet(tony);        // there is no declaration about "tony" is a "person"
greet({firstname: 'Alice', lastname: 'Cheng'});     // object created on-the-fly

// fake namespaces
// namespace: container for variables/functions, mainly to separate those with the same name
// exmaple in javascript is global variables with the same name in differnt javascript files
var english = {greet: 'Hello!'};
var spanish = {greet: 'Hola!'};
console.log(english);

// JSON: JavaScript Object Notation
// javascript object to JSON string
// {"firstname":"Tony","lastname":"Chu","isProgrammer":true,"address":{"street":"111 Main st"},"address2":{"street":"333 Second st"}}
console.log(JSON.stringify(tony));

// json to javascript object
var jsonValue = JSON.parse('{ "firstname": "Tony", "isProgrammer": true}'); 
console.log(jsonValue);

// first-class functions: anything you can do with other types, you can do with functions
// function is a special type of object, with optional name, and invocable() code property
// greet1.name is "greet1" (name of the function)
function greet1() {
    console.log('hi');
}
greet1.person = 'Tony';         // add person property to the object (function)
console.log(greet1);
