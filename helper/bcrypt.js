const bcrypt = require('bcrypt');
const salty  = 10;

const hashPassword = async (password) => {
    const  hashing = await bcrypt.hash(password,salty).then(hash => {
        return hash;
    })
    
    return hashing;
    
}

module.exports = hashPassword;