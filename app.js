//Chapter 31-34

//Question 1

// var date =new Date();
// document.write(date);

//Question 2

// var date =new Date()
// alert("Current Month "+ date.getMonth())

// var Date = new Date();

//     var months = [
//         "January", "February", "March", "April", "May", "June", 
//         "July", "August", "September", "October", "November", "December"
//     ];

//     var currentMonth = months[Date.getMonth()];
//     alert("Current Month " +currentMonth);

// Question 3

// var currentDate = new Date();
// var days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];

// var currentDay = days[currentDate.getDay()];

// alert("Today is " +currentDay);

// Question 4

// var currentDate = new Date();

// var dayIndex = currentDate.getDay();
// if (dayIndex === 0 || dayIndex === 6) {
//     alert("It’s Fun day");
// } 

// Question 5

// var currentDate = new Date();

// var dayOfMonth = currentDate.getDate();

//     if (dayOfMonth < 16) {
//         alert("First fifteen days of the month");
//     } else {
//         alert("Last days of the month");
//     }

//Question 6

// var currentDate = new Date();
// var milliseconds = currentDate.getTime();
// minutes = milliseconds / (1000 * 60);
// alert(minutes);

//Question 7

// var currentDate = new Date();
// var hours = currentDate.getHours();

// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//Question 8

// var laterDate = new Date(2020, 11, 31); 
// console.log(laterDate);

//Question 9

// var ramadanStartDate = new Date(2015, 5, 18)
// var currentDate = new Date();
// var differenceInMilliseconds = currentDate - ramadanStartDate;
// var millisecondsPerDay = 1000 * 60 * 60 * 24;
// var daysPassed = Math.floor(differenceInMilliseconds / millisecondsPerDay);

//     alert(`Days since 1st Ramadan: ${daysPassed}`);

//Question 10

// var referenceDate = new Date(2015, 5, 18);
// var beginningOf2015 = new Date(2015, 0, 1);
// var differenceInMilliseconds = referenceDate - beginningOf2015;
// var secondsElapsed = Math.floor(differenceInMilliseconds / 1000);
// console.log (`Seconds elapsed between January 1, 2015 and June 18, 2015 ${secondsElapsed} seconds`);

//Question 11

// var currentDate = new Date();

// var hours = currentDate.getHours();
// console.log("Current hours:", hours);

// currentDate.setHours(hours + 1);
// document.write(`<h1>Updated Date and Time: ${currentDate}</h1>`)

//Question 12

// var currentDate =new Date();
// var hundred = new Date(currentDate);
// hundred.setFullYear(currentDate.getFullYear() -100);
// alert(currentDate+"Date 100 years back: "+ hundred.toDateString())
        
//Questin 13

// var age = prompt("Enter your age");
// var date = new Date().getFullYear();
// var birthYear = date -age
// document.write("Your age is " + age +"Your birth year is "+ birthYear)

// Question 14


            // var customerName = prompt("Please enter your name:");
            // var currentMonth = prompt("Please enter the current month..");

            // var unitsConsumed = parseFloat(prompt("Please enter the number of units:"));
            // var chargesPerUnit = parseFloat(prompt("Please enter the charges per unit (PKR):"));
            // var latePaymentSurcharge = parseFloat(prompt("Please enter the late payment surcharge (PKR):"));

            // var netAmountPayable = unitsConsumed * chargesPerUnit;
            // var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

            // var roundedNetAmount = netAmountPayable.toFixed();
            // var roundedLateSurcharge = latePaymentSurcharge.toFixed();
            // var roundedGrossAmount = grossAmountPayable.toFixed();
            // document.write("<h2>K-Electric Bill</h2>");
            // document.write("<p>Customer Name: <strong>" + customerName + "</strong></p>");
            // document.write("<p>Current Month: <strong>" + currentMonth + "</strong></p>");
            // document.write("<p>Number of Units:<strong> " + unitsConsumed + "</strong> units</p>");
            // document.write("<p>Charges per Unit: PKR<strong> " + chargesPerUnit.toFixed() + "</strong></p>");
            // document.write("<p>Net Amount Payable (within Due Date): PKR<strong> " + roundedNetAmount + "</strong></p>");
            // document.write("<p>Late Payment Surcharge: PKR <strong>" + roundedLateSurcharge + "</strong></p>");
            // document.write("<p>Gross Amount Payable (after Due Date): PKR <strong>" + roundedGrossAmount + "</strong></p>");



