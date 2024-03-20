# Frontend Password Reset Application

This project is a frontend implementation for a password reset application using React.js. It provides user registration, login, password reset, and a homepage feature. The frontend is designed to work seamlessly with the backend for a complete password management solution.

## Table of Contents

- [Frontend Password Reset Application](#frontend-password-reset-application)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Deployment](#deployment)
  - [Backend Integration](#backend-integration)
  - [Responsive Design](#responsive-design)
  - [Contributing](#contributing)
  - [License](#license)

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: A routing library for React applications.
- **axios**: A promise-based HTTP client for making requests to the backend.
- **Yup**: A JavaScript schema builder for value parsing and validation.
- **react-toastify**: A React notification library for displaying toast notifications.
- **CSS**: Styling is done using CSS.
- **Responsive Design**: The application is responsive to different screen sizes.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

## Usage

- **Register**: Fill in the required details in the registration form and submit.
- **Login**: Enter your email and password in the login form and submit.
- **Forgot Password**: Click on the "Forgot Password?" link on the login page and follow the instructions.
- **Reset Password**: Access the password reset link sent to your email and set a new password.
- **Homepage**: After successful login, you will be redirected to the homepage displaying a greeting message and logout option.

## Features

- **User Registration**: Allow users to register with a username, email, and password.
- **User Login**: Provide a login form for users to authenticate with their email and password.
- **Password Reset**: Implement a forgot password functionality allowing users to reset their passwords via email.
- **Homepage**: Display a personalized greeting message to the logged-in user with a logout option.

## Deployment

The frontend is deployed on `Netlify` click here for demo [Netlify](https://password-reset-demo.netlify.app/).

## Backend Integration

Integrate this frontend with the backend hosted on Render. The backend repository can be found [here](https://github.com/YUSRIN20/Password-Reset-Task-Backend.git), and the backend is deployed at [Render](https://password-reset-task-backend.onrender.com/).

## Responsive Design

The application is designed to be responsive to different screen sizes, ensuring a seamless user experience across devices.

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
