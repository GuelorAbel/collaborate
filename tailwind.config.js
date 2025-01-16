/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1d4ed8",
          "secondary": "#1e40af",
          "accent": "#9ca3af",
          "neutral": "#ff00ff",
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#2ecc71",
          "warning": "#eab308",
          "error": "#dc2626",
          },
        },
      ],
    },
  plugins: [require('daisyui'),
  ],
}

