module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39ff14",
        neonBlue: "#00f6ff",
        neonPurple: "#9d00ff",
      },
    },
    fontFamily: {
      mono: ['"Press Start 2P"', 'monospace'],
    },
  },
  plugins: [],
};
