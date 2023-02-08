const numberZone = document.querySelector('.numberZone');
const number = document.querySelectorAll('.number');
let lotto = [];
let cnt = 6;
let i;
for(i = 0; lotto.length < cnt; i++){
    let draw = parseInt(Math.random()*45)+1;
    if(lotto.indexOf(draw) === -1){ //중복없을 때 
        lotto.push(draw);
    }
}
lotto.sort(function(num1, num2){
    return num1 - num2;
})
for(i=0; i<number.length; i++){
    number[i].textContent = lotto[i];
    console.log(number[i].textContent);
    if(number[i].textContent > 40){
        number[i].classList.add('green');
    } else if (number[i].textContent < 11) {
        number[i].classList.add('yellow');
    } else if (number[i].textContent < 21) {
        number[i].classList.add('blue');
    } else if (number[i].textContent < 31) {
        number[i].classList.add('red');
    } else if (number[i].textContent < 41) {
        number[i].classList.add('gray');
    }
}