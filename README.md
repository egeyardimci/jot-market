# 🛒 E-Commerce TypeScript

A modern, responsive e-commerce marketplace application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. Features Progressive Web App (PWA) capabilities for enhanced mobile and offline experiences.

## ✨ Features

### 🛍️ Core Shopping Features

- **Product Catalog**: Browse through a comprehensive collection of products with detailed descriptions
- **Advanced Filtering**: Filter products by brand, tags, and item type with dynamic filter counts
- **Smart Sorting**: Sort products by price (low to high, high to low) and date added (newest/oldest first)
- **Shopping Cart**: Add/remove items with quantity management and real-time total calculation
- **Pagination**: Navigate through products with customizable page sizes (52 items per page)
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices

### 🔧 Technical Features

- **TypeScript**: Full type safety with strict TypeScript configuration
- **Redux Toolkit**: Modern state management with RTK Query for API calls
- **PWA Support**: Progressive Web App with offline capabilities and app-like experience
- **Service Worker**: Background sync and caching with Workbox
- **Code Splitting**: Optimized bundle size with Vite's built-in code splitting
- **Hot Module Replacement**: Fast development with instant updates
- **ESLint + Husky**: Code quality enforcement with pre-commit hooks
- **GitHub Pages**: Automated deployment with GitHub Actions

### 🎨 UI/UX Features

- **Tailwind CSS**: Modern utility-first CSS framework with custom design system
- **Lucide React Icons**: Beautiful, customizable SVG icons
- **Loading States**: Smooth loading indicators with React Spinners
- **Modal System**: Reusable modal components for checkout and other interactions
- **Clean Design**: Modern, minimalist interface with consistent color scheme

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd e-commerce-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

## 📱 PWA Features

This application is a fully functional Progressive Web App with:

- **Offline Support**: Browse cached products even without internet connection
- **App-like Experience**: Install on mobile devices and desktop for native app feel
- **Custom Icons**: Branded app icons for different device sizes

### Installing as PWA

1. Open the app in a supported browser (Chrome, Firefox, Safari)
2. Look for "Install" or "Add to Home Screen" prompt
3. Follow browser-specific installation steps

## 🏗️ Architecture

### State Management

The application uses Redux Toolkit with three main slices:

#### Cart Slice (`src/store/cart/cartSlice.ts`)

- Manages shopping cart items and quantities
- Calculates total amounts
- Handles add/remove/clear operations

#### Market Slice (`src/store/market/marketSlice.ts`)

- Manages product catalog and filtering
- Handles async data fetching from JSON API
- Manages pagination and sorting states
- Processes filter options dynamically

#### Modal Slice (`src/store/modals/modalsSlice.ts`)

- Controls modal visibility states
- Manages different modal types (checkout, product details, etc.)

### Component Structure

```
src/
├── components/
│   ├── Header/              # App header with logo and cart info
│   ├── Footer/              # App footer with links and social media
│   ├── MarketBody/          # Main marketplace layout
│   │   ├── LeftPanel/       # Filters and sorting controls
│   │   ├── MiddlePanel/     # Product grid and pagination
│   │   └── RightPanel/      # Shopping cart summary
│   └── Modals/              # Modal components
├── store/                   # Redux store configuration
├── utils/                   # Utility functions
└── App.tsx                  # Root component
```

### Data Flow

1. **Initial Load**: App fetches product data from `/items.json`
2. **Filtering**: Left panel filters update the market slice state
3. **Cart Operations**: Products are added/removed from cart slice
4. **UI Updates**: Components react to state changes automatically

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run prepare      # Setup Husky hooks

# Deployment
npm run deploy       # Build and deploy to GitHub Pages
```

### Development Workflow

1. **Code Standards**: ESLint runs automatically on commits via Husky
2. **Type Safety**: TypeScript compilation ensures type safety
3. **Hot Reloading**: Changes reflect instantly during development
4. **PWA Testing**: Use `npm run dev` to test PWA features in development

### Adding New Products

Products are loaded from `public/items.json`. To add new products:

1. Edit `public/items.json`
2. Follow the existing schema:

```json
{
  "name": "Product Name",
  "description": "Product description",
  "price": 29.99,
  "slug": "unique-slug",
  "manufacturer": "Brand Name",
  "itemType": "category",
  "tags": ["tag1", "tag2"],
  "added": 1640995200
}
```

## 🌐 Deployment

### GitHub Pages Deployment

The project includes automatic deployment to GitHub Pages:

1. **Automatic**: Pushes to main branch trigger deployment via GitHub Actions
2. **Manual**: Run `npm run deploy` to deploy manually

### Environment Configuration

The app is configured for GitHub Pages deployment with:

- Base path: `/jot-market/`
- Asset optimization for production
- Service worker registration for PWA features

## 📦 Build Output

Production build generates:

- **Optimized JavaScript**: Minified and tree-shaken bundles
- **PWA Assets**: Service worker, manifest, and icons
- **Static Assets**: Optimized images and other resources
- **Type Definitions**: TypeScript declarations for development

## 🔧 Configuration

### Key Configuration Files

- `vite.config.ts`: Build tool configuration with PWA setup
- `tsconfig.json`: TypeScript compiler options
- `tailwind.config.js`: Tailwind CSS customization (if needed)
- `eslint.config.js`: Code linting rules
- `package.json`: Dependencies and scripts

### Environment Variables

No environment variables are required for basic functionality. All configuration is handled through TypeScript constants and JSON files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Image Optimization**: Responsive images with proper formats

## 📱 Browser Support

- Chrome (recommended for PWA features)
- Firefox
- Safari (iOS 11.3+)
- Edge

---

Built with ❤️ using React, TypeScript, Redux Toolkit, and Tailwind CSS
