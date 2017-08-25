var autoSetRem = (function(doc, win) {
    var docEl = doc.documentElement,
        done = false,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        set = function(paper) {
            if(paper==null){
                paper=750;
            }
            var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / paper) + 'px';
            done = true;
            return done;
        };
    return {
        set:set
    };
    //AbortifbrowserdoesnotsupportaddEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, set, false);
    doc.addEventListener('DOMContentLoaded', set, false);
})(document, window);

window.onload=function(){
    autoSetRem.set();
};
