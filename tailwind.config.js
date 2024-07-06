/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily is required by tailwind to extend any other font. in this case Pacifico (google font) imported in index.html
      fontFamily: {
        titleKey: ['"Pacifico"', "cursive"], // can be any key. className become font-titleKey
      },
    },
  },
  plugins: [],
};
