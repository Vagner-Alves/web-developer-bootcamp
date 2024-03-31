// loops in javascript work as same as python 

for (let x = 1;  x <=10; x += 1){
    console.log("I'm in the loop hehehe!", x);
}

// even numbers

for( let y = 0; y <= 20; y+= 2){
    console.log(y);
}

// decrementating numbers

for(let i = 100; i >= 0; i -= 1 ){
    console.log(i);
}

// infinite loop is BAD!! pay attetion to them, they can freeze your computer browser :C

// for(let x = 20; x>=0; X++){
    // console.log(x);
//}

let animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach",
    "Cod","Cormorant","Coyote","Crab",
    "Crane","Crocodile","Crow","Curlew","Deer",
    "Dinosaur",
    "Dog","Dogfish","Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel",
    "Eland","Elephant","Elk",
    "Emu","Falcon",
    "Ferret","Finch","Fish","Flamingo","Fly",
    "Fox","Frog","Gaur",
    "Gazelle",
    "Gerbil","Giraffe",
    "Gnat","Gnu","Goat",
    "Goldfinch","Goldfish","Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird","Hyena",
    "Ibex","Ibis",
    "Jackal","Jaguar",
    "Jay",
    "Jellyfish","Kangaroo","Kingfisher","Koala",
    "Kookabura","Kouprey","Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse","Mule","Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail","Quelea","Quetzal","Rabbit", "Raccoon","Rail","Ram","Rat","Raven","Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider",
    "Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout",
    "Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel",
    "Whale","Wildcat","Wolf",
    "Wolverine","Wombat",
    "Woodcock","Woodpecker",
    "Worm","Wren","Yak","Zebra"
];

for(let x = animals.length - 1; x >= 0; x --){
    console.log(x, animals[x]);
}

// nested loops, oh boy......

function printf(){
    console.log('abc');
}

printf();