/**
 * Created by ASUSPC on 2017/5/2.
 */
document.getElementById("restart").onclick= function () {
    window.open('gametest1.html');
    window.close();
};
document.getElementById("next").onclick= function () {
    window.open('gametest1.html');
    window.close();
};
document.getElementsByClassName("exit")[0].onclick= function () {
    window.close();
};
document.getElementsByClassName("exit")[1].onclick= function () {
    window.close();
};
document.getElementById('bgmcontroler').onclick= function () {
    var x=document.getElementById('bgm');
    if(x.muted) {
        x.muted = false;
        document.getElementById('bgmcontroler').className = 'bgm1';
    }
    else{
        x.muted = true;
        document.getElementById('bgmcontroler').className = 'bgm2';
    }
}
