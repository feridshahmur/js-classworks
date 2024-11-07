// class Person {
//   constructor(name , age , country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }
// class Student extends Person{
//   constructor(name , age , country){
//     super(name , age , country)
//   }
// }
// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//          var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi.
class CustomMath {
  constructor(value) {
    this.value = value;
  }
  plus(value) {
    this.value += value;
    return this;
  }
  minus(value) {
    this.value -= value;
    return this;
  }
  multiply(value) {
    this.value *= value;
    return this;
  }
  divide(value) {
    this.value /= value;
    return this;
  }
}
let result = new CustomMath(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);
