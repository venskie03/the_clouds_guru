# The Clouds Guru

This project is a website built using the React framework and styled with Tailwind CSS. The website includes several pages, such as the homepage, about us, blog, and contact us, each designed with a unique layout and style.

## Table of Contents
- [Getting Started](#getting-started)
- [Installing Dependencies](#installing-dependencies)
- [Configuring Tailwind CSS](#configuring-tailwind-css)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Page Components](#page-components)
- [Footer Component](#footer-component)

## Getting Started

To create this website, we use the Vite toolchain for fast development. Follow the steps below to get started:

### 1. Initialize the Project
+ First, create a new project using Vite:

```bash
npm create @vite/latest
website_name: clouds_guru
select: Javascript
```

### 2. Navigate to the Project Directory
+ Change your directory to the newly created project:

```bash
cd clouds_gur
```

## Installing Dependencies

### 1. Install Project Dependencies
+ Install the required dependencies for the project:

```bash
npm install
```

### 2. Install Tailwind CSS
+ Tailwind CSS is used for styling the application. Install Tailwind CSS and its peer dependencies by running:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


## Configuring Tailwind CSS
+ After installing Tailwind CSS, configure it by updating the `tailwind.config.js` file:

### 1. Update Tailwind Configuration
+ Modify the `tailwind.config.js` file to include the paths to your template files:

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Add Tailwind Directives
+ In the `./src/App.css` and `./src/index.css`  file, add the following Tailwind directives to import its base, components, and utilities:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Running the Project
+ Start the development server using the following command:

```bash
npm run build
```

## Project Structure
* The website is structured with multiple pages and components:
  * src/pages/Dashboard.jsx: The main dashboard page, which includes:
  * Homepage: Features a background image, a large title ("The Clouds Guru") with a styled text shadow, and social media icons with links.
  * Second Page (#aboutus): Contains an "About Us" section with an image and text describing the mission of "The Clouds Guru".
  * Third Page (#blog): Highlights video content available on the YouTube channel of "The Clouds Guru".
  * Fourth Page (#contactus): Provides social media icons for staying connected.
  * src/components/Footer.jsx: The footer component used across different pages to provide consistent footer styling and links.
  * src/components/NavBar.jsx: The navbar component used across different pages to provide consistent footer styling and links.