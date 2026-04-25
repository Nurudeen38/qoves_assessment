# Qoves Assessment

Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed.

This project is a Next.js web application built following Atomic Design principles and a Spec-Driven Development methodology. It features a modern, responsive, and highly interactive user interface designed to provide facial analysis insights.

## Features

- **Hero Comparison**: A pixel-perfect hero section featuring animated SVG tracking paths for an engaging comparison experience.
- **Facial Analysis**: A detailed analysis section utilizing Recharts for data visualization.
- **FAQ List**: A modern, nested accordion structure for frequently asked questions.
- **Footer CTA**: A visually rich, glassmorphism-inspired call to action layout.
- **Custom Cursor**: A custom cursor tracking ball for enhanced user interaction.

## Architecture & Methodology

The project structure is based on the **Atomic Design** methodology, ensuring a scalable and maintainable codebase:
- **Atoms**: Basic building blocks.
- **Molecules**: Groups of atoms functioning together.
- **Organisms**: Complex UI sections composing molecules and atoms (e.g., `HeroComparison`, `FacialAnalysis`, `FAQList`, `FooterCTA`).

Styles are built with **SCSS Modules**, utilizing centralized variables (`_variables.scss`) to avoid hardcoded values and maintain consistent design tokens across the application.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: SCSS Modules
- **Animations**: [GSAP](https://gsap.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the application in production mode.
- `npm run lint`: Runs ESLint to check for code quality and formatting issues.
