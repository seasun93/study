const note = document.querySelector('#note');
const noteZone = document.querySelector('.noteZone');
const closeBtn = document.querySelector('#close');
note.addEventListener('click', ()=>{
    noteZone.classList.add('on');
})

closeBtn.addEventListener('click',()=>{
    noteZone.classList.remove('on');
})