//peaZone의 center에 있는 class와 버튼의 값이 일치할때
//점수(10점), 콤보 증가, standBy에 있는 맨앞 완두콩이 center로 오고 마지막에 랜덤 추가
//점수가 200점일때 10초간 fever가 뜨면서 점수가 20점씩 증가
//일치하지 않을때 콤보 초기화
//게임 플레이 시간은 90초

//standBy에 랜덤함수 사용하여 5개 유지하기
let standByPea = new Array(6);
let randStandByPea = standByPea.fill().map((el, i)=>{
    let randPea = Math.floor(Math.random(standByPea.length) * 3);
    return randPea;
})
//console.log(randStandByPea)
const standBy = document.querySelector('.standBy');
for(let i =0; i<randStandByPea.length; i++){
    const createSpan = document.createElement('span');
    const listPea = standBy.appendChild(createSpan);
    listPea.className = `num-${randStandByPea[i+1]}`;
    listPea.textContent = randStandByPea[i+1];
}

//center 랜덤함수넣기
const center = document.querySelector('#center span');
center.className = `num-${randStandByPea[0]}`;
center.textContent = randStandByPea[0];

//비교대상
//center.className == valueBtn
//버튼 클릭 시 일치하면 점수 및 콤보 증가
const score = document.querySelector('#score em');
const combo = document.querySelector('#combo em');
let comboNum = 0;
let scoreNum = 0;
let feverNum = 0;
combo.textContent = comboNum;
score.textContent = scoreNum;
document.querySelector('#left').addEventListener('click', ()=>{
    arrowBtnKey('num-0');
});
document.querySelector('#top').addEventListener('click', ()=>{
    arrowBtnKey('num-1');
});
document.querySelector('#right').addEventListener('click', ()=>{
    arrowBtnKey('num-2');
});
window.addEventListener("keydown", (e) => {
    if(e.code == 'ArrowLeft'){
        arrowBtnKey('num-0');
    } else if(e.code == 'ArrowUp'){
        arrowBtnKey('num-1');
    } else if(e.code == 'ArrowRight'){
        arrowBtnKey('num-2');
    }
});

endTimer();
function arrowBtnKey(value){
    let valueBtn = value;
    const fever = document.querySelector('#fever');
    if(valueBtn == center.className) {
        //console.log('일치');
        comboNum += 1;
        // 피버 조건  :: 300점마다 한번씩 10번동안 10점에서 15점으로 증가,
        if(scoreNum%300 == 0 && score.textContent != 0 && feverNum == 0){
            feverNum += 1;
        }
        if(feverNum > 0 && feverNum < 10) {
            feverNum += 1;
            scoreNum += 15;
        } else if(feverNum == 10) {
            feverNum = 0;
            scoreNum += 15;
        } else if(feverNum == 0) {
            scoreNum += 10;
        }
        
        combo.textContent = comboNum;
        score.textContent = scoreNum;
        //첫번째 배열에서 제거
        randStandByPea.splice(0,1);
        //새로운 랜덤수 배열에 넣기
        let randPea = Math.floor(Math.random(standByPea.length) * 3);
        randStandByPea.push(randPea);
        //center 변경된 값 수정하기
        center.className =`num-${randStandByPea[0]}`;
        center.textContent = randStandByPea[0];
        //변경된배열값 수정하기.
        const listNum = document.querySelectorAll('.standBy span');
        for (let i = 0; i<randStandByPea.length; i++){
            listNum[i].textContent= randStandByPea[i+1];
            listNum[i].className = 'num-'+randStandByPea[i+1];
        }
        //
    } else {
        //console.log('버튼 불일치');
        //콤보제거
        comboNum = 0;
        combo.textContent = comboNum;
    }
}

function endTimer(){
    setTimeout(()=>{
        //index.html로 보내기
        //window.location = window.origin + '/study/miniGame/pea/index.html';
        alert('당신의 점수는' + scoreNum + '점입니다. 잠시후 시작화면으로 돌아갑니다.');
        setTimeout(()=>{
            window.location = window.origin + '/miniGame/pea/index.html';
        },1000)
    },90000);
}