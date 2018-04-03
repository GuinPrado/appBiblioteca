var URL_API = 'http://localhost:3000/API/V1'

function register() {
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
    var obj = JSON.parse(JSON.stringify(MobileUI.objectByForm('loginForm')))
    console.log(obj)
    MobileUI.ajax.post(URL_API + '/login/', obj, function (err, res) {
        console.log(res)
        if (err) {
            console.log('ERRO => ', err)
            alert(res.body.message)
        }
        if (res.body.message) {
            alert(res.body.message)
        }
    })
    return false
}