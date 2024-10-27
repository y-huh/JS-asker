// 1
// let int = prompt("Son kiriting")

// if(int >= 1 && int <= 9){
//     alert("1 xonali")
// }
// else if(int >= 10 && int <= 99){
//     alert("2 xonali")
// }
// else if(int >= 100 && int <= 999){
//     alert("3 xonali")
// }
// else if(int >= 1000 && int <= 9999){
//     alert("4 xonali")
// }








// 2
// let int = prompt("Son kiriting")

// if( int% 2 == 0){
//     alert("juft")
// }                 
// else{
//         alert("toq")
//     }





// 3
// let int = prompt("Son kiriting")
// if( int% 2 == 0){                                           
//     if(int >= 1 && int <= 9){
//         alert("1 xonali")
//     }
//     else if(int >= 10 && int <= 99){
//         alert("2 xonali")
//     }
//     else if(int >= 100 && int <= 999){
//         alert("3 xonali")
//     }
//     else if(int >= 1000 && int <= 9999){
//         alert("4 xonali")
//     }
//     alert("juft")
// }
// else{
//     alert("toq")
//     if(int >= 1 && int <= 9){
//         alert("1 xonali")
//     }
//     else if(int >= 10 && int <= 99){
//         alert("2 xonali")
//     }
//     else if(int >= 100 && int <= 999){
//         alert("3 xonali")
//     }
//     else if(int >= 1000 && int <= 9999){
//         alert("4 xonali")
//     }
// }









//  4
// let int = prompt("1 Son kiriting")
// let int2 = prompt("2 Son kiriting")
// let int3 = prompt("3 Son kiriting")

// if(int>int2 && int>int3){
//     if(int2>int3){
//         console.log(nt,int2,int3)
//     }
//     else{
//         console.log(nt,int3,int2)
//     }
// }

// if(int2>int && int2>int3){
//     if(int>int3){
//        console.log(int2,int,int3)
//     }
//     else{
//        console.log(int2,int3,int)
//     }
// }
// if(int3>int && int3>int2){
//     if(int>int2){
//        console.log(int3,int,int2)
//     }
//     else{
//        console.log(int3,int2,int)
//     }
// }









// 5
// let int = prompt("3 xonali son kiriting")
// let last = int%10
// let first = Math.floor("int/100")
// let fs = int/10
// let sec = Math.floor(fs%10)
// if(first>last  || first>sec){
//     alert(first)
// }
// if(sec>first  || sec>last){
//     alert(sec)
// }
// if(last>first  || last>sec){
//     alert(last)
// }











// 6

// let int = prompt("3 xonali son kiriting")-0
// let a = int/10
// let c = Math.floor(int/100)
// let sec = Math.floor(a%10)
// alert(sec) 








// 7
// let speed = prompt("Tezlikni kiriting (km/soat):")

// let speedLimit = 70
// let point = 5
// if(speed<speedLimit){
//     alert("Hammasi Yaxshi")
// }
// else{
//     let point = Math.floor((speed-speedLimit)/5)
//     if(point=>12){
//         alert("Prava olindi")
//     }
//     else{
//         alert(point)
//     }
// }







// 8
// alert("Togridan togri yosh sorash togri yaxshi emas,shuning uchun yilingizni ayting uzim topvolaman")
// let year = prompt("Nechingchi yilsiz?")-0
// let thisYear = 2024
// let age = thisYear-year
// alert(age + "- yoshdasiz")






//9 
// let int = prompt("Son kiriting")
// let intNum = int.toString().length
// alert("Sizning soningiz - "+ intNum +" xonali")

// if(int%2 == 0){
//     alert("Son Juft")
// }
// else(
//     alert("Son Toq")
// )
// if(int <0){
//     alert("Son Manfiy")
// }
// else{
//     alert("Son Musbat")
// }








// 10
// let int = prompt("Son kiriting")
// let fizz
// let buzz
// if(int % 3 == 0 && int % 5 == 0){
//     alert("Fizz & Buzz")
// }
// else if(int % 3 == 0){
//     alert("Fizz")
// }
// else if(int % 5 == 0){
//     alert("Buzz")
// }











//Special

// let money = prompt("Alisher qancha puling bor?")
// var dolar = 11000.34
// var euro = 12354.03
// var all = (750*dolar +120*euro)
// if(money>=all){
//     alert("Oq yol")
// }
// else{
//     alert("Alisher, ozgina sabr qilish kerak bo'lar ekan")
// }