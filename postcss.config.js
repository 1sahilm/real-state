module.exports = {
  plugins: {
    cssnano: {
      present: ["default", { discardComments: { removeAll: true } }],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
