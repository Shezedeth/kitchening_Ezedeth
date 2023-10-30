const db = require('../../database/models');
const { validationResult } = require('express-validator')

module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name, surname, birthday} = req.body;
        db.User.update(
            {
                name : name.trim(),
                surname : surname.trim(),
                birthday
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            }
        )
            .then(response => {
                console.log(response);
                req.session.userLogin.name = name;
                res.locals.userLogin.name = name;

                if(req.cookies.kitcheningUser4EVER){
                    res.cookie("kitcheningUser4EVER", req.session.userLogin);
                }
                return res.redirect('/')
            })
    }else {
        db.User.findByPk(req.session.userLogin.id)
        .then(user => {
            return res.render('profile',{
                ...user.dataValues,
                errors : errors.mapped()
            })
        })
        .catch(error => console.log(error))
    }

  
}