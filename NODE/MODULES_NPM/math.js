const add =  (a,b) => a + b;

const square = x => x * x;

const PI = 3.14555;

// allowing the funcitons to be exported

// module.exports.PI = PI;
// module.exports.square = square;
// module.exports.add = add;

// we can also wrap everything up in this object and export it. 

const math = {
    PI:PI,
    square:square,
    add:add
}

module.exports = math;