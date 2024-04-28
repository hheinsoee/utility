import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const devMode = true;
console.log(`${devMode ? "development" : "production"} mode bundle`);

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.mjs",
        format: "es",
      },
    ],
    plugins: [
      // terser({
      //   format: {
      //     // Disable prettification
      //     beautify: false,
      //     // Disable comments
      //     comments: false,
      //     // Other terser options...
      //   },
      // }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
    ],
  },
];
