const flowbite = require("flowbite-react/tailwind");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
    theme: {
        extend: [],
        screens: {
            xs: "380px",
            sm: "540px",
            md: "720px",
            lg: "920px",
            xl: "1040px",
            xxl: "1340px",
        },
    },
    plugins: [flowbite.plugin()],
};
