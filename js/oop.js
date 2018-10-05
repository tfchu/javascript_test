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

// NEVER use __proto__ in real application, cause performance issue, demo only!!
john.__proto__ = person;
console.log(john.getFullName());    // this refers to the obj that originates the function, i.e. "john"
console.log(john.firstname);        // prototype chain, find object "john"'s firstname propery, NOT prototype's

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