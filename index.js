
//import savadata from './script.js'
//INDEX PAGE
//let startgame = document.getElementsByClassName('startgame');
var users = document.querySelectorAll('input');
let submit = document.querySelector('#submit');
submit.addEventListener('click', savadata);
//startgame[0].addEventListener('click', startGame);

function savadata(){
        sessionStorage.setItem('user1', users[0].value);
        sessionStorage.setItem('user2',users[1].value);
        users[0].value = '';
        users[1].value = '';
    }
    
//startGame()