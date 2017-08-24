/**
 * Created by ASUSPC on 2017/5/1.
 */
var i;
var spriteList = [];
var spriteList2 = {};
function allCenter(){

    for (var i in spriteList){
        spriteList[i].onActive();
    }
}
var initAll = function(){
    person.onInit();
    trap.onInit();
    mummy1.onInit();
    mummy2.onInit();
    Floor1.onInit();
    Floor2.onInit();
    Floor3.onInit();
    Door.onInit();
};

function UI(){
    document.getElementById("UIhealth").style.width=parseFloat(person.Health/100*250)+'px';
    if(person.Health<=0||person.Yorigin<=-400){document.getElementById("gameover").style.zIndex=5;center=false;}
}
function shuaxin(){
    BulletFire();
    allCenter();
    FPS();
    UI();
    gravity();
    requestAnimationFrame(shuaxin);
}
shuaxin();