// 1.ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    fistname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}
console.log(user.studentstatus)

//2.შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);

var colors = ["red","blue","green","yellow","purple"];
for(var index=0; index<colors.length; index++ )
console.log(colors[index]);

let loading = 0;
while(loading<100) {
    console.log("Loading please wait");
    loading+=20;
}

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let index = 0; index < numbers.length; index++)
if(numbers[index] > 5) {
    console.log(numbers[index]);
}

// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let index = 0; index < numbers.length; index++)
  if (numbers[index] > 5) {
    console.log(numbers[index]);
  }

// 4.

let user = {
    name: "giorgi",
    age:  20,
    studentstatus: "active"
}
if  (user.age < 18 & user.studentstatus === "active"){
    console.log("Hello");
}
else{
console.log("error")
}

// 5.გამოიტანეთ მარტო სრტინგები;

let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];
for (let index = 0; index < array.length; index++)
  if (typeof array[index] === "string") {
    console.log(array[index]);
  }

// 6. გამოიტანეთ მხოლოდ დადებითი რიცხვები

let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let x of array) {
  for (let positive of x) {
    if (positive > 0) {
      console.log(positive);
    }
  }
}

// 7.
// 7.1.ამოიღეთ მარტო ლუწი რიცხვები

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (let number of array) {
    if (number % 2 == 0) {
        console.log(number);
    }
}

// 7.2.ამოიღეთ კენტი რიცხვები 
let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (let number1 of array1) {
    if (number1 % 2 != 0) {
        console.log(number1);
    }
}
// 8.Კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let item of users) {
  if (item.status == true) {
    console.log(item);
  }
}
