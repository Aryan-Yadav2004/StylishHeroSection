/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    cyan: '#00E5FF',
                    pink: '#FF0055',
                    purple: '#9D00FF',
                    yellow: '#FFEA00'
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}
