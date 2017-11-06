for (var i = 0; i < onpopstate.length; i++) {
    oPs[i].index = i; //先编号，大家约定俗成，实际叫什么都可以

    oPs[i].onclick = function() {
        alert("我是老" + this.index + "点我干嘛~");
    }
}