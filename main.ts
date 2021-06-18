// let hello = "hello typescript~"
// console.log(hello);
import {Point} from "./point"
let number1 = 1;
let number2 = 2;

//数字（number）字符串(string)和布尔(boolean)类型的显式声明
let num: number = 0
let isTrue: boolean = true
let str: string = 'example'

function add(n1:number,n2:number){
    return n1 + n2;
}

//数组（Array）和元祖（Tuppple）
let list = [1,2,3]  //隐式声明
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]
//混合类型
let list3 = [1,'test']
let list4: any[] = [1,'test']
//元祖是固定数量固定类型的数组
let list5: [string,number] = ['test',1]
//元祖bug可使用push给数组添加元素
list5.push(3)

//联合（union）和文献（literal）类型

//联合类型是由两个或多个其他类型形成的类型，表示可能是那些类型中的任何一个的值
let union0: string | number;

function merge(n1: string | number,n2: string | number){
    if(typeof n1 === "string" || typeof n2 === "string"){
        return n1.toString() + n2.toString();
    }else{
        return n1 + n2;
    }
}

let mergeNumber = merge(1,5);
let mergeString = merge(1,'gweygsedadgas');
// console.log(mergeNumber);
// console.log(mergeString);

//我们还可以在类型位置引用特定的字符串和数字,这就是字面量定义（literal）
let x: "hello" = "hello";
//与union一起使用
let literal0: 1 | 'true' | [1,2,3]

//枚举类型 enum 
//枚举允许开发人员定义一组命名常量,TypeScript提供数字枚举和基于字符串的枚举。

enum color{
    red,
    green,
    blue
}
//枚举的数字值默认从0开始自增
let myColor = color.green;
console.log(myColor);

enum color1{
    red = 5,
    green,  //6
    blue    //7
}
enum color2{
    red = 5,
    green = 10,  
    blue = 1    
}
enum color3{
    red = 5,
    green = 10,  
    blue = "blue"   
}

//动态类型any和unknown

//TypeScript还有一个特殊类型，any您可以在不希望特定值引起类型检查错误的任何时候使用它。
let obj: any = { x: 0 };
// obj.foo();
// obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

//unknown类型表示任何值。这与any类型相似，但是更安全，因为用unknown值做任何事情都是不合法的,需要判断类型后再使用方法
let random: unknown = 666;
random = "ggg";
random = true;
if(typeof random === 'string'){
    random.toLocaleUpperCase()
}

//void,undefined和never
//void表示不返回值的函数的返回值。每当函数没有任何return语句，或者不从那些return语句返回任何显式值时，便是推断的类型。
function print1() : void {
    console.log('this is void!')
}

//undefined表示未初始化的值
function print2() : undefined {
    console.log('this is undfined!')
    return
}

//TypeScript将使用never类型来表示不应该存在的状态(多用来处理异常)。
function throwError1(message:string,errorCode:number):never{
    throw{
        message,
        errorCode
    }
}

//type assertions类型断言
//您将获得有关TypeScript不知道的值的类型的信息如any类型，在这种情况下，可以使用类型断言来指定更具体的类型：
let message:any;
message = "abc";
//两种写法
let str333 =  (<string>message).endsWith('C');
let str444 = (message as string).endsWith('C');

//function
//TypeScript允许您指定函数的输入和输出值以及返回值的类型。
let log = (message:string,code:number):void =>{
    console.log(message,code)
}
log("hello",404);

//可用？设置可选参数（必须在参数末尾从后往前排列）
let log1 = (message:string,code?:number)=>{
    console.log(message,code)
}
log1('aaa')
//可选参数也可是设置默认值（必须在参数末尾从后往前排列）
let log2 = (message:string,code:number=0)=>{
    console.log(message,code)
}
log2('aaa')

//object
//typescript的对象不是键值对(key to value)，是键类型对（key to type）
let obj111 = {
    name:'',
    id:null
}

//interface和class
//interface 接口。通过接口，我们可以使用extends从其他类型扩展的子句，并且我们能够对交集做类似的事情，并使用类型别名来命名结果
// interface IPoint{
//     // x:number,
//     // y:number,
//     drawPoint:() => void,
//     getDistance:(p:IPoint)=>number
// }
// // implements关键字用来实现接口
// class Point implements IPoint{
//     // private x:number;
//     // private y:number;
//     //ts的构造函数无法重载
//     constructor(private x:number,private y:number){
//         this.x = x;
//         this.y = y;
//     }
//     drawPoint = () => {
//         console.log("x:"+this.x+"y:"+this.y);
//     }
//     getDistance = (p:IPoint) => {
//         // return Math.pow(p.x - this.x,2) + Math.pow(p.y-this.y,2)
//         return 0
//     }
//     //私有变量的访问使用自定义get和set
//     setX=(value:number) =>{
//         if(value<0){
//             throw new Error("value不能小于0")
//         }
//         this.x = value
//     }
//     getX(){
//         return this.x
//     }
//     getY(){
//         return this.y
//     }
// }

const point = new Point(3,5)
point.drawPoint()
point.setX(10)
point.setX(-4)

//访问修饰符：public(默认) private  protected 

//generics 泛型
//泛型，够创建一个可以在多种类型而不是单一类型上工作的组件。这允许用户使用这些组件并使用他们自己的类型。

let lastInArray = <T>(arr:T[]) =>{
    return arr[arr.length-1]
}

const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray(['1','2']);

let makeTuple = <T,Y>(x:T,y:Y)=>[x,y]

const v1 = makeTuple(1,"1");
const v2 = makeTuple<boolean,number>(true,1);