
# Codewave - Online Microtask Platform

## Project Overview

Codewave is an online platform where users register, perform simple tasks to earn money, and can fund their account to earn incremental bonuses on their deposits. It's designed to provide a trustworthy, user-friendly way to earn through microtasks and safe investment incentives.

## Core Features

- User registration with fee payment system
- Task completion and earnings tracking
- Wallet management with deposit bonuses based on balance
- Secure withdrawal system
- Admin panel for transaction approval
- Dashboard for monitoring progress and earnings

## Tech Stack

- React
- JavaScript
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
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/                        # UI component library (shadcn)
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── form.jsx
│   │   │   └── ... (other UI components)
│   │   ├── Header.jsx                 # Site header/navigation
│   │   ├── Hero.jsx                   # Landing page hero section
│   │   ├── PaymentConfirmation.jsx    # Payment upload component
│   │   ├── Features.jsx               # Features showcase
│   │   ├── FAQ.jsx                    # FAQ section
│   │   ├── Footer.jsx                 # Site footer
│   │   └── DashboardLayout.jsx        # Layout for dashboard pages
│   ├── hooks/                         # Custom React hooks
│   │   ├── use-mobile.jsx
│   │   └── use-toast.js
│   ├── lib/                           # Utility functions
│   │   └── utils.js
│   ├── pages/                         # Page components
│   │   ├── Index.jsx                  # Landing page
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   ├── Wallet.jsx
│   │   ├── Admin.jsx                  # Admin panel for approvals
│   │   └── NotFound.jsx
│   ├── App.jsx                        # Main application component
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
├── tailwind.config.js                 # Tailwind configuration
└── package.json                       # Project dependencies
```

## Admin Features

- Review and approve/deny user registrations
- Verify deposit receipts and credit user accounts
- Block malicious users from creating accounts

## User Flow

1. User registers by providing details and paying ₦5,000 registration fee
2. Admin approves registration after verifying payment
3. User logs in and can:
   - Complete tasks to earn money
   - Deposit funds to earn daily bonuses
   - Withdraw earned funds to their bank account

## Bonus Rate System

The daily bonus rate increases with higher deposit balances:
- ₦0 - ₦4,999: 1% daily
- ₦5,000 - ₦9,999: 1.5% daily
- ₦10,000 - ₦49,999: 2% daily
- ₦50,000+: 3% daily

## Deployment

The application can be built for production using:

```sh
npm run build
```

This will create optimized assets in the `/dist` directory that can be deployed to any static hosting service.
