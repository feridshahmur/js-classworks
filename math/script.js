// let a = [];
// array = [56 , 23 , 26 , 78 , 39]
// for (let i = 0; i < array.length; i++) {
//   if (array[i]%2 == 1) {
//    a.push(array[i]);
//   }
// }
// // console.log(a);
// console.log(a);
// 1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.
// array = [56 , 23 , 26 , 78 , 39];
// let newArray = [];
// let maxDeyer =0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i]%2 == 0) {
//     newArray.push(array[i])
//   }

//  for (let i = 0; i < newArray.length; i++) {
//   if (maxDeyer < newArray[i]) {
//     maxDeyer=newArray[i];
//   }

//  }

// }
// console.log(maxDeyer);
// console.log(newArray);
// let array = [56 , 23 , 26 , 78 , 39];
// // 2.Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.

// let newArray = [];
// let minDeyer = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (array[i]%2 != 0) {
//     newArray.push(array[i])
//   }

//  for (let i = 0; i < newArray.length; i++) {
//   if (minDeyer > newArray[i]) {
//     minDeyer=newArray[i];
//   }

//  }
// }
// console.log(minDeyer);
// Verilmiş arraydə ən böyük və ən kiçik ədədlərini hasili ilə cəmini müqasiyə edin.
// let array = [56, 23, 26, 78, 39];
// let largest = array[0];
// let smallest = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (largest < array[i]) {
//     largest = array[i];
//   }
// }
// console.log(largest);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < smallest) {
//     smallest = array[i];
//   }
// }
// console.log(smallest);

// hasil = largest * smallest;
// sum = largest + smallest;
// console.log(hasil);
// console.log(sum);
// if (hasil>sum) {
//   console.log(`${hasil}>${sum}`);
  
// }else{
//   console.log(`${hasil}<${sum}`);
// }
// 4.Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.
// let array = [56, 23, 26, 78, 39];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum+=array[i]
  
// }
// console.log(sum);
// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.
// let array = [56, 23, 26, 78, 39];
// let newArray = [];
// let largest = array[0];
// let smallest = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (largest < array[i]) {
//     largest = array[i];
//   }
// }
// console.log(largest);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < smallest) {
//     smallest = array[i];
//   }
// }
// console.log(smallest);

// array[1]= 78;
// array[3]=23;
// console.log(array);
// 6.Verilmiş arraydə təkrərlanan elementi tapin.

// const array = [1, 2, 3, 4, 5, 3];


// let duplicate = null;

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             duplicate = array[i];
//             break;
//         }
//     }
//     if (duplicate !== null) {
//         break;
//     }
// }

// if (duplicate !== null) {
//     console.log(duplicate);
// } else {
//     console.log("Təkrarlanan element yoxdur.");
// }
// let people = [
//   { name: "Aysel", age: 25 },
//   { name: "Rəşad", age: 30 },
//   { name: "Leyla", age: 18 },
//   { name: "Kamal", age: 40 }
// ];
// let avarage = 0;
// for (let i = 0; i < people.length; i++) {
  
//   avarage+=(people[i].age)/4
// }
// console.log(avarage);
// city dəyəri Bakı olan və yaşı 20-dən böyük olan insanları tapıb adlarını çıxarın.
// let people = [
//   { name: "Aysel", age: 25, city: "Bakı" },
//   { name: "Rəşad", age: 30, city: "Gəncə" },
//   { name: "Leyla", age: 18 , city: "Bakı" },
//   { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];
// for (let i = 0; i < people.length; i++) {
//       if (people[i].city.toLowerCase =

//          "bakı" && people[i].age>=20) {
//         console.log(people[i].name);
        
//       }  
// }
// 10. İki Array-də Eyni Elementlərin Tapılması
// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];
//  for (let i = 1; i < array1.length; i++) {
//   for (let j = 1; j < array2.length; j++) {
//     if (array1[i] == array2[j]) {
     
//       console.log(array1[i]);
      
//     }
    
//   }
// }
// 11.Verilmiş array də mənfi və müsbət ədədlərin sayini tapin.
// let array =[-10,12,-23,40,60,73,-6,-20];
//  let musbet = 0;
//  let menfi = 0;
//  for (let i = 0; i < array.length; i++) {
//   if (array[i]>0) {
//     musbet++
//   }else if( array[i]<0){
//     menfi++
//   }
  
//  }
//  console.log(musbet);
//  console.log(menfi);
 
// let array =[-10,12,-23,40,60,73,-6,-20];
// let arr=[];
// for (let i = 0; i < array.length-1; i--) {
//   arr.push(array[i])
  
// }
// console.log(arr[i]);
// ev tapsiriqlari
// Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let array = [56, 23, 26, 78, 39];
// let number = 78;
// for (let i = 0; i < array.length; i++) {
//   if (number==array[i]) {
//     console.log(`${number}arraya daxildir`);
//     break;
    
//   }else{
//     console.log(`${number}arraya daxil deyil`);
   
//   }
  
// }
const students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores : [90, 95, 85] },
  { name: "Davud", scores: [100, 100, 100] }
]



let elachi = 0;
let bigAverage = 0;

for (let i = 0; i < students.length; i++) {
  let cem = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    cem += students[i].scores[j];
  }

  average = cem / students[i].scores.length;

  if (average > 90 && average > bigAverage) {
    bigAverage = average;
    elachi = students[i];
  }
}

console.log(elachi);


