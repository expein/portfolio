import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Pallet one
          palletOnePrimary: "var(--pallet-one-primary)",
          palletOneSecondary: "var(--pallet-one-secondary)",
          palletOneTertiary: "var(--pallet-one-tertiary)",
          palletOneQuaternary: "var(--pallet-one-quaternary)",
        // Palette two
          palletTwoPrimary: "var(--pallet-two-primary)",
          palletTwoSecondary: "var(--pallet-two-secondary)",
          palletTwoTertiary: "var(--pallet-two-tertiary)",
          palletTwoQuaternary: "var(--pallet-two-quaternary)",
        // Palette three
          palletThreePrimary: "var(--pallet-three-primary)",
          palletThreeSecondary: "var(--pallet-three-secondary)",
          palletThreeTertiary: "var(--pallet-three-tertiary)",
          palletThreeQuaternary: "var(--pallet-three-quaternary)",
      },
    },
  },
  plugins: [],
};
export default config;
