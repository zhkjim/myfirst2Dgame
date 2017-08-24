/**
 * Created by ASUSPC on 2017/5/1.
 */
var mummy1={
    name:"mummy1",
    left:1200,
    top:300,
    height:150,
    width:75,
    Xorigin:1200,
    Yorigin:0,
    health:100,
    turn:'left',

    onInit:function () {
        var newMummy1 = document.createElement("div");
        var e=document.getElementById("scene");
        e.appendChild(newMummy1);
        newMummy1.style.height = this.height +"px";
        newMummy1.style.width = this.width+ "px";
        newMummy1.style.top = this.top+ "px";
        newMummy1.style.left = this.left+"px";
        newMummy1.setAttribute("id",this.name);
        newMummy1.setAttribute("class",'mummyl');
        spriteList.push(this);
        return newMummy1
    },
    onActive:function () {
        if(!document.getElementById("mummy1"))return;
        mummy1.Xorigin=parseFloat(document.getElementById("mummy1").style.left);
        if (mummy1.turn=="right"&&document.getElementById("mummy1").className.indexOf("mummyr"))
        {
            document.getElementById("mummy1").className=document.getElementById("mummy1").className.replace(/mummyl/,"mummyr");
        }
        if(mummy1.turn=='left'&&mummy1.Xorigin>=100)
        {
            document.getElementById("mummy1").style.left = (parseFloat(document.getElementById("mummy1").style.left) - 1) + 'px';
            if(mummy1.Xorigin==900)mummy1.turn="right";
        }
        if(mummy1.turn=='right'&&mummy1.Xorigin<=1300)
        {
            document.getElementById("mummy1").style.left = (parseFloat(document.getElementById("mummy1").style.left) + 1) + 'px';
            if(mummy1.Xorigin==1300)mummy1.turn="left";
        }
        if (mummy1.turn=="left"&&document.getElementById("mummy1").className.indexOf("mummyl"))
        {
            document.getElementById("mummy1").className=document.getElementById("mummy1").className.replace(/mummyr/,"mummyl");
        }
        if(mummy1.health<=0){

            document.getElementById('scene').removeChild(document.getElementById("mummy1"));
        }
        if(person.hurt==false){
            if (person.Xorigin-mummy1.Xorigin>=-65&&person.Xorigin-mummy1.Xorigin<=60&&person.Yorigin-mummy1.Yorigin<=150){
                person.Health-=10;
                person.hurt=true;
            }
        }
    }
};

var mummy2={
    name:"mummy2",
    left:2000,
    top:200,
    height:150,
    width:75,
    Xorigin:2000,
    Yorigin:100,
    health:100,
    turn:'left',

    onInit:function () {
        var newMummy2 = document.createElement("div");
        var e=document.getElementById("scene");
        e.appendChild(newMummy2);
        newMummy2.style.height = this.height +"px";
        newMummy2.style.width = this.width+ "px";
        newMummy2.style.top = this.top+ "px";
        newMummy2.style.left = this.left+"px";
        newMummy2.setAttribute("id",this.name);
        newMummy2.setAttribute("class",'mummyl');
        spriteList.push(this);
        return newMummy2
    },
    onActive:function () {
        if(!document.getElementById("mummy2"))return;
        mummy2.Xorigin=parseFloat(document.getElementById("mummy2").style.left);
        if (mummy2.turn=="right"&&document.getElementById("mummy2").className.indexOf("mummyr"))
        {
            document.getElementById("mummy2").className=document.getElementById("mummy2").className.replace(/mummyl/,"mummyr");
        }
        if(mummy2.turn=='left'&&mummy2.Xorigin>=1900)
        {
            document.getElementById("mummy2").style.left = (parseFloat(document.getElementById("mummy2").style.left) - 1) + 'px';
            if(mummy2.Xorigin==1900) mummy2.turn="right";
        }
        if(mummy2.turn=='right'&&mummy2.Xorigin<=2300)
        {
            document.getElementById("mummy2").style.left = (parseFloat(document.getElementById("mummy2").style.left) + 1) + 'px';
            if(mummy2.Xorigin==2300)mummy2.turn="left";
        }
        if (mummy2.turn=="left"&&document.getElementById("mummy2").className.indexOf("mummyl"))
        {
            document.getElementById("mummy2").className=document.getElementById("mummy2").className.replace(/mummyr/,"mummyl");
        }
        if(mummy2.health<=0){

            document.getElementById('scene').removeChild(document.getElementById("mummy2"));
        }
        if(person.hurt==false){
            if (person.Xorigin-mummy2.Xorigin>=-65&&person.Xorigin-mummy2.Xorigin<=60&&person.Yorigin-mummy2.Yorigin<=250){
                person.Health-=10;
                person.hurt=true;
            }
        }
    }
};