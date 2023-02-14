const $calculate = document.querySelector('#calculate');
const $calc = document.querySelector('#calc');
const $record = document.querySelector('#record');
let expression = []; // 숫자 담을 배열
let expElem = '';
let expNumElem = '';
//중위 → 후위
let stack = []; // 스택 배열
let convert = []; // 후위 배열
let temp = ''; //두자릿수 이상 저장할 임시변수    
function prec(op){ // 연산자와 괄호 우선순위 반환
    //괄호 → +,- → *,/
    switch(op){
        case '(':
        case ')':
            return 0;
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
    }
    return 999;
}
const midTotal = ()=>{
    for(let i=0; i<expression.length; i++){
        expElem += expression[i];
    }
    return expElem;
}
$calculate.addEventListener('click',()=>{
    let f = midTotal(); //전체 식
    f= f.replace(/(\s*)/g, ""); // 공백제거
    //onsole.log('----------------클릭-------------------');
    for(let i=0; i<f.length; i++){
        const char = f.charAt(i);
        switch(char){
            case '(':
                stack.push(char);
                break;

            case '+': case '-': case '*': case'/':
                //스택이 비어있지 않는 경우에 현재 연산자와 우선순위를 비교한다.
                while(stack[stack.length - 1] != null && prec(char) <= prec(stack[stack.length-1])){
                    temp += stack.pop();
                    if(isNaN(stack[stack.length-1])){
                        convert.push(temp);
                        temp ='';
                    }
                }
                stack.push(char);
                break;

            case ')':
                let returned_op = stack.pop();
                while(returned_op != '('){
                    temp += returned_op;
                    returned_op = stack.pop();

                    if(isNaN(stack[stack.length-1])){
                        convert.push(temp);
                        temp='';
                    }
                }
                break

            default:
                temp += char;
                if(isNaN(f.charAt(i+1))|| i+1 == f.length){
                    convert.push(temp);
                    temp='';
                }
                break;
        }
    }
    while(stack.length != 0){
        convert.push(stack.pop());
    }

    let result = '';
    for(let i in convert){
        result +=convert[i];
        result += " ";
    }
    // console.log(f);
    // console.log(result);

    //후위 계산하기
    let backStack = [];
    for(let i in convert){
        //숫자면 넣기
        if(!isNaN(convert[i])){
            backStack.push(convert[i]);
        } else {
            //연산자인경우에 두 값을 pop 한다.
            const b = parseFloat(backStack.pop());
            const a = parseFloat(backStack.pop());
            switch(convert[i]){
                case '+' :
                    backStack.push(a+b);
                    break;
                case '-' :
                    backStack.push(a-b);
                    break;
                case '*':
                    backStack.push(a*b);
                    break;
                case '/':
                    backStack.push(a/b);
                    break;
            }
        }
    }    
    // console.log('result ' + backStack);
    $calc.value = backStack;
    //-----------child 추가----------------
    $record.innerHTML ='<span>'+ f +'</span><span class="result"> ='+ backStack + '</span>';
    //-----------child 추가 끝----------------    
    clear();
    $record.classList.remove('hide');
    $calc.classList.add('hide');
});

//버튼 클릭 시 성격 나누기
//clear
document.querySelector(`#clear`).addEventListener('click',()=>{
    clear();  
});

//연산자 + 괄호
const opeFct = (e) => {
    let ope = e.target.textContent;
    $calc.value += ope;
    expression.push(ope);
}
//숫자
const  numFct = (e)=>{
    let num = e.target.textContent; //버튼 클릭시 button의 text 가져오기
    if($record.innerHTML != '') {
        $calc.value = '';
        $record.innerHTML = '';
        $calc.value += num;
        expression.push(parseInt(num));
    } else {
        $calc.value += num;
        expression.push(parseInt(num));
    }
}

//숫자 클릭이벤트 실행
document.querySelector(`#num-0`).addEventListener('click',numFct);
document.querySelector(`#num-1`).addEventListener('click',numFct);
document.querySelector(`#num-2`).addEventListener('click',numFct);
document.querySelector(`#num-3`).addEventListener('click',numFct);
document.querySelector(`#num-4`).addEventListener('click',numFct);
document.querySelector(`#num-5`).addEventListener('click',numFct);
document.querySelector(`#num-6`).addEventListener('click',numFct);
document.querySelector(`#num-7`).addEventListener('click',numFct);
document.querySelector(`#num-8`).addEventListener('click',numFct);
document.querySelector(`#num-9`).addEventListener('click',numFct);
//document.querySelector(`#dot`).addEventListener('click',numFct);

//연산자 클릭이벤트 실행
document.querySelector(`#plus`).addEventListener('click',opeFct);
document.querySelector(`#multi`).addEventListener('click',opeFct);
document.querySelector(`#devide`).addEventListener('click',opeFct);
document.querySelector(`#lBracket`).addEventListener('click',opeFct);
document.querySelector(`#rBracket`).addEventListener('click',opeFct);
document.querySelector(`#minus`).addEventListener('click',opeFct); // -의 경우 숫자의 맨앞인 경우에 음수기호로 사용

const clear = () => {
    //기본 초기화
    expression = []; // 배열
    expElem = '';
    expNumElem = '';
    $calc.value = '';

    //중위 → 후위 초기화
    stack = []; // 스택 배열
    convert = []; // 후위 배열
    temp = '';
    $calc.className = '';
    $record.className = 'hide';
}