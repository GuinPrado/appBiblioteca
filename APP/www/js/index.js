var URL_API = 'http://localhost:3000/API/V1'

function register() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var age = document.getElementById('age').value
    var obj = JSON.parse(JSON.stringify(MobileUI.objectByForm('registerForm')))
    MobileUI.ajax.post(URL_API + '/user/register/', obj, function (err, res) {
        if (err) {
            console.log('ERRO => ', err)
        }
        if (res.body.message) {
            alert(res.body.message)
        }
    })
    return false
}

function enviaLogin() {

}