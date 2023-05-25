/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                darkpink: '#A30062',
                darkblue: '#1C2852',
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
