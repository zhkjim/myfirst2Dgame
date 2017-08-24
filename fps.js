/**
 * Created by ASUSPC on 2017/5/1.
 */
var then = Date.now();
var fps=0;
function FPS() {

    var now = Date.now();
    var deltatime = now - then;
    fps += 1;
    if (deltatime >= 1000) {
        then += deltatime;
        appendfps(fps);
        fps = 0;
    }
}
function appendfps() {
    var e=document.getElementById('fps');
    var pe=document.getElementById("camera");
    e.innerHTML = "fps: " + fps;
    pe.appendChild(e);
}