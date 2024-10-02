# Chemical Supplies PWA

## Overview
This project is a Progressive Web App (PWA) for managing chemical supplies. The application allows users to view, add, and manage chemical data in a user-friendly table format. The app is designed to work seamlessly across different devices and can be installed on users' home screens, providing a native-like experience.

## Features
- **Responsive Design**: The application is fully responsive, ensuring optimal display on desktops, tablets, and mobile devices.
- **PWA Capabilities**: It includes service worker support for offline access and fast loading, and a web app manifest for installation.
- **Dynamic Table Management**: Users can add new rows for chemicals, facilitating easy management of chemical data.

## Design Approach
### HTML Structure
- The HTML structure consists of a semantic layout with a `<div class="container">` to encapsulate the main content.
- A toolbar section contains buttons for adding rows and moving them up or down within the table.
- The table is structured with headers to represent the chemical attributes, ensuring clarity in data presentation.

### CSS Styling
- **Responsive Design**: The CSS is designed to adapt to various screen sizes using flexible layouts and percentages. 
- **User Interface**: Clear typography and spacing improve readability. The color scheme is neutral, with hover effects for interactive elements to enhance user experience.
- **Table Layout**: The table is styled to ensure clarity, with alternating row colors for better data visibility.

### JavaScript Functionality
- The script is responsible for managing dynamic interactions, such as adding new rows to the table and handling the movement of rows up and down.
- Data validation can be implemented as needed to ensure proper input when adding chemical data.

### PWA Implementation
- A **manifest.json** file provides metadata about the web application, including the name, icons, and start URL.
- A **service worker** is registered to enable offline capabilities and caching strategies, ensuring that the app remains functional without an internet connection.
- The app is served over HTTPS to meet PWA security requirements.

## Code Choices
- **HTML5**: Utilized semantic HTML5 elements to enhance accessibility and SEO.
- **CSS Flexbox**: Leveraged Flexbox for layout management, allowing for a flexible and responsive design that adjusts to various screen sizes.
- **JavaScript ES6**: Employed modern JavaScript features such as arrow functions and template literals for cleaner and more efficient code.
- **Progressive Enhancement**: Ensured that the core functionalities work without JavaScript, providing a basic experience that enhances with JS enabled.

## Getting Started
### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) for testing PWA features.
- A local server environment to serve the application (e.g., Live Server in VSCode).

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:abhinow01/table-pwa.git
   ```
2. Navigate to the project directory
3. Open the index.html file in any browser or use a local server to view the application

## Usage 
- Use the add row button to add a new chemical entry to the table
- Use the "Move up" and "Move down" buttons to rearrange the rows as needed
- install the PWA on your device for an improved experience


