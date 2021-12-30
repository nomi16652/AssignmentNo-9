// 1. Write a js program to read and print elements of array.
console.log("==========================================================================");
console.log("Question No 1");
console.log("1. Write a js program to read and print elements of array.");
var arrayElement = [343, 54, 656, 78, "Nouman", "Ali"]

arrayElement.forEach(function(value) {
    console.log("Value:", value)
        // document.write("Value:",value)

});

// 2. Write a js program to print all negative elements in an array.
console.log("==========================================================================");
console.log("Question No 2");
console.log("2. Write a js program to print all negative elements in an array.");
var negativeArray = [-12, -34, 43, 5, -545, 33, -1]

function getNegativeArray(array) {
    var negatives = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i])

        }

    }
    return negatives

}
console.log("Nagative Values:", getNegativeArray(negativeArray));


// 3. Write a js program to find sum of all array elements. 
console.log("==========================================================================");
console.log("Question No 3");
console.log("3. Write a js program to find sum of all array elements. ");

var sumArray = [23, 43, 54, 12, 65, -87, 65]
var sum = 0

for (let i = 0; i < sumArray.length; i++) {

    sum = sum + sumArray[i]

}
console.log("Sum of Array Elements==>", sum);


// 4. Write a js program to find maximum and minimum element in an array.
console.log("==========================================================================");
console.log("Question No 4");
console.log("4. Write a js program to find maximum and minimum element in an array. ");

var maxMinArray = [30, 54, 5, 323, 76, 5, 453, 3423, 4]

// var maximun=Math.max.apply(Math,maxMinArray)
// console.log("Maximum Values of Arrays==>",maximun);

console.log("Maximum Array", maximunValue(maxMinArray));
console.log("Maximum Array", minimumValue(maxMinArray));

function maximunValue(max) {
    var lt = max.length
        // console.log("Max lenght:",lt);
    var maximum = max[lt - 1]
    while (lt--) {
        if (max[lt] > maximum) {
            maximum = max[lt]
        }
    }
    return maximum

}

function minimumValue(min) {
    var lat = min.length
    var minimum = min[lat - 1]
    while (min--) {
        if (min[lat] < minimum) {
            minimum = min[lat]

        }
    }
    return minimum
}

// 5. Write a js program to find second largest element in an array.
console.log("==========================================================================");
console.log("Question No 5");
console.log("5. Write a js program to find second largest element in an array.");

var findSecLargest = [12, 34, 56, 34546, 565, 4547, 576]

console.log("Second Largest Vlaue:", findSecondNumber(findSecLargest));

function findSecondNumber(maxi) {
    var maxim = Math.max.apply(null, maxi)
    findSecLargest.splice(findSecLargest.indexOf(maxim), 1)
    return Math.max.apply(null, maxi)
}


// 6. Write a js program to count total number of even and odd elements in an array.
console.log("==========================================================================");
console.log("Question No 6");
console.log("6. Write a js program to count total number of even and odd elements in an array.");
var evenOddElement = [212, 34, 43, 56, 67, 468, 9865, 7, 45, 4, 3, 3, 2]
var eCount = 0,
    oCount = 0

for (let i = 0; i < evenOddElement.length; i++) {
    if (evenOddElement[i] % 2 === 0) {
        eCount = eCount + 1

    } else {
        if (evenOddElement[i] % 2 !== 0) {


            oCount = oCount + 1

        }
    }

}
console.log("Even Values of Array:", eCount);
console.log("Odd Values of Array:", oCount);


// 7. Write a js program to count total number of negative elements in an array.
console.log("==========================================================================");
console.log("Question No 7");
console.log("7. Write a js program to count total number of negative elements in an array.");
var negArray = [123, 34, -454, 234, -45, -4234, 3, -54, -5]
var negativeValue = 0
for (let i = 0; i < negArray.length; i++) {
    if (negArray[i] < 0) {
        negativeValue = negativeValue + 1

    }

}
console.log("Negative Value In Array:", negativeValue);


// 8. Write a js program to copy all elements from an array to another array.
console.log("==========================================================================");
console.log("Question No 8");
console.log("8. Write a js program to copy all elements from an array to another array.");

var firsArray = [2, 2, 2, 2, 2]
var secArray = [1, 1, 1, 1, 1]
var newArr = secArray.concat(firsArray)
console.log("new Array:", newArr);

// 9. Write a js program to insert an element in an array.
console.log("==========================================================================");
console.log("Question No 9");
console.log("9. Write a js program to insert an element in an array.");
var orgArray = [12, 23, 4, 65, 7, 8, 33]
console.log("Orignal Array:", orgArray);
orgArray.push(0, 2112)
console.log("After Insert Element in Array:", orgArray);

// 10. Write a js program to delete an element from an array at specified position.
console.log("==========================================================================");
console.log("Question No 10");
console.log("10. Write a js program to delete an element from an array at specified position.");

var positionArray = [12, 54, 76, 87, 89, 43, 23, 4, 34, ]
console.log("Before Delete the Element in Array:", positionArray);
positionArray.splice(2, 1)
console.log("After Delete the Element in Specific Location:", positionArray);

// 11. Write a js program to count frequency of each element in an array.
console.log("==========================================================================");
console.log("Question No 11");
console.log("11. Write a js program to count frequency of each element in an array.");


// 12. Write a js program to print all unique elements in the array.
console.log("==========================================================================");
console.log("Question No 12");
console.log("12. Write a js program to print all unique elements in the array.");
var arrElement = [12, 2, 46, 6, 45, 44, 33, 44, 33, 12]
var uni = []
for (let i = 0; i < arrElement.length; i++) {
    const element = arrElement[i];

    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        if (element == element2) {
            uni.push(element2)

        }
    }


}
console.log("Inique Element==>", uni);

// 13. Write a js program to count total number of duplicate elements in an array.
console.log("==========================================================================");
console.log("Question No 13");
console.log("13. Write a js program to count total number of duplicate elements in an array.");



// 14. Write a js program to delete all duplicate elements from an array.
console.log("==========================================================================");
console.log("Question No 14");
console.log("14. Write a js program to delete all duplicate elements from an array.");



// 15. Write a js program to merge two array to third array.
console.log("==========================================================================");
console.log("Question No 15");
console.log("15. Write a js program to merge two array to third array.");
var arrayOne = [12, 1, 2, 12, 2]
console.log("Firat Array is:", arrayOne);
var arrayTwo = [0, 9, 8, 7, 6]
console.log("Second Array is:", arrayTwo);
var arrayThree = [].concat(arrayOne, arrayTwo)

console.log("Third Array is:", arrayThree);


// 16. Write a js program to find reverse of an array.
console.log("==========================================================================");
console.log("Question No 16");
console.log("16. Write a js program to find reverse of an array.");


// 17. Write a js program to put even and odd elements of array in two separate array.
console.log("==========================================================================");
console.log("Question No 17");
console.log("17. Write a js program to put even and odd elements of array in two separate array.");


// 18. Write a js program to search an element in an array.
console.log("==========================================================================");
console.log("Question No 18");
console.log("18. Write a js program to search an element in an array.");



// 19. Write a js program to sort array elements in ascending or descending order.
console.log("==========================================================================");
console.log("Question No 19");
console.log("19. Write a js program to sort array elements in ascending or descending order.");


// 20. Write a js program to sort even and odd elements of array separately.
console.log("==========================================================================");
console.log("Question No 20");
console.log("20. Write a js program to sort even and odd elements of array separately.");



// 21. Write a js program to left rotate an array.
console.log("==========================================================================");
console.log("Question No 21");
console.log("21. Write a js program to left rotate an array.");




// 22. Write a js program to right rotate an array.
console.log("==========================================================================");
console.log("Question No 22");
console.log("22. Write a js program to right rotate an array.");


// 23. Write a js program to print day of week name using switch case.
console.log("==========================================================================");
console.log("Question No 23");
console.log("23. Write a js program to print day of week name using switch case.");
let week = Number(prompt("Enter Day Number in a Week"))
switch (week) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter week number between 1-7.");
}


// 24. Write a js program print total number of days in a month using switch case.
console.log("==========================================================================");
console.log("Question No 24");
console.log("24. Write a js program print total number of days in a month using switch case.");

let month = Number(prompt("Enter Month Number (1-12)"))
switch (month) {
    case 1:
        console.log("31 days");
        break;
    case 2:
        console.log("28/29 days");
        break;
    case 3:
        console.log("31 days");
        break;
    case 4:
        console.log("30 days");
        break;
    case 5:
        console.log("31 days");
        break;
    case 6:
        console.log("30 days");
        break;
    case 7:
        console.log("31 days");
        break;
    case 8:
        console.log("31 days");
        break;
    case 9:
        console.log("30 days");
        break;
    case 10:
        console.log("31 days");
        break;
    case 11:
        console.log("30 days");
        break;
    case 12:
        console.log("31 days");
        break;
    default:
        console.log("Invalid input! Please enter month number between 1-12");
        break;

}

// 25. Write a js program to check whether an alphabet is vowel or consonant using switch case.
console.log("==========================================================================");
console.log("Question No 25");
console.log("25. Write a js program to check whether an alphabet is vowel or consonant using switch case.");
var vowel = prompt("Enter Alphabet==>")

switch (vowel == 'a' || vowel == 'A' || vowel == 'e' || vowel == 'E' || vowel == 'i' || vowel == 'I' || vowel == 'o' || vowel == 'O' || vowel == 'u' || vowel == 'U') {
    case true:
        console.log("Alphabet is Vowel.");
        break;

    case false:
        console.log("Alphabet is Constant");
        break;
}


// 26. Write a js program to find maximum between two numbers using switch case.
console.log("==========================================================================");
console.log("Question No 26");
console.log("26. Write a js program to find maximum between two numbers using switch case.");
let firstNumber = 20
let secondNumber = 34
switch (firstNumber > secondNumber) {
    case true:
        console.log("First Number is Maximum.");
        break;
    case false:
        console.log("Second Number is Maximum.");

}

// 27. Write a js program to check whether a number is even or odd using switch case.
console.log("==========================================================================");
console.log("Question No 27");
console.log("27. Write a js program to check whether a number is even or odd using switch case.");
let checkEvenOdd = 23
switch (checkEvenOdd % 2 == 0) {
    case true:
        console.log("Number is Even.");
        break;

    case false:
        console.log("Number is Odd");
        break;
}


// 28. Write a js program to check whether a number is positive, negative or zero using switch case.
console.log("==========================================================================");
console.log("Question No 28");
console.log("28. Write a js program to check whether a number is positive, negative or zero using switch case.");
let pSZNumber = -12
switch (pSZNumber > 0 || pSZNumber < 0 || pSZNumber == 0) {
    case pSZNumber > 0:
        console.log("Value is Positive.");

        break;
    case pSZNumber < 0:
        console.log("Value is Negative.");
        break;
    case pSZNumber == 0:
        console.log("Value is Zero.");
        break;
}


// 29. Write a js program to find roots of a quadratic equation using switch case.
console.log("==========================================================================");
console.log("Question No 29");
console.log("29. Write a js program to find roots of a quadratic equation using switch case.");

let a = parseInt(prompt("Enter A Value:"))
let b = parseInt(prompt("Enter B Value:"))
let c = parseInt(prompt("Enter C Value:"))
let sq = (b * b - 4 * a * c)
let root1, root2
switch (sq > 0) {
    case true:
        root1 = (-b + Math.sqrt(sq))
        root2 = (-b - Math.sqrt(sq))
        console.log(`The Root of Quadratic Equation are ${root1} and ${root2}`);

        break;
    case false:
        if (sq == 0) {
            root1 = root2 = (-b / (2 * a))
            console.log(`The Root of Quadratic Equation are ${root1}  and ${root2}`);

        } else {

            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-sq) / (2 * a)).toFixed(2);
            console.log(`The roots of quadratic equation are ${realPart} + ${imagPart} and ${realPart} - ${imagPart}`);
        }
        break;
}



// 30. Write a js program to create Simple Calculator using switch case.
console.log("==========================================================================");
console.log("Question No 30");
console.log("30. Write a js program to create Simple Calculator using switch case.");
var firstValue = parseFloat(prompt("Enter First Value===>"))
const userOperator = prompt("Enter Arithmetic Operator===>")
var secondValue = parseFloat(prompt("Enter Second Value===>"))
switch (userOperator) {
    case '+':
        console.log("Sum of these values:", firstValue + secondValue);
        break;
    case '-':
        console.log("Subtract of these values:", firstValue - secondValue);

        break;
    case '*':
        console.log("Multiplication of these values:", firstValue * secondValue);

        break;
    case '/':
        if (secondValue == 0) {
            console.log("Division of these values :", firstValue / secondValue);

        } else
            console.log("Cannot divide by zero1");

        break;
    default:
        console.log(alert("Please Enter Valid Operator!"));
        break;


}