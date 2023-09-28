const random=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color

};
let gfgf;

const startchangingcolor=function(){
    gfgf=setInterval(changebg,2000);

    function changebg(){
        document.body.style.backgroundColor=random();
    }
}
const stopchangingcolor=function(){
    clearInterval(gfgf);
    gfgf=null;
};
document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)