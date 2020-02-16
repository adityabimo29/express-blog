const bcrypt = require('bcrypt');

const comparePassword = (mypass,hash) => {
    const compared = bcrypt.compare(mypass, hash).then(res => {
        return res;
    }) 
    return compared;
}

module.exports = comparePassword;