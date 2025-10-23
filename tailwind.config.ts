import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: "#E8DED1",
          clay: "#A46843",
          ember: "#C6452B",
          denim: "#2A4D7A",
          cream: "#F7F2EB"
        }
      }
    }
  },
  plugins: []
};

export default config;
