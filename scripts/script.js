// # Weekend Challenge: JS Salary Calculator

// Your task is to create an application that records employee salaries and adds salaries up to report monthly costs.
// ## Requirements:

// 1.) [ ] HTML - This application should have a form with five inputs that collect a new employee's *first name, last name, ID number, job title, annual salary*.
// Also create a submit button. 

// 2.) [ ] Javascript - When the "Submit" button is clicked:
//     * A new employee row should be added to the table.
//     * The footer's total monthly cost should be updated.
//     * The form inputs should be cleared out.

// 3.) [ ] Javascript - If the total monthly cost **exceeds $20,000**, apply an `over-budget` CSS class to the footer element.
//     * When applied, this CSS class should provide a clear visual indication that the monthly cost has been exceeded. (This could be as simple as turning the footer text red.)

// 4.) [ ] Javascript/HTML Create a "Delete" button that removes an employee from the DOM.
//     * **For base mode**, the total monthly cost **does not** need to be updated when an employee is deleted.


// ## About the Built-In Tests:

// After you've cloned this repository, you'll need to:
// * Run `cd weekend-salary-calculator` to get "inside" the project directory.
// * Run `npm install` to install the libraries that the automated tests rely on.

// Then, at any point, you can execute the test suite by running:
// * `npm test`

// Nifty!

// **FOR THE TESTS TO WORK**:
// * Your form's submit button **must** have a `data-testid="submitButton"` attribute. Like so:
//   * ```html
//     <button data-testid="submitButton">
//       Submit
//     </button>
//     ```
// * Your form's inputs must have these exact attributes:
//     * `data-testid="firstNameInput"`
//     * `data-testid="lastNameInput"`
//     * `data-testid="idInput"`
//     * `data-testid="titleInput"`
//     * `data-testid="annualSalaryInput"`
// * You must use a `<table>` element, where each employee is represented by a single `<tr>`.
// * The *total monthly* cost must be rendered somewhere inside the `<footer>` element.

// **PLEASE DO**:
// * Leverage the tests to ensure that you are satisfying each of the requirements.
// * Run the tests often to verify your code's behavior as you implement each step of required functionality.

// ## Stretch Goals:

// 1.) [ ] Add styling or extra functionality that fits with the theme of this assignment. (Feel free to be super creative!)

// 2.) [ ] When an employee is deleted, update the footer's monthly cost to reflect that employee's removal. 
// _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. This is tricky! 