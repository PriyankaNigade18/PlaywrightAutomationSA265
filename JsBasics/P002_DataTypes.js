/*
Variable 
===========
Name of storage location is called variable

In Js 3 keywords we use to declare variable
---------------------------------------------
var, let , const

Syntax:
===========
let id=101;
let name="Jay";

DataTypes
===============
Data types defines what type of data we store into variable

Rule: As Js it is dynamic language so we dont need to declare
datatype while declaraing any variable

1.Primitive data types
==========================
1.number
2.string
3.boolean
4.undefined
5.null
Added after ES6
6.BigInt(NA for automation)
7.symbol(NA)

2.Non primitive data types
-----------------------------
Everything is dynamic object in Js
Object/Array/String


typeof operator
===============
to check what type of data stored into variable
typeof variable
typeof object
typeof function

*/
console.log("-------number type--------");
/*
Any number which is positive/negative integer or 
any decimal number it is in Js number type
Size: 8byte (64bits)
1byte=8bits

*/


let num1=100;
console.log(num1);
console.log("This is number1: "+num1);
console.log("This is number1: ",num1);
console.log(typeof num1);//number

let num2=-786;
console.log("This is num2: "+num2);
console.log(typeof num2);//number

let num3=89.76876;
console.log("This is num3: "+num3);
console.log(typeof num3);//number

//range
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991


let num4=9007199254740991;
num4=num4+1;
console.log(num4);
console.log(typeof num4);

console.log("------BigInt------");
//added after ES6 version
//BigInt: add number with suffix n

let num5=900719925474099168789098090n;
console.log(typeof num5);//bigint
let num6=89n;
console.log(typeof num6);//bigint

console.log(num4+num6);


console.log("--------boolean--------");
/*
boolean is true/false

*/

let isActive=true;
console.log("Participants are active?: "+isActive);//true
console.log(typeof isActive);//boolean

let isEmployed=false;
console.log(typeof isEmployed);//boolean

console.log("------string---------");
/*
In Js string is primitive data type
String is represented as Dynamic Object
string is collection of characters

Note: In Js we dont have any char type
Everything is string

Ways to Declare string
---------------------------
1.single quoat   'Hello'
2.double quoat   "Hello"
3.template string(ES6) `Hello` back tick

*/


let fname='Shivani';
console.log("first name is: "+fname);
console.log(typeof fname);//string

let location="US";
console.log("location is: "+location);
console.log(typeof location);//string

//template string
let emailId=`shivani@gmail.com`;
console.log("email id is: "+emailId);
console.log(typeof emailId);//string 

let ch='P';
console.log(typeof ch);//string


let profile=`My Name is Priyanka, having over 15+ years experience
I am ISTQB certified tester and conducting automation trinings!
I have completed masters in Computers!`;

console.log(profile);


let currentYear=2026;

console.log("This is current year",currentYear);
console.log("This is current year"+currentYear);

//To read value from variable into template string use ${variableName}

let requestPayload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year":${currentYear},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`;

console.log(requestPayload);

console.log(typeof requestPayload);//string

console.log("---------undefined----------");
/*
If variable declare and not initialized then value and type is undefined
*/

let age;
console.log("age is: "+age);//undefined
console.log(typeof age);//undefined

console.log("------null------");
/*
null:unknown value

this is legacy bug in Js
*/

let stdName=null;
console.log(stdName);//null
console.log(typeof stdName);//object


let clgName=null;
console.log(clgName);//null
console.log(typeof clgName);//object






















































