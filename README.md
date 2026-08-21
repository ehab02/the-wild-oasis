# The Wild Oasis

A full-featured hotel management dashboard built with React for managing cabins, bookings, guests, and daily hotel operations.

🔗 **[Live Demo](https://the-wild-oasis-re.vercel.app/)**

## Demo Access

The live demo requires authentication. You can use the following demo credentials to explore the application:

- **Email:** `test@test.com`
- **Password:** `123456`

## Overview

The Wild Oasis is a hotel management dashboard designed to help hotel staff manage cabins, bookings, guests, and daily operations through a centralized interface.

The application integrates **Supabase** for database management and authentication, while **React Query** is used for server-state management, data fetching, caching, and synchronization.

The project was developed as part of **Jonas Schmedtmann's Ultimate React Course**, with a focus on applying modern React development patterns and building a complete real-world-style application.

## Features

- Dashboard with an overview of hotel operations and key statistics
- Cabin management with create, edit, and delete functionality
- Booking management and booking details
- Guest check-in and check-out
- Guest and booking information management
- User authentication
- Form handling and validation
- Data visualization and statistics
- Dark mode
- Responsive user interface
- Server-state management and data synchronization

## Screenshots

Screenshots of the main application interfaces will be added here.

## Tech Stack

### Frontend

- React
- React Router
- React Query
- React Hook Form
- Styled Components
- Recharts

### Backend & Database

- Supabase
- PostgreSQL
- Supabase Authentication

### Development Tools

- Vite
- ESLint
- Git

## Key Technical Implementation

- Used **React Query** for server-state management, data fetching, caching, and synchronization.
- Integrated **Supabase** for PostgreSQL database management, authentication, and backend services.
- Implemented client-side navigation and protected routes using **React Router**.
- Used **React Hook Form** for form management and validation.
- Built reusable and maintainable UI components with **Styled Components**.
- Implemented data visualization and statistics using **Recharts**.
- Added dark mode to provide an alternative user interface theme.
- Structured the application using reusable components and feature-specific functionality.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ehaborouq/the-wild-oasis.git
```

Navigate to the project directory:

```bash
cd the-wild-oasis
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the required Supabase environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the placeholder values with your own Supabase project credentials.

### Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Project Structure

The project follows a component-based React architecture with reusable components and feature-specific functionality.

```text
src/
├── components/
├── features/
├── services/
├── hooks/
├── pages/
└── ...
```

## Learning Context

This project provided practical experience with modern React development concepts, including:

- Server-state management with React Query
- Backend integration with Supabase
- PostgreSQL database integration
- Authentication
- Client-side routing
- Form management and validation
- Data visualization
- Reusable component architecture
- Styled Components

## Acknowledgments

- [Jonas Schmedtmann](https://github.com/jonasschmedtmann) — Ultimate React Course
- [Supabase](https://supabase.com/) — Backend and database services
- [React](https://react.dev/) — Frontend library

## License

This project was created for learning and portfolio purposes.
