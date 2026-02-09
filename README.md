# PyCon Cameroon 2026

Welcome to the official repository for the PyCon Cameroon 2026 website. This project has been migrated from a static HTML site to a modern, high-performance React application.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/) - utilizing ES modules for fast HMR and builds
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6) for client-side navigation
- **Styling**: Custom CSS with a variable-based design system and extensive keyframe animations
- **Animations**: Custom `useScrollAnimation` hook leveraging `IntersectionObserver` for performance

## 📂 Project Structure

The project follows a modular component-based architecture:

```
PyCon_Cameroon_2026/
├── public/
│   └── Images/          # Optimized webp assets
├── src/
│   ├── components/      # Reusable UI blocks (Navbar, Footer, etc.)
│   ├── layouts/         # Page wrappers (Layout.jsx)
│   ├── pages/           # Individual route components (Home, About, etc.)
│   ├── hooks/           # Custom logic (useScrollAnimation.js)
│   ├── index.css        # Global styles and design tokens
│   ├── App.jsx          # Route definitions
│   └── main.jsx         # Application entry point
├── index.html           # HTML entry template
└── vite.config.js       # Vite configuration
```

## 🛠️ Installation & Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/azilmuluh/PyCon_Cameroon_2026.git
    cd PyCon_Cameroon_2026
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:5173`.

## 📦 Deployment

To build the project for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets ready for deployment to platforms like Vercel, Netlify, or GitHub Pages.

## ✨ Key Features

- **Responsive Design**: Fully responsive layout adapting to mobile, tablet, and desktop.
- **Tribal Aesthetics**: Custom design integrating Toghu patterns and vibrant African colors.
- **Scroll Animations**: Smooth, performant entry animations for content sections.
- **SPA Navigation**: Seamless transitions between pages without full reloads.

## 🤝 Contributing

(Add contribution guidelines here if applicable)

---
*Built with ❤️ for the Python Community in Cameroon.*
