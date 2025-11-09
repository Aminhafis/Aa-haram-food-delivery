# Aa-haram Food Delivery Web Application

A modern, fully responsive food delivery web application built with React and Tailwind CSS. This project demonstrates clean architecture, best practices, and a polished user interface.

## Overview

Aa-haram is a full-featured food delivery platform that allows users to browse restaurants, add items to cart, manage orders, and complete checkout. The application features a warm, inviting design with smooth animations and an intuitive user experience.

## Features

### Core Functionality
- Browse and filter menu items by category
- Add items to cart with quantity management
- Persistent cart using localStorage
- User authentication flow (login/register)
- Protected checkout route
- Responsive design for all screen sizes

### User Interface
- Modern gradient-based design system
- Smooth page transitions and animations
- Interactive food cards with hover effects
- Customer testimonials carousel
- Membership promotional banner
- Clean, organized navigation

### Technical Features
- Context API for state management
- Custom React hooks for cart and authentication
- Route protection for authenticated pages
- Component-based architecture
- Optimized image loading
- SEO-friendly structure

## Technology Stack

### Frontend Framework
- React 18
- Vite (Build tool)
- React Router DOM (Routing)

### Styling
- Tailwind CSS 3
- shadcn/ui components
- Custom design system with CSS variables

### UI Components & Icons
- Radix UI primitives
- Lucide React icons
- Sonner for toast notifications

### Code Quality
- ESLint for code linting
- Modern ES6+ JavaScript
- Clean, maintainable code structure

## Project Structure

aa-haram-food-delivery/
├── public/
│ └── images/
├── src/
│ ├── components/
│ │ ├── common/
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ ├── home/
│ │ │ ├── Banner.jsx
│ │ │ ├── FeaturedRestaurants.jsx
│ │ │ ├── Testimonials.jsx
│ │ │ └── MembershipBanner.jsx
│ │ ├── menu/
│ │ │ └── FoodCard.jsx
│ │ ├── cart/
│ │ │ └── CartItem.jsx
│ │ ├── checkout/
│ │ │ └── DeliveryForm.jsx
│ │ └── ui/
│ │ └── (shadcn components)
│ ├── context/
│ │ ├── AuthContext.jsx
│ │ └── CartContext.jsx
│ ├── hooks/
│ │ ├── useAuth.js
│ │ ├── useCart.js
│ │ └── useLocalStorage.js
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Menu.jsx
│ │ ├── Cart.jsx
│ │ ├── Checkout.jsx
│ │ ├── Auth.jsx
│ │ └── FoodDetail.jsx
│ ├── data/
│ │ └── mockData.js
│ ├── lib/
│ │ └── utils.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md

text

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository
git clone https://github.com/yourusername/aa-haram-food-delivery.git
cd aa-haram-food-delivery

text

2. Install dependencies
npm install

text

3. Start development server
npm run dev

text

4. Open your browser and navigate to
http://localhost:5173

text

## Available Scripts

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run lint # Run ESLint

text

## Key Features Implementation

### State Management
- Context API for global state (Auth, Cart)
- localStorage for data persistence
- Custom hooks for clean component logic

### Routing
- React Router DOM for navigation
- Protected routes for authenticated pages
- Dynamic routes for food item details

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts

### Performance Optimization
- Lazy loading of images
- Efficient state updates
- Minimal re-renders
- Code splitting ready

## Design System

### Color Palette
- Primary: Red to Orange gradient
- Secondary: Warm cream and beige tones
- Accent: Green for vegetarian, Red for non-vegetarian
- Text: Gray scale for hierarchy

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Responsive font sizes

### Components
- Cards with hover effects
- Gradient buttons
- Toast notifications
- Modal dialogs
- Form inputs with validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration with REST API
- Payment gateway integration
- Order tracking system
- User profile and order history
- Real-time notifications
- Restaurant management dashboard
- Advanced search and filters
- Geolocation for nearby restaurants

## Contributing

This is a demonstration project. For questions or suggestions, please open an issue.

## License

This project is created for educational and demonstration purposes.

## Contact

For any inquiries, please reach out through GitHub issues.

## Acknowledgments

- shadcn/ui for the component library
- Lucide for the icon set
- Unsplash for placeholder images
- Pexels for food imagery
