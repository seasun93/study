const persons = document.querySelector('#persons');
const personsValue = persons.value;
const gameForm = document.querySelector('#gameForm');
const inputBtn = document.querySelector('#inputBtn');

inputBtn.addEventListener('click',function(){
    settingFct()
})
persons.addEventListener('keypress',function(e){ //input 참여인원 입력시
    if(e.keyCode == 13){ //엔터 입력시
        settingFct()
    }
})

//게임시작하기 클릭 시 personWrap의 하위에 아무것도 없으면 person 입력하라는 alert 띄우고 focus하기
const nameChild = document.querySelector('.personWrap');
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click',function(e){ // input 빈값 알림 및 focus
    if(nameChild.childNodes.length > 1){
        
    } else {
        alert('play할 참여자 인원을 적으세요');
        persons.focus();
        e.preventDefault();
    }
    if(nameChild.childNodes[1].childNodes[1].value == ''){
        alert('player1을 입력하세요.');
        nameChild.childNodes[1].childNodes[1].focus();
        e.preventDefault();
    } else if(nameChild.childNodes[2].childNodes[1].value == ''){
        alert('player2을 입력하세요.');
        nameChild.childNodes[2].childNodes[1].focus();
        e.preventDefault();
    } else if(nameChild.childNodes[3].childNodes[1].value == ''){
        alert('player3을 입력하세요.');
        nameChild.childNodes[3].childNodes[1].focus();
        e.preventDefault();
    } else if(nameChild.childNodes[4].childNodes[1].value == ''){
        alert('player4을 입력하세요.');
        nameChild.childNodes[4].childNodes[1].focus();
        e.preventDefault();
    } else if(nameChild.childNodes[5].childNodes[1].value == ''){
        alert('player5을 입력하세요.');
        nameChild.childNodes[5].childNodes[1].focus();
        e.preventDefault();
    }
})

function settingFct(){ //참여자setting function
    const persons = document.querySelector('#persons');
    let personsValue = persons.value;
    const input = document.createElement('input');
    const personWrap = document.querySelector('.personWrap');
    if(persons.value > 5) {
        console.log('5이상')
        personsValue = 5;
    }
    persons.setAttribute('value', personsValue);

    //인원수 입력 시 gameForm에 input 생기고 hidden으로 persons,와 value 값 넣어주기
    gameForm.prepend(input);
    const gamePerson = document.querySelector('#gameForm > input');
    gamePerson.setAttribute('type', 'hidden');
    gamePerson.setAttribute('value', personsValue);
    gamePerson.setAttribute('name', 'persons');
    //참여자수 만큼 personWrap에 input과 span 생성
    for(let i = 0; i<Number(personsValue); i++){
        const input = document.createElement('input');
        const span = document.createElement('span');
        const label = document.createElement('label');
        personWrap.append(label);
        label.classList.add('name'+i);
        label.append(span);
        label.append(input);
    }
    //참여자 setting
    const name = document.querySelectorAll('.personWrap > label');
    name.forEach(function(t,i){
        t.childNodes[0].innerText = 'player'+ (i+1);
    });
    name.forEach(function(t,i){
        console.log(t.childNodes[1]);
        t.childNodes[1].setAttribute('type','text');
        t.childNodes[1].setAttribute('name','name'+i);
        t.childNodes[1].setAttribute('id','name'+i);
    })    
}
