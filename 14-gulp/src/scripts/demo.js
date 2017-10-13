(() => {
    console.log(666);

    class Point{
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        show(){
            return '(' +this.x+ ' '+ this.y + ')';
        }
    }
    var point = new Point(5,6);
    console.log(point.show()); 
})()