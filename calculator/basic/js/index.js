let numOne='';
let operator='';
let numTwo='';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// const onClickNumber = (number) => {
//   //함수안에 함수를 선언할때는 return의 함수로 감싸서 내보내야한다.
//   //함수 내에서 중괄호와 return이 붙으면 중괄호와 return을 생략할 수 있다.
//   return ()=>{ //실행되고자 하는 함수
//     if(operator){
//       numTwo += number;
//     }else {
//       numOne += number;
//     }
//     $result.value += number;    
//   };
// }
const onClickNumber = (number) => () => { //함수안에 함수를 return한다 = 고차함수(high order function)
    if(!operator){ //사칙연산이 존재하는가
      numOne += number;
      $result.value += number;
      return;
    }
    if(!numTwo) { // 2번째 숫자가 존재하지 않는가?
      $result.value = ''; //맞으면 result의 value 값이 빈값으로 넣기
    }
    numTwo += number;
    $result.value += number;
}
const onClickOperator = (e) => { //고차함수 사용하지 않고 중복 제거 //사칙연산 입력하는 함수 제작
  if(!numOne){
    alert('숫자를 입력하세요');
  } else {
    operator = e.target.textContent;
  }
  $operator.value = operator;
}
const onClickCalc = (e) => {
  if(!numOne) {
    alert('숫자를 입력하세요');
  } else if(!operator){
    alert('사칙연산을 입력하세요');
  } else if(!numTwo){
    alert('숫자를 입력하세요');
  } else {
    if(numTwo) {
      switch(operator){
        case '+' : 
          $result.value = parseInt(numOne) + parseInt(numTwo);
          break;
        case '-' :
          $result.value = parseInt(numOne) - parseInt(numTwo);
          break;
        case 'x' :
          $result.value = parseInt(numOne) * parseInt(numTwo);
          break;
        case '/' : 
          $result.value = parseInt(numOne) / parseInt(numTwo);
          break;
        default :
          break;
      }
    }
    $operator.value = null;
  }
}
const onClickClear = (e) => {
  $result.value = null;
  $operator.value = null;
  operator = null;
  numOne = null;
  numTwo = null;
}
//고차함수를 이용한 event
document.querySelector('#num0').addEventListener('click',onClickNumber('0'));
document.querySelector('#num1').addEventListener('click',onClickNumber('1'));
document.querySelector('#num2').addEventListener('click',onClickNumber('2'));
document.querySelector('#num3').addEventListener('click',onClickNumber('3'));
document.querySelector('#num4').addEventListener('click',onClickNumber('4'));
document.querySelector('#num5').addEventListener('click',onClickNumber('5'));
document.querySelector('#num6').addEventListener('click',onClickNumber('6'));
document.querySelector('#num7').addEventListener('click',onClickNumber('7'));
document.querySelector('#num8').addEventListener('click',onClickNumber('8'));
document.querySelector('#num9').addEventListener('click',onClickNumber('9'));
//event 객체를 이용한 event
document.querySelector('#plus').addEventListener('click',onClickOperator);
document.querySelector('#minus').addEventListener('click',onClickOperator);
document.querySelector('#multi').addEventListener('click',onClickOperator);
document.querySelector('#devide').addEventListener('click',onClickOperator);
document.querySelector('#clac').addEventListener('click',onClickCalc);
document.querySelector('#clear').addEventListener('click',onClickClear);


/*
1. 단순계산 (a+b=c);
2. 다중계산 (a+b-c*d/e=f)
3. 우선계산 (()괄호 안에 들어가있는 숫자를 우선 순위에 넣기)
4. -a 사용하기
*/