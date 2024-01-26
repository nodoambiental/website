module.exports = {
  content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.markdown',
      './_pilas/*.markdown',
      './_pilaspage/*.markdown',
      './*.markdown',
      './pages/**/*.markdown',
      './*.html',    
    ],
  theme: {    
    extend: {
      screens: {
        'xs': '420px', // min-width
      },
      fontFamily: {
        "icon": ['"Font Awesome 6 Free"']
      }
    }
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    }
  }
  