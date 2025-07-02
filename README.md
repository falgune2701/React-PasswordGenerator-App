# Password Generator - React Application
Overview
This is a simple password generator application built with React. It allows users to generate random passwords with customizable options for length, numbers, and special characters.

 ## Features
1. Generate random passwords with customizable length (6-100 characters)

2. Option to include numbers in the password

3. Option to include special characters in the password

4. Copy generated password to clipboard with one click

5. Responsive design that works on different screen sizes

 ## How to Use

Adjust the password length using the slider (default is 8 characters)

Toggle the checkboxes to include numbers and/or special characters

Click the "Generate Password" button to create a new password

Click the "Copy" button to copy the generated password to your clipboard

 ## Technical Details

Built with React using functional components

Uses React hooks:

useState for state management

useCallback for memoizing functions

useRef for DOM access

Responsive design using Tailwind CSS classes

Password generation algorithm:

Base character set: A-Z, a-z

Optional additions: 0-9 and special characters

 ## Installation
   Clone the repository

   Install dependencies: npm install

   Run the development server: npm run dev

 ## Dependencies
   React

   Vite (for development)

   Tailwind CSS (for styling)

<img src="D:\OneDrive\Pictures\Screenshots\project-sc.png" alt="Project-Sc">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
