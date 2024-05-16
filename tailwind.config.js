/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: { screens: { md: {max: "1050px"}, sm: {max: "550px"} }, 
  extend: {
    // colors: {
    //   blue_gray: {
    //     100: "#cac9d6",
    //     700: "#3d547f",
    //     800: "#494759",
    //     900: "#253451",
    //     "100_03": "#d9d9d9",
    //     "900_01": "#192235",
    //     "100_02": "#d2d2d2",
    //     "100_01": "#cecece",
    //     "900_0c": "#2534510c",
    //     "100_cc": "#cac9d6cc",
    //   },
    //   blue: { 50: "#e9f0ff", 100: "#c2d7ff", 200: "#a6bbf1", 900: "#11468f", "100_01": "#cddeff" },
    //   white: { A700_01: "#ffffff", A700_f2: "#fffffff2", A700: "#fffdfd" },
    //   black: { 600: "#656d76", 900: "#0b0000", "900_75": "#00000075", A700_01: "#000000" },
    //   green: { A400: "#00ff75" },
    //   gray: {
    //     50: "#faf9ff",
    //     100: "#f7f6f6",
    //     200: "#ebebeb",
    //     500: "#9794aa",
    //     600: "#676576",
    //     700: "#555453",
    //     800: "#3a3a3a",
    //     900: "#100f14",
    //     "100_03": "#f7f5f5",
    //     "200_01": "#eeeeee",
    //     "500_03": "#aaaaaa",
    //     "100_01": "#fcf5f5",
    //     "500_02": "#93a594",
    //     "50_01": "#fbf8f8",
    //     "100_02": "#f7f7f7",
    //     "900_02": "#121316",
    //     "500_01": "#908f8f",
    //     "700_01": "#626262",
    //     "50_02": "#fcfcfc",
    //     "900_01": "#19181f",
    //   },
    //   orange: { A200: "#ffa14a" },
    //   indigo: { 50: "#d8d7ff", 800: "#10348f" },
    //   colors: "#7b7b7b",
    //   blue_gray_900_99: "25345199",
    //   deep_purple_A400: "#6838ee",
    // },
    // boxShadow: {
    //   xs: "0px 17.01px 23px 0px #10122314",
    //   sm: "-7px -4px 50px 3px #25345138",
    //   md: "-5px 6px 27px 0px #25345142",
    //   lg: "0px 1px 45px -2px #25345133",
    //   xl: "-24px 32px 40px 0px #00000028",
    //   "2xl": "0px 0px 13px 5px #00000029",
    // },
    // backgroundImage: { gradient: "linear-gradient(236deg, #10348f,#10348f00)" },
    // fontFamily: { poppins: "Poppins", inter: "Inter", rubik: "Rubik", opensans: "Open Sans" },
    // textShadow: { ts: "4px 5px 5px #0000007c", ts1: "4px 5px 5px #0000003f" },
  }, 
  },
  plugins: [require("@tailwindcss/forms")],
}
