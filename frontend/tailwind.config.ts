import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tailwind-compatible tokens mapped to CSS variables from globals.css
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))", // corresponds to #10b981
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Optional custom chart tokens (if used in graphs)
        chart: {
          "1": "hsl(var(--chart-1, 160 100% 45%))",
          "2": "hsl(var(--chart-2, 174 100% 40%))",
          "3": "hsl(var(--chart-3, 190 100% 38%))",
          "4": "hsl(var(--chart-4, 207 90% 35%))",
          "5": "hsl(var(--chart-5, 222 80% 32%))",
        },

        // Sidebar mappings (optional)
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, 204 251 241))",
          foreground: "hsl(var(--sidebar-foreground, 19 78 74))",
          primary: "hsl(var(--sidebar-primary, 16 185 129))",
          "primary-foreground":
            "hsl(var(--sidebar-primary-foreground, 255 255 255))",
          accent: "hsl(var(--sidebar-accent, 14 116 144))",
          "accent-foreground":
            "hsl(var(--sidebar-accent-foreground, 255 255 255))",
          border: "hsl(var(--sidebar-border, 203 213 225))",
          ring: "hsl(var(--sidebar-ring, 16 185 129))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
