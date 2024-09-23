let btn_menu=document.getElementById('btnmenu');
let btn_closemenu=document.getElementById('btnx');

btn_menu.addEventListener('click' ,() => {
    document.getElementById('nave').style.transform = 'translateX(0px)';
    btn_menu.style.opacity='0';
    btn_closemenu.style.opacity='1';

    setTimeout( () =>{
    btn_menu.style.display='none';
},300)

    btn_closemenu.addEventListener('click' ,() => {
        document.getElementById('nave').style.transform = 'translateX(500px)';
        setTimeout(() =>{
        btn_menu.style.display='block';
        btn_menu.style.opacity='1';
    },300)
    setTimeout(() =>{
        btn_closemenu.style.opacity='0';
    },20)
    })
})
/************************* *//************************* */
/************************* *//************************* */

let btn_music=document.getElementById('btnmusic');
let music=document.getElementById('music');
let isplaying=false;

btn_music.addEventListener('click' , () =>{
    if(isplaying){
        music.pause();
document.getElementById('mm').style.opacity='0.5';
    }else{
        music.play();
        btn_music.style.opacity='1'
        document.getElementById('mm').style.opacity='1';

    }
    isplaying=!isplaying;
})