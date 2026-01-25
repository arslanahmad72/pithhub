/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
            brandPrimary: "rgb(var(--brand-primary))",
            brandSecondary: "rgb(var(--brand-secondary))",
            brandAccent: "rgb(var(--brand-accent))",            
          bg: "rgb(var(--color-bg))",
          surface: "rgb(var(--color-surface))",
          text: "rgb(var(--color-text))",
          muted: "rgb(var(--color-muted))",
          border: "rgb(var(--color-border))",
          primary: "rgb(var(--color-primary))",
          primaryContrast: "rgb(var(--color-primary-contrast))",
        },
        fontFamily: {
          heading: ["var(--font-heading)"],
          body: ["var(--font-body)"],
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  