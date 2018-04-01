
const User = require('./user')
function register(req, res) {
    User.findOne({ email: req.body.email }, function (err, data) {
        if (!data) {
            console.log(req.body)
            if (req.body.name && req.body.email && req.body.password, req.body.age) {
                const person = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    age: req.body.age
                })

                person
                    .save()
                    .then(user => res.status(200).json({ message: `Usuário ${user.name} cadastrado com sucesso!` }))
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(500).json({ message: 'Preencha todos os dados!' })
            }
        } else {
            res.status(500).json({ message: 'Usuário já existe!' })
        }
    })
}

function findOneToSave(emailSend, callback) {
    User.findOne({ email: emailSend }, function (err, data) {
        console.log('findOneToSave => ', data)
        if (!data) {
            callback(null, true)
        }
    })
}

module.exports = {
    register
}