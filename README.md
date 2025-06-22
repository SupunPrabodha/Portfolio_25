# 3D Portfolio Website

A visually stunning and interactive 3D portfolio website built with React.js, Three.js, and other modern web technologies. This project showcases my skills, projects, and experiences through engaging 3D models and animations, providing an immersive experience for visitors. The portfolio features custom 3D models integrated into the design to enhance the visual appeal and interactivity.

Live Demo: https://supunprabodhaportfolio.netlify.app/

This project was developed following a YouTube tutorial by JavaScript Mastery, with the original repository available at adrianhajdin/3d-portfolio.

![image](https://github.com/user-attachments/assets/f4249232-900e-4ef2-89ed-643a78dc6059)
![image](https://github.com/user-attachments/assets/1c2867fb-3b1c-4d85-9de0-53aa7d1e4d86)
![image](https://github.com/user-attachments/assets/5a282834-c1b6-4e1d-a4a5-345f2028b7d9)


## Features

- **Interactive 3D Models**: Custom 3D models integrated using Three.js and React Three Fiber for a captivating hero section and interactive elements.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices for a seamless experience across all screen sizes.
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactive components.
- **Contact Form Integration**: Includes a contact form powered by EmailJS for easy communication.
- **Dynamic Content**: Easily customizable data through a constants file to personalize the portfolio.
- **Modern UI/UX**: Styled with Tailwind CSS for a sleek and professional appearance.
- **Particle Background**: Enhanced with tsparticles for a dynamic, animated background.

## Technology Stack

- **Frontend**: React.js, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **3D Models**: Custom 3D models integrated for visual enhancement
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: EmailJS
- **Background Effects**: tsparticles
- **Linting**: ESLint with React and Vite configurations
- **Deployment**: Netlify
- **Version Control**: Git, GitHub

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SupunPrabodha/Portfolio_25.git
   cd Portfolio_25
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the root of your project and add your EmailJS credentials:

   ```bash
   VITE_APP_EMAILJS_SERVICE_ID=service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=public_key
   ```

   Replace the placeholder values with your actual EmailJS credentials, obtainable from the EmailJS website.

### Running the Project

1. **Start the Development Server**:

   ```bash
   npm run dev
   ```

2. **View the Project**: Open http://localhost:5173 in your browser to see the portfolio in action.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The output will be in the `dist` folder, ready for deployment.

## Deployment

The project is deployed on Netlify and accessible at supunprabodhaportfolio.netlify.app.

To deploy your own version to Netlify:

1. Push your project to a GitHub repository.
2. Log in to Netlify and create a new site from Git.
3. Connect your GitHub repository and configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add your EmailJS environment variables in Netlify's environment variables settings.
5. Deploy the site and access the live URL provided by Netlify.

## Customization

To personalize the portfolio:

- Update the data in the `src/constants/index.js` file to reflect your personal information, skills, projects, and experiences.
- Replace or modify 3D models in the `public/assets` folder to customize the visual elements.
- Adjust styling in Tailwind CSS classes or add custom CSS in the `src` folder.

## Acknowledgments

- This project was inspired by and built following a tutorial by JavaScript Mastery.
- Special thanks to the open-source libraries and communities behind React, Three.js, Tailwind CSS, and EmailJS.
- 3D models used in the project are credited to their respective creators as noted in the original repository.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

Reach out via the contact form on the portfolio website or connect with me on:

- GitHub: https://github.com/SupunPrabodha
- Email: supunprabodha0915@gmail.com

LinkedIn: www.linkedin.com/in/supun-prabodha-liyanage
