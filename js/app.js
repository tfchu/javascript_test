// Objects
console.log('OBJECT');
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
console.log('NAMESPACE');
// namespace: container for variables/functions, mainly to separate those with the same name
// exmaple in javascript is global variables with the same name in differnt javascript files
var english = {greet: 'Hello!'};
var spanish = {greet: 'Hola!'};
console.log(english);

// JSON: JavaScript Object Notation
console.log('JSON');
// javascript object to JSON string
// {"firstname":"Tony","lastname":"Chu","isProgrammer":true,"address":{"street":"111 Main st"},"address2":{"street":"333 Second st"}}
console.log(JSON.stringify(tony));

// json to javascript object
var jsonValue = JSON.parse('{ "firstname": "Tony", "isProgrammer": true}'); 
console.log(jsonValue);

// first-class functions: anything you can do with other types, you can do with functions
console.log('FUNCTION');
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

// pass-by-what
console.log('PASS-BY-VAR vs PASS-BY-REF');
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

// what is "this"
console.log('what is "THIS"');
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

// array: dynamic type, which holds any type
console.log('ARRAY');
var arr = [];           // or new Array()
var arr1 = [1, 2, 3];   // array with values
var arr2 = [
    1,                                  // number
    false,                              // boolean
    {                                   // object
        name: 'Tony', 
        address: '111 Main St.'
    }, 
    function(name) {                    // function object
        var greeting = 'Hello ';
        console.log(greeting + name);
    }, 
    'hello'                             // string
]
console.log(arr2);
arr2[3](arr2[2].name);                  // 'Hello Tony': invoke the function, and pass object property to it

// arguments: the parameters you pass to a function
console.log('ARGUMENTS');
// arguments keyword: a list of arguments passed to the function
// parameter is "undefined" (false) if no value is passed
// ...name: array "name" holds extra parameters not explicitly defined in function
function greet3(firstname, lastname, language, ...others) {    // some modern browser supports language = 'en' as default value
    language = language || 'en';        // if undefined (false), then default to 'en'

    if (arguments.length === 0){
        console.log('Missing parameers');
        return;                         // do nothing
    }
    console.log(arguments);
    console.log(others);                // "others" array holds extra parameters
    console.log('firstname: ' + firstname + ', lastname: ' + lastname + ', language: ' + language);
}
greet3();
greet3('John', 'Doe', 'en');
greet3('John', 'Doe', 'en', '111 Main St', 'New York');

// function overloading: more function with the same name but different signature (param type, number, ...)
// js does NOT have overloading. Use code pattern to overcome
console.log('NO FUNCTION OVERLOADING');
function greet4(firstname, lastname, language) {
    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}
function greetEnglish(firstname, lastname) {
    greet4(firstname, lastname, 'en');
}
function greetSpanish(firstname, lastname) {
    greet4(firstname, lastname, 'es');
}
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

// automatic semicolon (note. semicolon is optional but recommended)
// carriage return after "return" causes auto-semicolon insertion, object followed is unreachable 
// fix: move "{" after "return": return {
// recommended to put "{" after a keyword
console.log('AUTOMATIC SEMICOLON');
function getPerson() {
    return
    {
        firstname: 'Tony';
    }
}
console.log(getPerson());

// IIFE (Immediately-invoked function expressions)
console.log('IIFE');
// regular function object
var greeting2 = function(name) {
    return 'Hello ' + name;
};
console.log(greeting2);             // the function
console.log(greeting2());           // invoke the function
console.log(greeting2('John'));     // invoke the function with parameter
// IIFE
var greeting3 = function(name) {
    return 'Hello ' + name;
}('John');
console.log(greeting3);             // invoke the function with parameter
// IIFE
// function needs a name. use () to bypass the name (parser no longer sees "function" at beginning so no error)
// then use IIFE to invoke it, the invoke () can be outside of the first ()
(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}('John'));                         // or })('John);