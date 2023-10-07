# Student Management System

This web application allows users to manage a list of students. Users can view the list of added students, search for specific students, and add new students through a modal form.

### Features

- Display a list of students with columns: Student Name, Email Id, Phone Number, Father Name, Gender, Action (Delete option), and a dummy user image.
- Implement a search functionality with debounce for filtering students based on their names.
- Add new students through a modal form with the following input fields and validations:
  1. Student Name: Required.
  2. Date Of Birth: Required, student must be greater than 3 years old.
  3. Gender: Required.
  4. Father Name: Required.
  5. Mother Name: Required.
  6. Email Id: Required, Valid Email format (e.g., abccde@domain.com).
  7. Phone Number: Required, 10-digit valid phone number.
  8. Address: Required.
- Close the modal and display the student details in the table list upon clicking the Submit button in the Add Student Modal.

## Technologies Used

- React.js (Function components and hooks)
- [Library for modal and UI components]
- [Library for debounce functionality]

## Installation

1. Clone the repository: `git clone [<repository-url>](https://github.com/pintu544/Student-List)`
2. Navigate to the project directory: `cd student-list`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open the application in your browser: `http://localhost:3000`

## Screenshots

![Student List](https://www.linkpicture.com/q/localhost_3000_crud-app.png)
*Screenshot of the Student List page*

![Add Student Modal]((https://www.linkpicture.com/q/localhost_3000_crud-app.png(1)))
*Screenshot of the Add Student Modal*

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and suggestions are welcome!


