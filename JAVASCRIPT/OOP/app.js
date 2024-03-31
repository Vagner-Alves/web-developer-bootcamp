class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}


class Cat extends Pet{
    constructor(name, age, livesleft = 9){
        super(name, age) // re-using the funcitonality of the super class PET
        this.livesleft = livesleft;
    }
    eat(){
        return `${this.name} is eating!`
    }
    
}

class Dog extends Pet{
    bark(){
        return 'WOOOF'
    }
}