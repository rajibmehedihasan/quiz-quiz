/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                5: "repeat(auto-fit, minmax(300px, 1fr))",
            },
        },
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
        screens: {
            sm: "576px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: "15px",
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
        },
    },

    plugins: [
        /* Custom Container */
        // function ({ addComponents }) {
        //     addComponents({
        //         ".container": {
        //             maxWidth: "100%",
        //             "@screen sm": {
        //                 maxWidth: "540px",
        //             },
        //             "@screen md": {
        //                 maxWidth: "720px",
        //             },
        //             "@screen lg": {
        //                 maxWidth: "1280px",
        //             },
        //             "@screen xl": {
        //                 maxWidth: "1400px",
        //             },
        //         },
        //     });
        // },
    ],
};
