/**
 * Created by ASUSPC on 2017/5/1.
 */
var keyStatus = {
    "left": 37,
    "right": 39,
    "space": 32,
    "F": 70,
    "E":69
};
var buttonPressStatus = {
    "left": false,
    "right": false,
    "space": false,
    "F": false,
    "E":false
};
document.body.onkeydown = function (e) {
    keyDown(e)
};

document.body.onkeyup = function (e) {
    keyUp(e)
};
function keyDown(event) {

    var ddd = event.keyCode;
    for (var i in keyStatus) {
        if (ddd == 32) {
            if (person["gravityStatus"] == false) {
                buttonPressStatus["space"] = true
            }
        }
        else if (keyStatus[i] == ddd) {
            if (buttonPressStatus.hasOwnProperty(i)) {
                for (var u in buttonPressStatus) {
                    if (u = i) {
                        buttonPressStatus[u] = true;
                    }
                }
            }
        }
    }
}
function keyUp(event) {
    var ddd = event.keyCode;
    for (var i in keyStatus) {
        if (ddd == 37 || ddd == 39) {
            person.state = 'stand'
        }
        if (keyStatus[i] == ddd) {
            if (buttonPressStatus.hasOwnProperty(i)) {
                for (var u in buttonPressStatus) {
                    if (u = i) {
                        buttonPressStatus[u] = false;
                    }
                }
            }
        }
    }
}