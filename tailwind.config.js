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
        small_tablet: "768px",
        md: "900px", // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., desktops)
        xl: "1200px", // Extra large devices (e.g., large desktops)
        "2xl": "1350px", // 2x extra large devices (e.g., very large desktops)
        "3xl": "1620px", // Example: Custom breakpoint for very large screens
        "10xl": "2500px",
      },
      fontFamily: {
        spaceGrotesk: ["SpaceGrotesk", "sans-serif"],
        sf: ["sf-pro", "sans-serif"],
        ibmPlexMono: ["IBM Plex Mono", "monospace"],
        sora: ["Sora", "sans-serif"],
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
        "button-shadow": "0px 0px 2px 1px #63F1BB33",
        inner: "0px -4px 1px 0px #FFFFFF40 inset",
        membership_card:
          " 0px -0.75px 0px 0px #000000,  0px 0px 4px 0px #00000059",
        landing_header: "0px 15px 44.7px 0px #DBE64C26",
        carousel_btn: "0px 1px 6.5px 0px #89EFD0",
        carousel_card: "0px 1px 10.4px 0px #2E2CA666",
        vector: "0px 9px 8.5px 0px #182A72",
        badge: "0px 4px 4px 0px #9B9B9B40 inset",
      },
      dropShadow: {
        library_img: "0px 6px 21.6px 0px #00000040",
        sync_account: "0px 2px 4px 0px #00000021",
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
        library_tablet: "url('/images/tablet_view.png')",
        progress: "url('/images/progress-bg.png')",
        library_aside:
          "linear-gradient(180deg, rgba(24, 24, 27, 0.90) 0%, rgba(24, 24, 28, 0.90) 100%)",
        proposal:
          "linear-gradient(0deg, rgba(224, 224, 224, 0.80) 0%, rgba(224, 224, 224, 0.80) 100%), conic-gradient(from 133deg at 34.75% 67.05%, #6BEFD0 0deg, #4CA8E3 360deg)",
        button_grad: "linear-gradient(91deg, #CDC4FB 0%, #A4FCF5 99.74%)",
        black_grad: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
        marketPlace_grad: "linear-gradient(90deg,#5F6FF9 0%,#5DF4CF 100%)",
        home_banner:
          "linear-gradient(139.92deg, #000105 -30.32%, #2B2E40 -1.32%, #000001 30.77%, #2F313D 47.26%, #000106 68.53%, #0A0E1C 73.87%, #090B14 78.98%, #151826 102.74%, #2D303E 112.94%)",
        premium: "url('/images/premium.png')",
        generate_btn:
          "linear-gradient(90.83deg, #44E990 0.21%, #16BD8B 70.21%)",
        footer:
          "linear-gradient(165deg, #000105 -30.32%, #2B2E40 -1.32%, #000001 30.77%, #2F313D 47.26%, #000106 68.53%, #0A0E1C 73.87%, #090B14 78.98%, #151826 102.74%, #2D303E 112.94%)",
        class_scheduler: "url('/images/class.png')",
        header: "linear-gradient(180deg, #ECECFF 0%, #E1E1FE 100%)",
        dashboard_tab:
          "linear-gradient(139.92deg, #FAFBFF -30.32%, #CCCFDD -1.32%, #FEFEFF 30.77%, #B8BBC9 47.26%, #F9FBFF 68.53%, #E4E7F5 77%, #D9DCEA 102.74%, #C1C4D2 112.94%)",
        dashboard_tab_active:
          "linear-gradient(0deg, #53AAB0, #53AAB0), radial-gradient(90.63% 873.63% at 39.29% 23.44%, rgba(84, 171, 177, 0) 0%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)  ",
        active_proposal:
          "linear-gradient(90.83deg, #44E990 0.21%, #16BD8B 70.21%)",
        sync_account: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
        average_bg: "url('/images/average_bg.jpeg')",
        votes: "linear-gradient(180deg, #ECECFF 0%, #E1E1FE 100%)",
        membership_card_outer:
          "linear-gradient(180deg, #C3C3C3 0%, #343434 50.5%, #FFFFFF 100%)",
        membership_card: "linear-gradient(180deg, #C7C7C7 0%, #7B7B7B 100%)",
        library_bg:
          "linear-gradient(180deg, #ECECFF 0%, #E1E1FE 100%), linear-gradient(0deg, #CFCAFF, #CFCAFF)",
        mimbership:
          "linear-gradient(139.92deg, #FAFBFF -30.32%, #CCCFDD -1.32%, #FEFEFF 30.77%, #B8BBC9 47.26%, #F9FBFF 68.53%, #E4E7F5 77%, #D9DCEA 102.74%, #C1C4D2 112.94%)",
        mimbership_banner: "url('/images/membership.png')",
        mimbership_btn:
          "linear-gradient(120.82deg, #E6A940 1.82%, #FFFBE0 21.15%, #EDCB46 37.47%, #F9D998 66.15%, #816B36 83.45%, #D0A72B 100.71%)",
        academy: "url('/images/academy.png')",
        classroom: "url('/images/classroom.png')",
        classroom_btn:
          "linear-gradient(90.83deg, #E9444C 0.21%, #943031 70.21%)",
        discord: "url('/images/discord.png')",
        landing_bg:
          "url('/images/landing_bg.png'), linear-gradient(0deg, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)) ",
        landing_header_top:
          "radial-gradient(97.14% 97.14% at 50% 2.86%, #4D2AFF 0%, #4D2CA9 32%, #271484 74%, #1F1FE5 100%)",
        next_gen:
          "radial-gradient(96% 107.22% at 88.4% 4%, #2F9A66 0%, #4D2CA9 32%, #148457 74%, #1CDCCF 88%, #0B8B5A 100%)",
        vector: "url('/icons/vector.svg')",
        fancy_btn: "linear-gradient(180deg, #C7C7C7 0%, #7B7B7B 100%)",
        fancy_btn_outer:
          "linear-gradient(180deg, #C3C3C3 0%, #343434 50.5%, #FFFFFF 100%)",
        layer:
          "linear-gradient(180deg, rgba(30, 72, 144, 0) 0%, rgba(255, 255, 255, 0.62) 100%)",
        ai_agent: "url('/images/ai_agent.png')",
        features: "url('/images/features.png')",
        skull: "url('/images/skull.png')",
        carousel_bg: "linear-gradient(180deg, #ECECFF 0%, #E1E1FE 100%)",
        reserve_text:
          "radial-gradient(61.79% 87.16% at 81.37% 10.92%, #37A375 0%, #6DF1B9 100%)",
        crpto_card:
          "linear-gradient(120.82deg, #E6A940 1.82%, #FFFBE0 21.15%, #EDCB46 37.47%, #F9D998 66.15%, #816B36 83.45%, #D0A72B 100.71%)",
        rect: "url('/images/rect.png')",
        wrap: "linear-gradient(90.83deg, #44E990 0.21%, #16BD8B 70.21%)",
        card: " radial-gradient(100% 100% at 50% 0%, #191919 0%, #114843 65%, #3DC087 87.5%, rgba(130, 98, 237, 0.59) 100%)",
        badge: "linear-gradient(180deg, #ECECFF 0%, #E1E1FE 100%)",
        separator:
          "radial-gradient(61.79% 87.16% at 81.37% 10.92%, #37A375 0%, #6DF1B9 100%),radial-gradient(50% 50% at 50% 50%, rgba(246, 80, 80, 0.1) 0%, rgba(74, 227, 202, 0.2) 100%),radial-gradient(37.62% 53.06% at 25.47% 8.82%, rgba(69, 254, 214, 0.275) 0%, rgba(131, 125, 250, 0.55) 100%)",
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
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-corner-smoothing"),
  ],
};
