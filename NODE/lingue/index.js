import {franc} from "franc";
import where from "langs";

import pkg from 'colors';
import langs from "langs";
const {colors} = pkg;

const text = process.argv[2];
const sample = franc(text);

//const sample = franc('Considerando ser essencial que os direitos humanos');

if (sample === 'und'){
    console.log("Sorry language not detected, try out more text sample".red)
} else{
    const language = where.where("3", sample);
    console.log(`our best guess is: ${language.name}`.rainbow);

}

// I wanna commment something important in this code.




