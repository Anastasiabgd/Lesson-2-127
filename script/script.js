"use strict";



////////////////////////////////HW 1


let obj = {
    berlin: 'germany',
   Tbilisi: 'georgia',
   Kiev: 'ukraine'
   }

    for(let k in obj){
        console.log(k + " " + 'is' + " " + obj[k]);

   }
    
    
    
    ////////////// ცალკე თბილისი ვერ გამოვიყვანე
   
   



   


/////////////////////////// HW 2

let x = 5;
while(x < 100) {
    x++
    console.log(x);
}




   ////////////////////////////// HW 3

   let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

   for(i of array1){
   if(i > 0 && i < 10){
    console.log(i);
   }
   }



////////////////////////////////HW 4


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(c of array2){
    // console.log(c);
    if(c == 5){
        console.log('არის');
        break;
    }
}



/////////////////////////////////HW 5


let array3= [1, 2, 3, 4, 5];

let sum = 0;
for(let x=0; x < array3.length; x++){
   sum += array3[x];
}
   console.log(sum);



////////////////////////////////////HW 6

let array4 = [1, 2, 3, 7, 6, 9];

let sum = 0;

for(let b of array4){
   sum += b;
}
let result = sum / array4.length;
console.log(result);



////////////////////////////HW 7

let x = 18;

switch (x) {
    case 5:
        console.log('რიცხვი არის 5');
        
        break;

    case 10:
        console.log('რიხვი არის 10');  
        
        break;

    default:
        console.log('სხვა რიცხვი');    

    
}



///////////////////////////////////////HW 8

let array5 = [1, 2, 3, 7, 6, 9];

for(let item of array5){
    if(item == 7){
        continue
    }
    console.log(item);
}






