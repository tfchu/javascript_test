//alert('hello')

function commonFunction(param, callback) {
    console.log('hi ' + param);

    var res = {};
    Object.defineProperty(res, 'a', {value: 1, writable: false});
    Object.defineProperty(res, 'b', {value: 2, writable: false});

    callback(res);
}

var res1 = {};

function function1(callback) {
    var param = 'function1';

    function postProcess(res) {
        //console.log(res.a);
        //console.log(res.b);
        callback(res);
    }

    commonFunction(param, postProcess);
}

function function2() {
    function postProcess2(res) {
        console.log('function2 calling res.a' + res.a);
        console.log('function2 calling res.a' + res.b);
    }

    function1(postProcess2);
}

function2()