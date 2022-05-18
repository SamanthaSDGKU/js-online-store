// declaration of variables
let userName= prompt("Please, enter your name: ");
let userEmail = prompt("Please, enter your email: ");
let monthlySalary = Number(prompt("Please, enter your monthly salary:"));

// calculate the yearly salary
let yearlySalary = monthlySalary*12;

// display on the html the information
document.write(`
    <div class="container">
        <p><span>Name:</span> ${userName} </p>
        <p><span>Email:</span> ${userEmail} </p>
        <p><span>Salary:</span> ${yearlySalary}</p>
    </div>
    `);

// document.write("<div class='container'><p><span>Name:</span>" +userName+" </p><p><span>Email:</span>" + userEmail+ "</p><p><span>Salary:</span>"+yearlySalary+"</p></div>");

