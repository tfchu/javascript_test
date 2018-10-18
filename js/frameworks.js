// example: Moments.js, underscore.js, node.js, angular.js, jQuery
// github: https://github.com/topics/javascript
var q = $("ul");            // find all ul inside the DOM tree
var q = $("ul.people");     // find all ul with class 'people'
var q = $("ul.people li");  // find all li under ul with class 'people'
console.log(q)              // object array: jQuery.fn.init[3] -> line 139
                            // __proto__ has lots of functions: good to put functions in prototype
