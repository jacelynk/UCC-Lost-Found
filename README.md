# UCC-Lost-Found


prefer structure:
│── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Card.tsx
│   │   └── index.ts
│   ├── pages/           # Page-level components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── index.ts
│   ├── hooks/           # Custom React hooks
│   │   ├── useFetch.ts
│   │   ├── useAuth.ts
│   │   ├── useTheme.ts
│   │   └── index.ts
│   ├── assets/          # Static assets (images, icons, styles)
│   │   ├── images/
│   │   ├── icons/
│   │   ├── styles.css
│   ├── context/         # Global state management (React Context, Redux)
│   ├── utils/           # Utility functions
│   │   ├── formatDate.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point of the app
│   ├── index.css        # Global styles
│   ├── routes.tsx       # Route configurations (if using React Router)
│── public/              # Public assets (favicon, index.html)
│── package.json         # Project dependencies
│── tsconfig.json        # TypeScript configuration
