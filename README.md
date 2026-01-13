# Recipe Finder

A modern, responsive recipe discovery application built with React and Tailwind CSS. Find, explore, and discover delicious recipes from around the world.

## Features

- **Recipe Search**: Search through a curated collection of recipes
- **Recipe Details**: View detailed cooking instructions, ingredients, and cooking times
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages**: Home, About, Contact, and detailed recipe views
- **Clean UI**: Modern interface with intuitive navigation

## Technologies Used

- React 19.2.0
- React Router DOM for navigation
- Tailwind CSS for styling
- Vite for build tooling
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hbero268/recipfinding.git
```

2. Navigate to the project directory:
```bash
cd recipfinding
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── RecipeCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── RecipeDetail.jsx
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Features Overview

### Home Page
- Browse featured recipes
- Search functionality
- Responsive recipe grid

### Recipe Details
- Complete ingredient lists
- Step-by-step instructions
- Cooking time and serving information

### About Page
- Information about the application
- Mission and features overview

### Contact Page
- Contact form with validation
- Contact information
- FAQ section

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please contact us through the contact form in the application.

---

**Repository**: https://github.com/hbero268/recipfinding