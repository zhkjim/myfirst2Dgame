/**
 * Created by ASUSPC on 2017/5/1.
 */
document.getElementById("gameover").style.zIndex = -10;
document.getElementById("nextlevel").style.zIndex = -10;
document.getElementById("UIhealth").style.top = "25px";
document.getElementById("UIhealth").style.left = "10px";
document.getElementById("scene").style.top = "0px";
document.getElementById("scene").style.left = "0px";

var Door = {
    name: 'door',
    left: 2700,
    top: 100,
    width: 200,
    height: 250,
    Xorigin: 2700,
    Yorigin: 100,
    success: false,
    onInit: function () {
        var newDoor = document.createElement('div');
        var e = document.getElementById("scene");
        e.appendChild(newDoor);
        newDoor.style.height = this.height + "px";
        newDoor.style.width = this.width + "px";
        newDoor.style.top = this.top + "px";
        newDoor.style.left = this.left + "px";
        newDoor.setAttribute("id", this.name);
        this.dom = newDoor;
        spriteList.push(this);
        return newDoor;
    },
    onActive: function () {
        if (center) {
            if (person.Xorigin - Door.Xorigin >= 18 && person.Xorigin - Door.Xorigin <= 100&&person.Yorigin<=240) {
                Door.success = true;
            }
            else {
                Door.success = false;
            }
        }
    }
}
var Floor1 = {
    name: "floor1",
    left: 0,
    top: 450,
    width: 1500,
    height: 200,
    spritetype: "map",
    Xorigin: -60,
    Yorigin: 0,
    onInit: function () {
        var newFloor1 = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newFloor1);
        newFloor1.style.height = this.height + "px";
        newFloor1.style.width = this.width + "px";
        newFloor1.style.top = this.top + "px";
        newFloor1.style.left = this.left + "px";
        newFloor1.setAttribute("id", this.name);
        newFloor1.setAttribute('class','floor');
        this.dom = newFloor1;
        spriteList.push(this);
        return newFloor1;
    },
    onActive: function () {
        if (center) {
            if (person.Xorigin > Floor1.Xorigin && person.Xorigin < (Floor1.Xorigin + Floor1.width + 45)) {
                if (person.Yorigin > Floor1.Yorigin) {
                    person["gravityStatus"] = true;
                }
                else if (person.Yorigin < Floor1.Yorigin) {
                    document.getElementById("scene").style.top = -Floor1.Yorigin + 'px';
                    document.getElementById("people").style.top = (Floor1.top - person.height) + 'px';
                    ;
                    person["gravityStatus"] = false;
                }
            }
            else if (person.Yorigin < Floor1.Yorigin && person.Xorigin >= Floor1.Xorigin && person.Xorigin < Floor1.Xorigin + Floor1.width) {
                document.getElementById("scene").style.left = -(Floor1.Xorigin - 495) + 'px';
                document.getElementById("people").style.left = (Floor1.Xorigin - 45) + 'px';
            }
            else if (person.Yorigin < Floor1.Yorigin && person.Xorigin > Floor1.Xorigin + Floor1.width && person.Xorigin <= (Floor1.Xorigin + Floor1.width + 45)) {
                document.getElementById("scene").style.left = -(Floor1.Xorigin + Floor1.width - 405) + 'px';
                document.getElementById("people").style.left = (Floor1.Xorigin + Floor1.width + 45) + 'px';
            }
        }
    },
}

var Floor2 = {
    name: "floor2",
    left: 1600,
    top: 350,
    width: 1500,
    height: 400,
    Xorigin: 1545,
    Yorigin: 100,
    spritetype: "map",
    onInit: function () {
        var newFloor2 = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newFloor2);
        newFloor2.style.height = this.height + "px";
        newFloor2.style.width = this.width + "px";
        newFloor2.style.top = this.top + "px";
        newFloor2.style.left = this.left + "px";
        newFloor2.setAttribute("id", this.name);
        newFloor2.setAttribute('class','floor');
        this.dom = newFloor2;
        spriteList.push(this);
        return newFloor2;
    },
    onActive: function () {
        if (center) {
            if (person.Xorigin > Floor2.Xorigin && person.Xorigin < (Floor2.Xorigin + Floor2.width-11)) {
                if (person.Yorigin > Floor2.Yorigin) {
                    person["gravityStatus"] = true;
                }
                else if (person.Yorigin < Floor2.Yorigin) {
                    document.getElementById("scene").style.top = "100px";
                    document.getElementById("people").style.top = (Floor2.top - person.height) + 'px';
                    ;
                    person["gravityStatus"] = false;
                }
            }
            else if (person.Yorigin < Floor2.Yorigin && person.Xorigin >= Floor2.Xorigin && person.Xorigin < Floor2.Xorigin + Floor2.width) {
                document.getElementById("scene").style.left = -(Floor2.Xorigin - 425) + 'px';
                document.getElementById("people").style.left = (Floor2.Xorigin) + 'px';
            }
             if (person.Yorigin < Floor2.Yorigin+person.height
                 && person.Xorigin > Floor2.Xorigin + Floor2.width && person.Xorigin <= (Floor2.Xorigin + Floor2.width + 50)) {
                person.leftwall=true;
            }
            else{person.leftwall=false;}
        }
    },
}
var Floor3 = {
    name: "floor3",
    left: 3100,
    top: 500,
    width: 1000,
    height: 200,
    Xorigin: 3100,
    Yorigin: -50,
    spritetype: "map",
    onInit: function () {
        var newFloor3 = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newFloor3);
        newFloor3.style.height = this.height + "px";
        newFloor3.style.width = this.width + "px";
        newFloor3.style.top = this.top + "px";
        newFloor3.style.left = this.left + "px";
        newFloor3.setAttribute("id", this.name);
        newFloor3.setAttribute('class','floor');
        this.dom = newFloor3;
        spriteList.push(this);
        return newFloor3;
    },
    onActive: function () {
        if (center) {
            if (person.Xorigin >= Floor3.Xorigin-11 && person.Xorigin < (Floor3.Xorigin + Floor3.width -6)) {
                if (person.Yorigin > Floor3.Yorigin) {
                    person["gravityStatus"] = true;
                }
                else if (person.Yorigin < Floor3.Yorigin) {
                    document.getElementById("scene").style.top = "-50px";
                    document.getElementById("people").style.top = (Floor3.top - person.height) + 'px';
                    ;
                    person["gravityStatus"] = false;
                }
            }
            else if (person.Yorigin < Floor3.Yorigin && person.Xorigin > Floor3.Xorigin + Floor3.width && person.Xorigin <= (Floor3.Xorigin + Floor3.width + 40)) {
                document.getElementById("scene").style.left = -(Floor3.Xorigin + Floor3.width - 425) + 'px';
                document.getElementById("people").style.left = (Floor3.Xorigin + Floor3.width ) + 'px';
            }
        }
    },
}
