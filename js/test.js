// only work on server side js (node-js), client side is unable to load entire folder
// run like 
// > node test.js
async = require('async');

var results = [];

// setTimeout(function () {
//     console.log("Task 1");
//     results[0] = 1;
//     setTimeout(function () {
//         console.log("Task 2");
//         results[1] = 2;
//         setTimeout(function () {
//             console.log("Task 3");
//             results[2] = 3;
//         }, 1000);
//     }, 2000);
// }, 3000);

// https://caolan.github.io/async/v3/
// async.series([
//     (callback) => {
//         setTimeout(function () {
//             console.log("Task 1");
//             callback(null, 1);
//         }, 3000);
//     },
//     (callback) => {
//         setTimeout(function () {
//             console.log("Task 2");
//             callback(null, 2);
//         }, 2000);
//     },
//     (callback) => {
//         setTimeout(function () {
//             console.log("Task 3");
//             callback(null, 3);
//         }, 1000);
//     }
// ], function (error, results) {
//     console.log(error);
//     console.log(results);
// });

// times: run async function n times sequentially
// https://www.youtube.com/watch?v=OyPc2PCGQg4
// function sleep(delay) {
//     var start = new Date().getTime();
//     while (new Date().getTime() < start + delay);
// }

// var addEntryToDB = function(id, callback) {
//     console.log("addEntryToDB" + id);
//     // first parameter for error
//     callback(null, {
//         entryId: id, 
//         name: 'username' + id
//     });
// }

// async.times(5, function(n, next) {
//     console.log("async function " + n);
//     if (n === 0) sleep(1000);
//     addEntryToDB(n, function(err, entry) {
//         // simulate an error
//         // if (n === 3) {
//         //     err = 'Something bad happened';
//         // }
//         // end simulation
//         next(err, entry);
//     })
// }, function(err, entries) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(entries);
// });

// https://stackoverflow.com/questions/42176874/async-times-runs-parallely-or-not
// var asyncFn = function (callback) {
// 	setTimeout(function () {
// 		callback(null);
// 	}, 1000);
// };

// console.time();
// async.times(5, (n, next) => 
//     asyncFn(next), () => 
//     console.timeEnd()
// ); //the output was 1004 ms

var asyncFn = function (n, callback) {
    console.log(n);
	setTimeout(function () {
		callback(null, null);
	}, 1000);
};

console.time();
async.times(5, (n, next) => {
    console.log(n);
    asyncFn(n, next);
}, (err, entries) => {
    console.timeEnd();
    console.log(err);
    console.log(entries);
}); //the output was 1004 ms