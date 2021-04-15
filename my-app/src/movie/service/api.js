import jwt from 'jsonwebtoken'

const KEY_TOKEN = 'reactjs2011B'

const checkUserLogin = (user, pass) => {
    let token = null;
    if(user === 'admin' && pass === '123'){
        // ma hoa thong tin cua user va gui ve phia client

        token = jwt.sign({
            id: 1,
            username: 'admin',
            email: 'email@gmail.com',
            phone:'0357917750',
            address: 'Hanoi' 
        }, KEY_TOKEN)

    }
    return token;
}

export const api = {
    checkUserLogin
}