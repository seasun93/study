const wordZone = document.querySelector('#wordZone');
const inputBtn = document.querySelector('#inputBtn');
const playerText = document.querySelector('.player');
const timeWrap = document.querySelector('.timeWrap');
const playerArr = getQuery();
const player = [];
let i = 0;
//사용자 이름 배열에 넣기
for(i=0; i<Number(playerArr.persons); i++){
    player.push(playerArr['name'+i]);
}
//시작 player
playerText.textContent = player[0] + '님 차례입니다';
wordZone.addEventListener('keypress',function(e){
    if(e.keyCode == 13){ //엔터 입력시
        wordFct();
    }
})
inputBtn.addEventListener('click',function(){
    wordFct();
})
//i 초기화
i = 0;
function wordFct(){//구
    //player 추가하기
    i = i + 1;
    if(i < Number(playerArr.persons)){
        playerText.textContent = player[i] + '님 차례입니다';
    } else if(i = Number(playerArr.persons)){
        i=0;
        playerText.textContent = player[i] + '님 차례입니다';
    }
    const wordRecord = document.querySelector('.wordRecord');
    let wordRecordText = wordRecord.textContent;
    if(wordRecordText == ''){ // 첫번째 키워드 입력
        let keyword = wordZone.value;
        wordRecord.textContent = keyword;
    } else { //키워드가 있을때
        let keyword = wordZone.value;
        let lastRecord = wordRecordText;
        let lastKeyword = lastRecord.substr(lastRecord.length-1,1); //이전사람 마지막 단어
        let firstLKeyword = keyword.substr(0,1); //현재 첫번째 단어
        if(lastKeyword == firstLKeyword){//마지막글자와 첫키워드 단어가 일치할때 
            wordRecord.textContent = keyword;
        } else {
            alert('틀렸습니다');
            reset();
        }
    }
}
//인풋값 클릭시 value 초기화
wordZone.addEventListener('click',function(){
    wordZone.value = null;
})

//파라미터값 가져오기
function getQuery(){
    let url = document.location.href;
    let qs = url.substring(url.indexOf('?') + 1).split('&');
    let result = [];
    for(let i =0; i<qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

//게임 끝날때 리셋
function reset(){
    const wordRecord = document.querySelector('.wordRecord');
    playerText.textContent = player[0] + '님 차례입니다';
    wordRecord.textContent = '';

}

