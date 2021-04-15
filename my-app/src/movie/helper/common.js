import jwt from 'jsonwebtoken';

const KEY_TOKEN = 'reactjs2011B'

const saveToken = (token) => {
    if(token !== null && token !== ''){
        localStorage.setItem('token_login', token)
    }
}
const removeToken = () => {
    localStorage.removeItem('token_login')
}

const getTokenFromLocalStorage = () =>{
    const token = localStorage.getItem('token_login')
    return token
}

const decodeTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token_login')
    let tokenDecode = null;
    console.log(token)
    if (token !== null){
        tokenDecode = jwt.verify(token, KEY_TOKEN);
    }
    console.log(tokenDecode)
    return tokenDecode;

}
const IsEmptyObject = (obj) => {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
const isAuthenticated = () => {
    let token = decodeTokenFromLocalStorage();
    if(token !== null && token !== '') {
        return true;
    } return false
}

export const helper = {
    saveToken,
    removeToken,
    decodeTokenFromLocalStorage,
    getTokenFromLocalStorage,
    IsEmptyObject,
    isAuthenticated
}