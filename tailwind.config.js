module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.markdown',
      './_pilas/*.markdown',
      './_pilaspage/*.markdown',
      './*.markdown',
      './*.html',
    ],
    theme: {
      theme: {
        extend: {},
      },
    },
    plugins: [require("daisyui")],
  }
  