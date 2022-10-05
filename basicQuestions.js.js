


// question 1;
// let r= 50 ;
// let areaofCircle = 3.142 *(r**2);
// console.log(areaofCircle);

// // question 2

// let a = 50;
// let b = 4;
// c = a + b;
// d = a * b;
// e = a - b;
// f = a / b;
// console.log(c , d, e, f);

// // question 3

// let f = 6;
// let i = 3;
// let ans = (f * 12)+ i;
// console.log(ans * 2.54);

// //  question 4 
// let x1 = 2;
// let x2 = 1;
// let y1 = 2;
// let y2 = 1;

// let dis = (((x2-x1)**2)+(y2-y1)**2)**1/2;
// console.log(dis);

// // question 5 

// let dateofBirth = prompt("enter DOB"); 
// let rollNo = prompt("roll no ");
// let section = prompt("section");
// let percentage  = prompt("percentage"); 
// let grade = prompt("grade of matric  ");
// let gradeofInter= prompt("grade of intermediate");

// console.log("dob:"+ dateofBirth,"roll number:"+ rollNo,"section:"+ section,"percentage:"+ percentage,"grade:" + grade,"gradeof inter:"+gradeofInter);

// // question 6

// let food = prompt("foodname");
// console.log("let me see if i can find you a "+ food.toUpperCase() );

// // question 7 

// let english = parseInt (prompt("enter you marks eng"));
// let math = parseInt (prompt("enter you marks math   "));
// let science =parseInt (prompt("enter you marks science"));
// let chemistry =parseInt (prompt("enter you marks chemistry"));
// let bio =parseInt (prompt("enter you marks bio"));

// let total_marks = (english + math+ science+ chemistry+ bio);
// let ave = total_marks/5
// let per = (total_marks*100)/250;
// console.log(per);

// // question 8 

// let evenOdd = parseInt (prompt("enter your number "));

// if(evenOdd % 2 == 0){
//     console.log("this number is even");

// }
// else{
//     console.log("this number is odd");
// }

// // question 9 

// let yearofService = parseInt(prompt("enter the number:"));
// let qualification = prompt("qualification");

// if (yearofService >= 10 && qualification === "Masters") {
//     console.log("the salary of masters is 150000");
// }  if (yearofService >= 10 && qualification === "Bachelors") {
//     console.log("the salary of bachelors is 100000")

// } if (yearofService < 10 && qualification  ===  "Masters"){
//     console.log("the salary of masters is 10000")
// }if (yearofService < 10 && qualification === "Bachelors"){
//     console.log(" the salary of bachelors is 1000");
// }

// // question 10 

// let age = parseInt(prompt("enter the  age value  "));
// if (age < 2) {
//     console.log("the person is baby ");

// } else if(age >= 2 && age < 4 ){
//     console.log("ths person is toddler ");

// }
//  else if (age >= 4 && age < 13){
//     console.log("the person is kid ");
// }
//  else if(age >= 13 && age < 20){
//     console.log("the person is teenager ")
// }
//  else if(age >= 20 && age < 60){
//     console.log("the person is an adult");

// } else if(age > 65){
//     console.log("the person is elder ");
// }




// question 11

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//    sum = sum + i;
//     console.log(sum);

// }

// question12

// let number = parseInt(prompt(`enter the umber`));
// for(i = 1; i<= 10; i++){
// let res = i * number;
// console.log(`${number}* ${i} = ${res}`);

// }

// question 13 

// let vowels = ["a","e","i","o","u"];
// for(i=0; i<vowels.length;i++){
//     console.log(vowels[i]);
// }

// question14

// let sum = 0 ;

// for( let i = 1; i<8;i++){
//     sum = sum + i;

//     console.log(sum );


// }
// question 15 

// const num1 = 900;
// const num2 = 1000;
// console.log(`The prime numbers between ${num1} and ${num2} are:`);

// for (let i = num1; i <= num2; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// question 16 ;

// for(i=1; i<=6; i++){
//     for(j=1;j<=10;j++){
//         let res = i * j;
//         console.log( i + " X" + j + " = " + res);
//     }

// }

// question 17 

// .(a)
// for(i = 1; i< 16; i++){
//     console.log(i)
// }
// // .b
// let myarr = [1,2,3,4,5,6,7,8,9,10];
// console.log(myarr.reverse());


// .(c)

// for(i = 1; i<=20;i++){
// if( i % 2 == 0)
//     console.log(i);
// }

// // .(d)
// for (i = 1; i<=20; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }

// question 18
// for (i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "is Even");
//     }
//     else if (i % 2 == 1) {
//         console.log(i + "is odd");
//     }
// }
// let m = 1;
// for (i = 1; i<= 15; i++ ){
//     if(i % 2 ==1){
//     m = m * i;

//     }

//     console.log(m);

// }

// question 19

// let str = '';

// for(i = 0; i <= 7 ; i++) {
//     for(j = 7; j >= i; j--) {
//        str = str + '*';
//     }
//     str = str + '\n';
// }
// console.log(str);

// question 20
// function favorite_book(title){
// console.log(title + "One of my favorite book ")
// }
// favorite_book("five feet a apart ")

// question 21
// function describe_city(city, country ="xp"){
//     console.log(city + " is in "+ country +".");

// }describe_city("karachi", "pakistan")
// describe_city("lahore", "pakistan")
// describe_city("isl", "pakistan")
// describe_city("isl")
// question 22

// const fruits = ["strawberry", "apple", "orange", "banana"]
// console.log(fruits.sort());

// question23

// const myarr = [2,3,4]
// function max(myarr){
//    let maxv=myarr[0]//2
//     for(i=1;i<myarr.length;i++){
//         if(maxv < myarr[i]){
//             maxv = myarr[i];

//         }
//     }
//     return maxv;
// }
// console.log(max(myarr));

// question 24

// const  numbers = [24, 53, 78, 91 , 12];

// const smallest_number = Math.min(...numbers);
// const largest_number = Math.max(...numbers);

// console.log(  'smallest value: ',  smallest_number  );
// console.log(  'largest value:' , largest_number   );

// question 25

// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
  
//   console.log(gcd_two_numbers(20,55));
//   console.log(gcd_two_numbers(32, 33));

// question26

// const stu = ["ali", "hassan", "israr"]
//  const obtMarks = ["400", "444", "455"]
//  for(i=0;i<stu.length;i++){
//     console.log(stu[i]+ "m="+ obtMarks[i]);
//     let per = (obtMarks[i]/500)*100
//     console.log(per);


//  }

// question27

// const myArr = ["red","blue ", "white "];
// myArr.unshift(prompt("enter the color "));
// console.log(myArr);

// const myArr = ["red","blue ", "white "];
// myArr.push(prompt("enter the color "));
// console.log(myArr);

// const myArr = ["red","blue ", "white "];
// myArr.unshift(prompt("enter the color "));
// myArr.unshift(prompt("enter the 2nd color "));
// console.log(myArr);

// const myArr = ["red","blue ", "white "];
// myArr.shift();
// console.log(myArr);

// const myArr = ["red","blue ", "white "];
// myArr.pop();
// console.log(myArr);

// const myArr = ["red","blue ", "white "];
// myArr = prompt("which color you want to remove")
// myArr = myArr.shift(prompt);
// console.log(myArr);

// const a = ["white","red","pink","black"]
// console.log(a.splice(prompt("which color you want to delete.")))

// question 28

// const marks =[23,43,45,4,3,21,22,33]
// console.log(marks + "\n" +  marks.sort() + " " +  "student marks are sorted in ascending order ");

// question 29

// const fruits = ["cake", "apple pie","cookie", "chips", "patties"]
// const namnamee = "//israr";
// fruits.unshift(namnamee)
// const uservalue = prompt("search the tem in the llist ");
// let found=false
// for(i=0; i< fruits.length;i++){
//     if (uservalue === fruits[i]){
//         found =true
    
//     }

// }


// console.log(found===false ? " no " : "yes found");





