**Project Name:** A-5 Dev Stack Builder Website
It is a React web application designed for developers to explore, select, and manage their favorite technologies to build a custom tech stack.

**Technology I used:**
TypeScript
Tailwind CSS
Build Tool: Vite
React-Toastify etc



1. JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript.
2. Props is Used to pass data from a parent component to a child component.the child cannot change it 
State is Internal data managed within a component 
3.The useState hook allows functional components to store and manage dynamic state. In this project, useState is used in App.tsx 
4.The `useEffect` hook handles side-effects in React components, It is used to asynchronously load initial technology data from data.json
5.A unique `key` prop helps React identify which items have changed, been added, or removed.
6. Conditional rendering is showing or hiding UI elements based on specific conditions. In this project, it is used in SelectedStack.tsx 
7. "The parent component sends data directly to the child component via props."
"A child component cannot send data directly to its parent. Instead, the parent passes a callback function as a prop to the child, and when the child triggers an event (like a click), it executes that function to send the data back up."













# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
