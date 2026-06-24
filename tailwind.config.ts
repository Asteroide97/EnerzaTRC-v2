import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        graph: {
          1: "hsl(var(--graph-1))",
          2: "hsl(var(--graph-2))",
          3: "hsl(var(--graph-3))",
          4: "hsl(var(--graph-4))",
        },
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(to right, rgba(20, 60, 107, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 60, 107, 0.06) 1px, transparent 1px)",
        "paper-fade":
          "radial-gradient(circle at top right, rgba(42, 116, 187, 0.12), transparent 26%), radial-gradient(circle at bottom left, rgba(88, 180, 74, 0.08), transparent 24%)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      boxShadow: {
        line: "0 0 0 1px rgba(20, 60, 107, 0.08)",
      },
      borderRadius: {
        xl: "0.25rem",
        "2xl": "0.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
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
