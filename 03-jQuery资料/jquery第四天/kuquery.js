(function(){
    var kuquery = function(select){
        return new kuquery.fn.init(select);
    }

    kuquery.fn = {
        init:function(select){
            if(select.substr(0,1) === "#"){
                var o = document.getElementById(select.substr(1));

                this[0] = o;
                this.length = 1;
            }else if(select.substr(0,1) === "." ){
                var cls = document.getElementsByClassName(select.substr(1));

                for(var i=0;i<cls.length;i++){
                    this[i] = cls[i];
                }
                this.length = cls.length;
            }else{
                var os = document.getElementsByTagName(select);
                for(var i=0;i<os.length;i++){
                    this[i] = os[i];
                }
                this.length = os.length;
            }
        },
        css:function(name,value){
            for(var i=0;i<this.length;i++){
                this[i].style[name] = value;
            }
            return this;
        },
        attr:function(name,value){
                for(var i=0;i<this.length;i++){
                    this[i].setAttribute(name,value);
                }
                return this;
        },
        html:function(html){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML = html;
            }
            return;
        },
        eq:function(index){
            this[0] = this[index];

            for(var i=1;i<this.length;i++){
                delete this[i];
            }
            this.length = 1;
            return this;
        },
        remove:function(){
            for(var i=0;i<this.length;i++){
                delete this[i];
            }
            this.length = 0;
            return this;
        },
        empty:function(){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML = "";
            }
            return this;
        }
    }



    kuquery.fn.init.prototype = kuquery.fn;

    window.kq = kuquery;
})();