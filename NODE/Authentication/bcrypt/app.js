const bcrypt = require('bcrypt');

// bcrypt is used to hash passwords , including more security

const hashPassword = async(password)=>{
    const hash = await bcrypt.hash(password, 12);
    console.log(hash)
    
}

const login = async (password, hashedPassword)=>{
    const result = await bcrypt.compare(password, hashedPassword);
    if(result){
         console.log("You are logged in")
    }else{
        console.log('Incorrect Password')
    }
}

hashPassword('monkey')
login('monkey','$2b$12$nIdlEDRTS0thJ2Y8omMFq.nDUtP3EjkXofG8WK5H2FzvAPuPEglf6')

