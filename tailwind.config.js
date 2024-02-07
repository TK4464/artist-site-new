/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "border-inti-green-x-x": "#25ACC1",
                "border-inti-green-x-z": "#AADDEB",
                "border-inti-green-x-y": "#E3F5FF",
                "inti-orange": "#F97832",
                "raymi-orange": "#D6861C",
                "inti-green": "#EAF1EA",
                "inti-green-x": "#61AE98",
                "raymi-green": "#447744",
                "white-gray": "#F6F6F6",
                "arrows-beige": "#F6F5F4",
                "arrows-beige-x": "#FBFAF9",
                "blue-beige": "#F0F5F9",
                "sky-blue": "#48FFFF",
                "dark-navy" : "#003DCC"
            },
            keyframes: {
                scrolldown: {
                    "0%": { transform: "translateY(-100%)" },
                    to: { transform: "translateY(100%)" },
                },
            },
            animation: {
                "scrolldown-animation": "scrolldown 1.4s ease-in-out infinite",
            },
        },
        fontFamily: {
            notoSansJP: ["Noto Sans JP", "sans-serif"],
            times: ["Times,serif"],
            lato: ["Lato", "sans-serif"],
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        //...
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-shadow": {
                    textShadow: "0px 2px 3px darkgrey",
                },
                ".text-shadow-md": {
                    textShadow: "0px 3px 3px darkgrey",
                },
                ".text-shadow-lg": {
                    textShadow: "0px 5px 3px darkgrey",
                },
                ".text-shadow-xl": {
                    textShadow: "0px 7px 3px darkgrey",
                },
                ".text-shadow-2xl": {
                    textShadow: "0px 10px 3px darkgrey",
                },
                ".text-shadow-none": {
                    textShadow: "none",
                },
                ".vertical-rl": {
                    writingMode: "vertical-rl",
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
