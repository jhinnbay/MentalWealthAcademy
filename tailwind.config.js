/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "4xl": "2400px",
      },
    },

    extend: {
      screens: {
        xs: "420px", // Extra small devices (e.g., smartphones in portrait mode)
        sm: "640px", // Small devices (e.g., smartphones in landscape mode)
        md: "900px", // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., desktops)
        xl: "1200px", // Extra large devices (e.g., large desktops)
        "2xl": "1350px", // 2x extra large devices (e.g., very large desktops)
        "3xl": "1620px", // Example: Custom breakpoint for very large screens
      },
      fontFamily: {
        spaceGrotesk: ["SpaceGrotesk", "sans-serif"],
        sf: ["sf-pro", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      boxShadow: {
        default: "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        button:
          "0px -4px 0px 0px rgba(21, 21, 21, 0.25) inset, 0px 2px 0px 0px rgba(172, 172, 172, 0.50) inset",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "background-100": "hsl(var(--primary-background) / 0.1)",
          "background-200": "hsl(var(--primary-background) / 0.2)",
          "background-300": "hsl(var(--primary-background) / 0.3)",
          "background-400": "hsl(var(--primary-background) / 0.4)",
          "background-500": "hsl(var(--primary-background) / 0.5)",
          "background-600": "hsl(var(--primary-background) / 0.6)",
          "background-700": "hsl(var(--primary-background) / 0.7)",
          "background-800": "hsl(var(--primary-background) / 0.8)",
          "background-900": "hsl(var(--primary-background) / 0.9)",
          background: "hsl(var(--primary-background))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          background: "hsl(var(--secondary-background))",
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
      backgroundImage: {
        library: "url('/images/library_bg.png')",
        progress: "url('/images/progress-bg.png')",
        library_aside:
          "linear-gradient(180deg, rgba(24, 24, 27, 0.90) 0%, rgba(24, 24, 28, 0.90) 100%)",
        proposal:
          "linear-gradient(0deg, rgba(224, 224, 224, 0.80) 0%, rgba(224, 224, 224, 0.80) 100%), conic-gradient(from 133deg at 34.75% 67.05%, #6BEFD0 0deg, #4CA8E3 360deg)",
        button_grad: "linear-gradient(91deg, #CDC4FB 0%, #A4FCF5 99.74%)",
        black_grad: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
        marketPlace_grad: "linear-gradient(90deg,#5F6FF9 0%,#5DF4CF 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        progress: {
          "0%": { width: "0%" },
          "50%": { width: "25%" },
          "100%": { width: "0%" },
        },

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
        "marquee-left": "marquee 30s linear infinite",
        progress: "progress 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
