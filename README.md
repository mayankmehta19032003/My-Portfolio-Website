# Portfolio Website 🌐

A **Portfolio Website** built using **React** and **Vite**, showcasing my work and skills in a visually appealing manner. This project features interactive 3D models using **Three.js** and smooth animations powered by **GSAP**.

## Table of Contents

- [Demo](https://my-portfolio-website-nine-ivory.vercel.app/)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [EmailJS Integration](#emailjs-integration)
- [Acknowledgments](#acknowledgments)

## Demo 🌟

You can view the live demo of the project [here](https://my-portfolio-website-nine-ivory.vercel.app/).

## Features 💼

- Responsive design that looks great on various devices.
- Home, About, Projects, and Contact sections for easy navigation.
- 3D models integrated using **Three.js** for an engaging user experience.
- Animations implemented using **GSAP** to enhance visual appeal.
- Contact form powered by **EmailJS** for easy communication.

## Technologies Used ⚙️

- **React.js**: Front-end JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Three.js**: JavaScript library for creating 3D graphics.
- **GSAP**: Animation library for creating high-performance animations.
- **EmailJS**: Service for sending emails directly from the client-side.

## Installation ⚡

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd your-portfolio
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
   - Create a `.env` file in the root of your project.
   - Add your EmailJS user ID (replace the placeholder with your actual value):
     ```
     VITE_EMAILJS_USER_ID=your-emailjs-user-id
     ```

5. **Start the development server**:
    ```bash
    npm run dev
    ```

   The app will be running on `http://localhost:5173/`.

## EmailJS Integration 📧

This project uses **EmailJS** to send emails from the contact form. To integrate EmailJS, follow these steps:

1. Sign up at [EmailJS](https://www.emailjs.com/) and create a new service.
2. Obtain your user ID from the EmailJS dashboard.
3. In your code, use the following snippet to send emails:
    ```javascript
    import emailjs from 'emailjs-com';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    ```
4. Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_USER_ID'` with the corresponding values from your EmailJS account.

## Acknowledgments 🙌

- Thank you to [Three.js](https://threejs.org/) for the amazing library that made 3D modeling easy and fun!
- Special thanks to [GSAP](https://greensock.com/gsap/) for providing powerful animation capabilities!
- And to [EmailJS](https://www.emailjs.com/) for their easy-to-use email sending service!

Feel free to explore the project and reach out for any questions or collaborations!
