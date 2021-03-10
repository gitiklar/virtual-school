const User = require('../models/user-model');

async function addUser (req, res, next) {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(200).json({type:'success' , message: '!המשתמש נוסף בהצלחה'});
    } catch(err) {
        if(err.keyValue && err.keyValue.userName)
            res.status(400).json({type:'info' , message: '!שם המשתמש כבר קיים'});
        else
            res.status(400).json({type:'error' , message: `אופססס התרחשה שגיאה  : ${err.message}`});
    }
};

async function login(req , res , next) {
    const { userName , password } = req.body;
    try {
        const user = await User.findOne({userName , password});
        if(!user) {
            res.status(401).json({status:401 , error : '!שם המשתמש ו/או הסיסמה שגויים'});
        } else {
            res.status(200).json({status:200 , role : user.role});
        }

    } catch(err) {
        res.status(400).json({status:400 , error : err});
    }

}

module.exports = {
    addUser,
    login,
}