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
// function is a special type of object, with optional "name", and invocable() "code" property (invoke by appeding ())
// greet1.name is "greet1" (name of the function)
function greet1() {
    console.log('hi');
}
greet1.person = 'Tony';         // add person property to the object (function)
console.log(greet1);

// function statement (no return)
// function statement stays in memory until it is called
greet2();               // can go before or after
function greet2() {
    console.log('hi');
}

// function expression (return a value, which is a function object)
// variable "anonymousGreet" needs to be assigned first, before calling it
var anonymousGreet = function() {
    console.log('hi');
}
anonymousGreet();       // must go after the assignment

// function as a parameter, then invoke it
function log(a) {
    a();
}
log(function() {
    console.log('hi');
})

// primitive types: pass by value (different location in memory with same value)
var a = 3;
var b;
b = a;
a = 2;
console.log(a);     // 2
console.log(b);     // 3
// objects (including functions): pass by reference (same location in memory)
var c = { greetings: 'hi'};
var d;
d = c;
c.greetings = 'hello';      // "mutate" an object: change the value. "immutable": cannot be changed
console.log(c.greetings);   // hello
console.log(d.greetings);   // hello
function changeGreeting(obj) {
    obj.greetings = 'hola';
}
changeGreeting(d);
console.log(c.greetings);   // hola
console.log(d.greetings);   // hola
c = { greetings: 'howdy' }; // "=" creates NEW object (new memory location), c now points to new location
console.log(c.greetings);   // howdy
console.log(d.greetings);   // hola

// "this"
console.log(this);          // global "window" object
function myfunc() {
    console.log(this);
    this.newvar = 'test';   // add new property to window object
}
myfunc();
console.log(newvar);        // call without using "this"

var c = {
    name: "The c object",   // property
    log: function() {       // method
        var self = this;    // "this" refers to the object "c" that the method sits in

        self.name = 'Updated c object';     // self is this
        console.log(self);

        var setname = function(newname) {
            self.name = newname;            // "this" now points to global "window" again, workaround is to use self
        }
        setname('c object updated again!');
        console.log(self)
    }
}
console.log(c.name);        // "The c object"
c.log();