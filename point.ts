//interface和class
//interface 接口。通过接口，我们可以使用extends从其他类型扩展的子句，并且我们能够对交集做类似的事情，并使用类型别名来命名结果
interface IPoint{
    // x:number,
    // y:number,
    drawPoint:() => void,
    getDistance:(p:IPoint)=>number
}
// implements关键字用来实现接口
export class Point implements IPoint{
    // private x:number;
    // private y:number;
    //ts的构造函数无法重载
    constructor(private x:number,private y:number){
        this.x = x;
        this.y = y;
    }
    drawPoint = () => {
        console.log("x:"+this.x+"y:"+this.y);
    }
    getDistance = (p:IPoint) => {
        // return Math.pow(p.x - this.x,2) + Math.pow(p.y-this.y,2)
        return 0
    }
    //私有变量的访问使用自定义get和set
    setX=(value:number) =>{
        if(value<0){
            throw new Error("value不能小于0")
        }
        this.x = value
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
}