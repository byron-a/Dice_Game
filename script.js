
   // REFRESH BUTTON...........

var refreshButton = document.querySelector(".refresh-button");
//refreshButton.addEventListener('click', startGame);

// DICE BOX...html string................
var ball1 = document.querySelectorAll('.d1');
var ball2 = document.querySelectorAll('.d2');
var ball3 = document.querySelectorAll('.d3');
var ball4 = document.querySelectorAll('.d4');
var ball5 = document.querySelectorAll('.d5');
var ball6 = document.querySelectorAll('.d6');
// DICE BOX2
var balli = document.querySelectorAll('.d_1');
var ballii = document.querySelectorAll('.d_2');
var balliii = document.querySelectorAll('.d_3');
var balliv = document.querySelectorAll('.d_4');
var ballv = document.querySelectorAll('.d_5');
var ballvi = document.querySelectorAll('.d_6');
//OTHER CONDITIONS
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var comment = document.getElementsByClassName('comment');
//INDEX PAGE
//let startgame = document.getElementsByClassName('startgame');
//  var users = document.querySelectorAll('input');
//  let submit = document.querySelector('#submit');
//  submit.addEventListener('click', savadata);
//startgame[0].addEventListener('click', startGame);

/// LOOP AND FUNCTION
 //DICE BOX1
function ballFn1(){
    for(let x of ball1){x.style.display = 'block'}
}
//ballFn1()
function ballFn2(){
    for(let x of ball2){x.style.display = 'block'}
}
//ballFn2()
function ballFn3(){
    for(let x of ball3){x.style.display = 'block'}
}
//ballFn3()
function ballFn4(){
    for(let x of ball4){x.style.display = 'block'}
}
//ballFn4()
function ballFn5(){
    for(let x of ball5){x.style.display = 'block'}
}
//ballFn5()
function ballFn6(){
    for(let x of ball6){x.style.display = 'block'}
}
//ballFn6()

//DICE BOX2
function ballFni(){
    for(let x of balli){x.style.display = 'block'}
}
function ballFnii(){
    for(let x of ballii){x.style.display = 'block'}
}
function ballFniii(){
    for(let x of balliii){x.style.display = 'block'}
}
function ballFniv(){
    for(let x of balliv){x.style.display = 'block'}
}
function ballFnv(){
    for(let x of ballv){x.style.display = 'block'}
}
function ballFnvi(){
    for(let x of ballvi){x.style.display = 'block'}
}

   //Random Number Generator And Condition Placement.
   var randNum = Math.floor(Math.random()*6);
   randNum = (randNum + 1);
   var randNum2 = Math.floor(Math.random()*6);
   randNum2 = (randNum2 + 1);



//Other Conditions

// function savadata(){
//     sessionStorage.setItem('user1', users[0].value);
//     sessionStorage.setItem('user2',users[1].value);
//     users[0].value = '';
//     users[1].value = '';
// }
// export default savadata
function startGame(){

    var user1 = sessionStorage.getItem('user1');
    var user2 = sessionStorage.getItem('user2');
    user1 = user1.slice(0,1).toUpperCase() + user1.slice(1);
    user2 = user2.slice(0,1).toUpperCase() + user2.slice(1);
    player1.innerHTML = user1; 
    player2.innerHTML = user2;
    
    
    if(randNum === 1){
        ballFn1();
    }else if(randNum === 2){
        ballFn2();
    }else if(randNum===3){
        ballFn3();
    }else if(randNum===4){
        ballFn4();
    }else if(randNum===5){
        ballFn5();
    }else {
        ballFn6();
    }
    
    //2
    if(randNum2 === 1){
        ballFni();
    }else if(randNum2 === 2){
        ballFnii();
    }else if(randNum2===3){
        ballFniii();
    }else if(randNum2===4){
        ballFniv();
    }else if(randNum2===5){
        ballFnv();
    }else {
        ballFnvi();
    }

    if(randNum === randNum2){
        comment[0].innerHTML = ('Draw!, Click Refresh Button!!.');
    }else if(randNum > randNum2){
        comment[0].innerHTML = ('<i class="fa-solid fa-award"></i> '+ user1 +' Wins!');  
    }else{
        comment[0].innerHTML = ('<i class="fa-solid fa-award"></i> '+ user2 +' Wins!');
    }
}

startGame()
