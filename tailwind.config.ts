import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#F3F1EF",
          100: "#E6E3DE",
          200: "#CEC7BE",
          300: "#B5AA9D",
          400: "#9D8E7D",
          500: "#84725C",
          600: "#6A5B4A",
          700: "#4F4437",
          800: "#352E25",
          900: "#1A1712",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
  safelist: [
    "ring-4",
    "bg-gray-200",
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-emerald-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-sky-200",
    "bg-white",
    "bg-brand-100",
    "bg-blue-200",
    "bg-purple-200",
    "bg-brand-500",
    "ring-gray-200",
    "ring-red-200",
    "ring-orange-200",
    "ring-yellow-200",
    "ring-green-200",
    "ring-emerald-200",
    "ring-teal-200",
    "ring-cyan-200",
    "ring-sky-200",
    "ring-blue-200",
    "ring-purple-200",
    "text-gray-700",
    "text-red-700",
    "text-orange-700",
    "text-brand-500",
    "text-yellow-700",
    "text-green-700",
    "text-emerald-700",
    "text-teal-700",
    "text-cyan-700",
    "text-sky-700",
    "text-blue-700",
    "text-purple-700",
    "border-brand-200",
    "border-gray-200",
  ],
};

export default config;
