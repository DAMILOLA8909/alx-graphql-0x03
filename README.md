# alx-graphql-0x03

# ALX Rick and Morty App

This project is a React application that displays information about Rick and Morty characters using GraphQL.

## Features

- Display Rick and Morty characters
- Search functionality
- Error boundary for catching JavaScript errors
- Responsive design

## Error Boundary

The application includes an ErrorBoundary component that catches JavaScript errors anywhere in the child component tree and displays a fallback UI instead of crashing the entire app.

### Usage

Wrap any component that might throw an error with the ErrorBoundary:

```jsx
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}
```

### ErrorBoundary Features

1. Catches errors: Catches errors during rendering, in lifecycle methods, and in constructors of the whole tree below.

2. Fallback UI: Displays a user-friendly error message with a "Try again" button.

3. Error logging: Logs errors to the console for debugging.

4. Error recovery: Allows users to reset the error state and try again.

## Features
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS v4
- Apollo Client for GraphQL
- Integration with Rick and Morty GraphQL API

## Setup

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
    ```
    bash
    npm run dev
    ```

4. Open http://localhost:3000

## Project Structure

- `/app` - Next.js App Router pages and layouts

- `/graphql` - Apollo Client setup and queries

- `/components` - Reusable React components

```text
alx-rick-and-morty-app/
├── 📁 pages/                          # Next.js Pages Router
│   ├── _app.tsx                      # App wrapper with ApolloProvider
│   └── index.tsx                     # Homepage with episodes list & pagination
│
├── 📁 components/                     # React components
│   └── 📁 common/                     # Shared components
│   │    └── EpisodeCard.tsx           # Episode card display component
│   │── ErrorBoundary.tsx
│
├── 📁 graphql/                        # GraphQL configuration
│   ├── apolloClient.ts               # Apollo Client setup
│   └── queries.ts                    # GraphQL query definitions
│
├── 📁 interfaces/                     # TypeScript interfaces
│   └── index.ts                      # Type definitions (EpisodeProps, etc.)
│
├── 📁 styles/                         # Global styles
│   └── globals.css                   # Global CSS with Tailwind directives
│
├── 📁 public/                         # Static assets
│   ├── favicon.ico
│   └── ... (other static files)
│
├── 📁 .next/                          # Next.js build output (generated)
│
├── 📁 node_modules/                   # Dependencies (generated)
│
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 package-lock.json               # Lock file for dependencies
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 next.config.js                  # Next.js configuration
├── 📄 tailwind.config.ts              # Tailwind CSS configuration
├── 📄 postcss.config.js               # PostCSS configuration
├── 📄 .gitignore                      # Git ignore rules
└── 📄 README.md                       # Project documentation
```


## Technologies Used

- Next.js 14

- React 19

- TypeScript

- Tailwind CSS v4

- Apollo Client

- GraphQL

