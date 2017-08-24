/**
 * Created by ASUSPC on 2017/5/1.
 */
var center = true;
var person = {
    name: "people",
    left: 425,
    top: 320,
    height: 130,
    width: 75,
    Xorigin: 425,
    Yorigin: 0,
    Health: 100,
    turn: "right",
    state: 'stand',
    classname: 'pright',
    nextname: 'pright',
    leftwall:false,
    rightwall:false,
    "hurt": false,
    "gravityStatus": false,

    onInit: function () {
        var newPerson = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newPerson);
        newPerson.style.height = this.height + "px";
        newPerson.style.width = this.width + "px";
        newPerson.style.top = this.top + "px";
        newPerson.style.left = this.left + "px";
//            newPerson.style.transform = "translateX(0);translateY(0)";
        newPerson.setAttribute("class", "pright");
        newPerson.setAttribute("id", this.name);
        this.dom = newPerson;
        spriteList.push(this);
        spriteList2["c1"] = "player";
        return newPerson;
    },
    onActive: function () {
        person.classname = document.getElementById("people").className;
        if (center) {
            person.Xorigin = 425 - parseFloat(document.getElementById("scene").offsetLeft);
            person.Yorigin = parseFloat(document.getElementById("scene").offsetTop);
            if (buttonPressStatus.left&&person.leftwall==false) {
                document.getElementById("scene").style.left = (parseFloat(document.getElementById("scene").style.left) + 5) + 'px';
                document.getElementById("people").style.left = (parseFloat(document.getElementById("people").style.left) - 5) + 'px';
                person.turn = "left";
                person.state = 'walk';
            }
            if (buttonPressStatus.right&&person.rightwall==false) {
                document.getElementById("scene").style.left = (parseFloat(document.getElementById("scene").style.left) - 5) + 'px';
                document.getElementById("people").style.left = (parseFloat(document.getElementById("people").style.left) + 5) + 'px';
                person.turn = "right";
                person.state = 'walk';
            }
            if (bullet.whether && buttonPressStatus.F) {
                console.info(person.Yorigin)
                console.info(person.Xorigin)
                bullet.go = true;
                firethen = Date.now();
            }
            if (Door.success == true && buttonPressStatus.E) {

                document.getElementById("nextlevel").style.zIndex=5;center=false;

            }
            if (person["gravityStatus"] == false) {
                if (buttonPressStatus.space) {

                    yy = -17;
                    //for (var j=0;j<2;j++){document.getElementsByClassName("floor")[j].style.top = (parseFloat(document.getElementsByClassName("floor")[j].style.top)-yy)+'px';}
                    document.getElementById("scene").style.top = (parseFloat(document.getElementById("scene").style.top) - yy) + 'px';
                    document.getElementById("people").style.top = (parseFloat(document.getElementById("people").style.top) + yy) + 'px';
                    return yy;
                }
            }
        }



        if (person.hurt && i == undefined) {
            i = true;
            // yy = -17;
            // document.getElementById("scene").style.top = (parseFloat(document.getElementById("scene").style.top) - yy) + 'px';
            // document.getElementById("people").style.top = (parseFloat(document.getElementById("people").style.top) + yy) + 'px';

            // person.nextname = person.classname + " peoplehurt";
               $("#people").addClass("peoplehurt");

            setTimeout(function () {
                person.hurt = false;
                $("#people").removeClass("peoplehurt");
                i = undefined;
            }, 3000);
        }
        if (person.state == 'stand') {
            if (person.turn == "right") {
                person.nextname = 'pright';
            }
            else if (person.turn == "left") {
                person.nextname = "pleft";
            }
        }
        else{
            if (person.turn == "left") {
                person.nextname = "plmove";
            }
            if (person.turn == "right") {
                person.nextname = "prmove";
            }
        }
        if (person.classname != person.nextname&&person.hurt==false) {
            document.getElementById("people").className = document.getElementById("people").className.replace(person.classname, person.nextname);
        }
        else if(person.classname != person.nextname&&person.hurt==true){
            document.getElementById("people").className = document.getElementById("people").className.replace(person.classname, person.nextname+' peoplehurt');
        }
    }
};
