import type { Config } from "tailwindcss";

import "./src/index.css";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-tertiary": "var(--background-tertiary)",
        "background-elevated": "var(--background-elevated)",
        "background-card": "var(--background-card)",
        "background-input": "var(--background-input)",

        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        "foreground-disabled": "var(--foreground-disabled)",
        "foreground-inverse": "var(--foreground-inverse)",

        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        "border-input": "var(--border-input)",
        "border-focus": "var(--border-focus)",

        brand: {
          DEFAULT: "var(--brand-primary)",
          hover: "var(--brand-primary-hover)",
          soft: "var(--brand-primary-soft)",
        },

        login: {
          card: "var(--login-card-bg)",
          input: "var(--login-input-bg)",
          social: "var(--login-social-bg)",
          divider: "var(--login-divider)",
          link: "var(--login-link)",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },

      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
        button: "var(--shadow-button)",
      },

      maxWidth: {
        container: "var(--container-width)",
        "login-card": "var(--login-card-width)",
      },

      backgroundImage: {
        "page-gradient": "var(--gradient-page)",
        "card-gradient": "var(--gradient-card)",
        "button-gradient": "var(--gradient-button)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
    },
  },
  plugins: [],
};

export default config;
