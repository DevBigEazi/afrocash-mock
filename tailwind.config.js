/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FEFEFE",
                black: "#1C1C1C",
                gray: "#B7B7B7"
            },
            fontFamily: {
                ithin: ["Inter_28pt-Thin", "sans-serif"],
                iextralight: ["Inter_28pt-ExtraLight", "sans-serif"],
                ilight: ["Inter_28pt-Light", "sans-serif"],
                iregular: ["Inter_28pt-Regular", "sans-serif"],
                imedium: ["Inter_28pt-Medium", "sans-serif"],
                isemibold: ["Inter_28pt-SemiBold", "sans-serif"],
                ibold: ["Inter_28pt-Bold", "sans-serif"],
                iextrabold: ["Inter_28pt-ExtraBold", "sans-serif"],
                iblack: ["Inter_28pt-Black", "sans-serif"],
                pmregular: ["PermanentMarker-Regular", "sans-serif"],
            }
        },
    },
    plugins: [],
}

