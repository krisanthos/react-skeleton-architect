
# Codewave - Online Microtask Platform

## Project Overview

Codewave is an online platform where users register, perform simple tasks to earn money, and can fund their account to earn incremental bonuses on their deposits. It's designed to provide a trustworthy, user-friendly way to earn through microtasks and safe investment incentives.

## Core Features

- User registration and authentication
- Task completion and earnings tracking
- Wallet management with deposit bonuses
- Secure withdrawal system
- Dashboard for monitoring progress and earnings

## Tech Stack

- React
- TypeScript
- React Router Dom
- TanStack Query
- Tailwind CSS
- shadcn/ui Components

## Getting Started

```sh
# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # UI component library (shadcn)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── DashboardLayout.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Landing page
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Tasks.tsx
│   │   ├── Wallet.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## Development Workflow

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Make changes and test locally
5. Build the production version with `npm run build`
6. Deploy the `/dist` folder to your hosting provider

## Deployment

The application can be built for production using:

```sh
npm run build
```

This will create optimized assets in the `/dist` directory that can be deployed to any static hosting service.
