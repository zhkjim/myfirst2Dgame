/**
 * Created by ASUSPC on 2017/5/1.
 */
var clip = [];
var firethen;
var bullet = {
    name: "bullet",
    height: 20,
    width: 50,
    whether: true,
    go: false,

    fire: function () {
        var newBullet = document.createElement("div");
        var e = document.getElementById("scene");
        e.appendChild(newBullet);
        newBullet.style.height = this.height + "px";
        newBullet.style.width = this.width + "px";
        newBullet.style.top = -parseFloat(person.Yorigin) + 370 + "px";
        newBullet.style.left = parseFloat(person.Xorigin) + 50 + "px";
        newBullet.setAttribute("id", this.name);
        newBullet.setAttribute("class", this.name);
        if (person.turn == "right") {
            newBullet.setAttribute("direction", "right");
        }
        else if (person.turn == "left") {
            newBullet.setAttribute("direction", "left")
        }
        clip.push(this);
        return newBullet
    }

};
function BulletFire() {
    if (bullet.go) {
        bullet.fire();
        bullet.whether = false;
        bullet.go = false;
    }
    var now = Date.now();
    var deltatime = now - firethen;
    if (deltatime >= 300) {
        bullet.whether = true
    }
    for (var i in clip) {
        var e = document.getElementsByClassName("bullet")[i];
        bulletmove(e);
    }

}
function bulletmove(obj) {
    if (!obj)return;
    if (obj.getAttribute("direction") == "right") {
        obj.style.left = (parseFloat(obj.style.left) + 10) + 'px';
    }
    else {
        obj.style.left = (parseFloat(obj.style.left) - 10) + 'px';
    }
    if (parseFloat(obj.style.left) - parseFloat(person.Xorigin) >= 1000 || parseFloat(obj.style.left) - parseFloat(person.Xorigin) <= -1000) {
        document.getElementById('scene').removeChild(obj)
    }
    if (document.getElementById("mummy1") && parseFloat(obj.style.left) - mummy1.Xorigin >= 0 && parseFloat(obj.style.left) - mummy1.Xorigin <= 75 && parseFloat(obj.style.top) - mummy1.top >= 0 && parseFloat(obj.style.top) - mummy1.top <= 300) {
        mummy1.health -= 20;
        document.getElementById('scene').removeChild(obj);
    }
    if (document.getElementById("mummy2") && parseFloat(obj.style.left) - mummy2.Xorigin >= 0 && parseFloat(obj.style.left) - mummy2.Xorigin <= 75 && parseFloat(obj.style.top) - mummy2.top >= 0 && parseFloat(obj.style.top) - mummy2.top <= 300) {
        mummy2.health -= 20;
        document.getElementById('scene').removeChild(obj);
    }
}