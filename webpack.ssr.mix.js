const path = require("path");
const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

const nodeExternals = require("webpack-node-externals");

mix.options({ manifest: false })
    .js("resources/js/ssr.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css")
    .options({
        postCss: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
    })
    .alias({ "@": path.resolve("resources/js") })
    .webpackConfig({
        target: "node",
        externals: [nodeExternals()],
    });
