




// let inputStr= prompt ("nhap so ")
// let inputNumber = Number(inputStr);

// if(isNaN(inputNumber)){
//     console.log("not a number" );
// }else {
//     let isPrime = true ; 



//     for ( let i=2 ; i< inputNumber; i++){
//         if( inputNumber % i ===0){
//             isPrime = false;
//             console.log("uoc so dau tien la", i);
//             break;
//         }
//     }


// }
// if (isPrime=true) {
//     console.log("so ban nhap la so nguyen to ")
// } else {
// console.log ("so ban nhap la hop so ")
// }



// let  inputNumber = prompt("nhap so")
// let isPrime = true ;

// for( let i = 2; i < inputNumber;  i++){
//     if ( inputNumber % i ===0  ){
//         isPrime=false;
//         console.log("uoc so dau tien: ", i)
//         break;
//     } 
    
//     if (isPrime = true ){
//         console.log("day la so nguyen to ")
//     } else{
//         console.log("day la hop so ")
//     }
// }



function checkPrime(n) {
    let flag = 1;
    if (n < 2) return flag = 0

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return flag = 0;

        }
    }
    return flag;
}


let a = prompt ("nhap so a")
let b = prompt ("nhap so b")
let arrayNumber = []

for (let i = a; i <= b; i++) {
    arrayNumber.push(i)
}
console.log(arrayNumber)

for (let i = 0; i < arrayNumber.length; i++) {
    if (checkPrime(arrayNumber[i]) == 1) console.log(arrayNumber[i])
}

































