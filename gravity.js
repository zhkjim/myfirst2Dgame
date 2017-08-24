/**
 * Created by ASUSPC on 2017/5/1.
 */
var yy=0;
function gravity() {
    if(person.Xorigin<=Floor1.Xorigin){person["gravityStatus"]=true;}
    // else if(person.Xorigin>-60&&person.Xorigin<=1484)
    // {if (person.Yorigin>0){person["gravityStatus"]=true;}}
    else if(person.Xorigin>=(Floor1.Xorigin+Floor1.width+45)&&person.Xorigin<=Floor2.Xorigin){person["gravityStatus"]=true;}
    // else if(person.Xorigin>=1551&&person.Xorigin<=3020)
    // {if (person.Yorigin>105){person["gravityStatus"]=true;}}
    else  if(person.Xorigin>=(Floor3.Xorigin+Floor2.width+40)){person["gravityStatus"]=true;}


    if (person.gravityStatus){
        document.getElementById("scene").style.top=(parseFloat(document.getElementById("scene").style.top)-yy)+'px';
        document.getElementById("people").style.top =(parseFloat(document.getElementById("people").style.top)+yy)+'px';
        yy++;
        // if(person.Xorigin>-60&&person.Xorigin<=1484){
        //     if (person.Yorigin<=0)
        //     {   document.getElementById("scene").style.top="0px";
        //         document.getElementById("people").style.top="320px";
        //         person["gravityStatus"]=false;}
        // }
        //  if(person.Xorigin>=1546&&person.Xorigin<=3050){
        //     if (person.Yorigin<100)
        //     {   person["gravityStatus"]=false;
        //         document.getElementById("scene").style.top="100px";
        //         document.getElementById("people").style.top="220px";
        //         }
        // }
        //  if(person.Yorigin<100&&person.Xorigin>=1545&&person.Xorigin<=1600)
        // {
        //     document.getElementById("scene").style.left="-1120px";
        //     document.getElementById("people").style.left="1540px";}
        // if(person.Yorigin<0&&person.Xorigin>=1400&&person.Xorigin<=1485)
        // {
        //     document.getElementById("scene").style.left="-1060px";
        //     document.getElementById("people").style.left="1485px";}
    }
    else if (person["gravityStatus"]==false){
        yy=0;return yy;
    }

}