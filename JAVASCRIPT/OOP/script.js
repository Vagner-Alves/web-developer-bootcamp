// create a function in which we can convert rbg to hexi colors

function makeColor(r,g,b){
    const color = {} // the object starts empty
    color.r = r; // assign some values for the object
    color.g = g;
    color.b = b; 
    // create some methods (rgb and hex)
    color.rgb = function(){
        const{r,g,b} = this;
        // the code above allow us to extract the value from (r,g,b) stored in the object (by using the keyword "this")
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function(){
        const{r,g,b} = this;
        return  '#'  + ((1 << 24) + (r << 16) + (g <<8) + b ).toString(16).slice(1); 
    }
    return color // return the object
}
// but everytime we run this code a new object is created.[!]

// the code above is called "factory function", but it's commonly used

// let's use the constructor method

function color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

// now we can assign methods to the constructor without having
// the issue of creating a new object everytime we run the code.

color.prototype.rgb = function(){ // it's necessary to use  prototype to create the method
    const{r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`
}

color.prototype.hex = function(){
    const{r,g,b} = this;
    return  '#'  + ((1 << 24) + (r << 16) + (g <<8) + b ).toString(16).slice(1); 
}

const color1 = new color(40,34,75);
const color2 = new color(255,255,255);

// creating a class

class Color{
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;    
    }
    rgb(){
        const {r,g,b} = this;
        return `rbg(${this.innerRGB})`;
    }
    rgba(a = 1.0){
        return `rbg(${this.innerRGB()},${a})`;
    }
    hex(){
        const {r,g,b} = this;
        return  '#'  + ((1 << 24) + (r << 16) + (g <<8) + b ).toString(16).slice(1); 
    }
}   

const red = new Color(255,67,89,'tomato');
const white  = new Color(255,255,255,'white as paper');