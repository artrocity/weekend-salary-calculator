// Define the variables to be used
let totalMonthlyExpenses = 0;
let monthlyBudget = 20000;
let numberOfEmployees = 1;


function clearInputs() {
    document.querySelector(".firstNameInput").value = "";
    document.querySelector(".lastNameInput").value = "";
    document.querySelector(".idInput").value = "";
    document.querySelector(".titleInput").value = "";
    document.querySelector(".annualSalaryInput").value = "";
};


function addEmployeeRow() {
    // Obtain inputs
    let firstName = document.querySelector(".firstNameInput").value;
    let lastName = document.querySelector(".lastNameInput").value;
    let id = document.querySelector(".idInput").value;
    let title = document.querySelector(".titleInput").value;

    let annualSalaryElement = document.querySelector(".annualSalaryInput").value;
    let annualSalary = parseFloat(annualSalaryElement); // Convert the input string to a number
    
    // Format the annual salary
    let formattedAnnualSalary = annualSalary.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });

    // Convert annual salary to monthly salary and add it to the total
    let monthlySalary = annualSalary / 12;
    totalMonthlyExpenses += monthlySalary
    
    // Format the monthly salary
    let formattedMonthlySalary = monthlySalary.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    
    // Obtain the Total Monthly element and update the contents
    let monthlyElement = document.querySelector("#monthlyCostExpenses");
    let formattedMonthlyExpenses = totalMonthlyExpenses.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    monthlyElement.innerText = `$${formattedMonthlyExpenses}`;

    // Obtain the container for the employee table body
    let tableBody = document.querySelector(".employeeTableBody");

    // Add InnerHTML to the TBODY
    tableBody.innerHTML += `
        <tr>
            <td>${numberOfEmployees}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>$${formattedMonthlySalary}</td>
            <td>$${formattedAnnualSalary}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeEmployee(this)">Delete Employee</button>
        </tr>
    `;

    // Add one to numberOfEmployees
    numberOfEmployees++;

    // Check if monthly budget is > $20,000
    checkBudget(totalMonthlyExpenses);

    // Clear the input fields
    clearInputs();
};


// 3.) If the total monthly cost **exceeds $20,000**, apply an `over-budget` CSS class to the footer element.
function checkBudget(expenses) {
    // Obtain the elements 
    let monthlyExpenses = document.querySelector("#monthlyCostExpenses");
    let footerElement = document.querySelector("footer");

    // Check if expenses are within budget
    if (expenses > 20000) {
        monthlyExpenses.classList.remove("within-budget");
        monthlyExpenses.classList.add("over-budget");

        footerElement.classList.remove("within-budget");
        footerElement.classList.add("over-budget");
        alert("You have exceeded the allowed monthly budget of $20,000");
    } else {
        monthlyExpenses.classList.remove("over-budget");
        monthlyExpenses.classList.add("within-budget");

        footerElement.classList.remove("over-budget")
        footerElement.classList.remove("within-budget")
    }
}


// 4.) [ X ] Javascript/HTML Create a "Delete" button that removes an employee from the DOM.
//     [ X ] When an employee is deleted, update the footer's monthly cost to reflect that employee's removal.
function removeEmployee(buttonElement) {
    // obtain the current row
    let currentRow = buttonElement.closest("tr");

    // Get the salary from the row and subtract it from totalMonthlyExpenses
    let salaryCellText = currentRow.cells[5].innerText;
    
    // Had to use a regex to extract the commas and dollar sign from the string
    let monthlySalary = Number(salaryCellText.replace(/\$/g, '').replace(/,/g, ''));
    totalMonthlyExpenses -= monthlySalary;

    // Update the displayed total monthly expenses
    let monthlyElement = document.querySelector("#monthlyCostExpenses");
    let formattedMonthlyExpenses = totalMonthlyExpenses.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    monthlyElement.innerText = `$${formattedMonthlyExpenses}`;

    // Check if monthly budget is exceeded
    checkBudget(totalMonthlyExpenses);

    // Remove the row
    currentRow.remove();
};