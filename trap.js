/**
 * Created by ASUSPC on 2017/5/1.
 */
var trap = {
    name: "trap",
    left: 750,
    top: 420,
    height: 30,
    width: 150,
    Xorigin: 750,
    Yorigin: 0,
    onInit: function () {
        var newTrap = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newTrap);
        newTrap.style.height = this.height + "px";
        newTrap.style.width = this.width + "px";
        newTrap.style.top = this.top + "px";
        newTrap.style.left = this.left + "px";
        newTrap.setAttribute("class", this.name);
        spriteList.push(this);
        return newTrap
    },
    onActive: function () {
        if (person.hurt == false) {
            if (person.Xorigin - trap.Xorigin >= -50 && person.Xorigin - trap.Xorigin <= 100 && person.Yorigin - trap.Yorigin <= 30) {
                person.Health -= 10;
                person.hurt = true;
            }
        }
    }
};