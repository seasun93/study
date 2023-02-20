const mouse = document.querySelector('#mouse');
const allWrap = document.querySelector('#wrap');
const clickMove = (e) => {
    let trap = e.target.parentNode.attributes[0].nodeValue;
    let mapPostion = document.querySelector('#map');
    if(mapPostion.className == 'mapPosition0') {
        console.log(trap.indexOf('-1'))
        if(trap.indexOf('-1') != -1){
            mouse.classList.remove('leftMove');
            mouse.classList.remove('rightMove');
            mouse.classList.add('leftMove');
            setTimeout(()=>{
                mouse.classList.remove('leftMove');
            },2000)
        } else {           
            mouse.classList.remove('leftMove');
            mouse.classList.remove('rightMove');
            mouse.classList.add('rightMove');
            setTimeout(()=>{
                mouse.classList.remove('rightMove');
            },2000)            
        }
        allWrap.classList.add('moveBG');
    }
}

document.querySelector('#trap1-1').addEventListener('click',clickMove);
document.querySelector('#trap1-2').addEventListener('click',clickMove);
document.querySelector('#trap2-1').addEventListener('click',clickMove);
document.querySelector('#trap2-2').addEventListener('click',clickMove);
document.querySelector('#trap3-1').addEventListener('click',clickMove);
document.querySelector('#trap3-2').addEventListener('click',clickMove);
document.querySelector('#trap4-1').addEventListener('click',clickMove);
document.querySelector('#trap4-2').addEventListener('click',clickMove);
document.querySelector('#trap5-1').addEventListener('click',clickMove);
document.querySelector('#trap5-2').addEventListener('click',clickMove);
document.querySelector('#trap6-1').addEventListener('click',clickMove);
document.querySelector('#trap6-2').addEventListener('click',clickMove);

