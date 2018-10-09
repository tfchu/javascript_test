// inheritance: one object gets access to the properties and methods of another object
// classical inheritance: java, c++, c#, ...
// prototypal inheritance: javascript
// all objects in javascript has proto property - a reference to another object
/*
    obj     proto   proto (prototype chain)
    prop1   prop2   prop3

    obj.prop1 -> prop1 property in obj
    obj.prop2 -> obj does not have prop2, go to "proto" and finds prop2
    obj.prop3 -> obj and its direct proto does not have prop3, go to proto's proto and finds prop3
    note. no need to use obj.proto.proto.prop3
    note. obj2 can share the same proto as obj, and "obj2.prop2" is the same property as "obj.prop2"
*/

var person = {
    firstname: 'Default', 
    lastname: 'Default', 
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John', 
    lastname: 'Doe', 
}

// NEVER use '__proto__' in real application, cause performance issue, demo only!!
john.__proto__ = person;
console.log(john.getFullName());    // this refers to the obj that originates the function, i.e. "john"
console.log(john.firstname);        // prototype chain, find object "john"'s firstname propery, NOT prototype's

// NEVER use '__proto__' in real application, cause performance issue, demo only!!
// prototype of each types
// go to developer tool, then type e.g. a.__proto__.: show properties of the __proto__ object
a = {};                                 // an object
console.log({}.__proto__);              // Object {}: the parent object
b = function () { };                    // a function
console.log(b.__proto__);               // function Empty() {}: parent of all functions
console.log(b.__proto__.__proto__);     // Object {}
c = [];                                 // an array
console.log(c.__proto__);               // []: parent of all array objects
console.log(c.__proto__.__proto__);     // Object {}: the parent object

// reflection: an object can look at itself, list and change its properties/methods
for (var prop in john) {                        // loop through all properties in john
    if (john.hasOwnProperty(prop)) {            // print only properties under john, not its prototypes. properties in Parent Object{} not printed
        console.log(prop + ': ' + john[prop]);
    }
}

// application of reflection: use extend() from underscore.js
// find "var createAssigner"
var jane = {
    address: '111 Main st.', 
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}
var jim = {
    getFirstName: function() {
        return firstname;
    }
}
_.extend(john, jane, jim);      // add properties from jane, jim to john
console.log(john);

// 'new' keyword: an javascript operator
// like java: var john = new Person();
// this example shows how to create an object via 'new' a function (function constructor)
// function constructor: a normal function used to construct objects
console.log('FUNCTION CONSTRUCTOR');
function Person(firstname, lastname) {
    console.log(this);                          // empty object with type Person
    this.firstname = firstname; 
    this.lastname = lastname; 
    console.log('this function is invoked!');   // executed
}
// new: create empty object, like var john = {};
// Person(): invokes function, its execution context creates variable 'this', which points to the new empty object
// if 'Person' function returns another object, then the returned value is assigned to 'john'
// if 'Person' function does NOT return (this case), then return the object that 'this' points to before starting execution
var john = new Person('John', 'Doe');    
console.log(john);

// comparison: 'new' is NOT used
var john1 = Person('John', 'Doe');  // 'this' now points to Window object, last line also gets executed
console.log(john1);                 // undefined

// function constructor prototype
// variables that all functions get: NAME, CODE (invokable), prototype, ... 
// prototype variable is used only by the 'new' operator
console.log('FUNCTION CONSTRUCTOR PROTOTYPE');
console.log(john.__proto__);
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}
console.log(john.getFormalFullName());

// good practice: 
// properties set inside function constructor because they are often different values 
// methods set in prototype as they are usually the same
// each copy of object takes memory space, if methods are inside function constructor, it wastes memory
// putting methods in propotype means 1 copy of this method regardless of number of objects created
