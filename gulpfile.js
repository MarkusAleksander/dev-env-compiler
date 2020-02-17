/* eslint-disable */
const { watch, src, dest } = require("gulp");
const babel = require("gulp-babel");
const postcss = require("gulp-postcss");
const rollup = require("gulp-better-rollup");
const cleanup = require("rollup-plugin-cleanup");
const del = require("del");
const prettier = require("gulp-prettier");

const src_folder = "src/";
const prod_folder = "prod/";
const assets_src_folder = `${src_folder}assets/`;
const assets_prod_folder = `${prod_folder}assets/`;

function javascript() {
    return src(`${src_folder}**/*.js`)
        .pipe(
            rollup(
                {
                    plugins: [
                        cleanup({
                            maxEmptyLines: 1,
                            comments: "all",
                            lineEndings: "unix",
                            sourcemap: false,
                        }),
                    ],
                },
                {
                    format: "iife",
                }
            )
        )
        .pipe(babel())
        .pipe(prettier())
        .pipe(dest(prod_folder));
}

function css() {
    return src(`${src_folder}**/*.css`)
        .pipe(postcss())
        .pipe(dest(prod_folder));
}

function html() {
    return src(`${src_folder}**/*.html`).pipe(dest(prod_folder));
}

function assets() {
    return src(`${assets_src_folder}**/*`).pipe(dest(assets_prod_folder));
}

exports.watch = function() {
    watch(`${src_folder}**/*.js`, { ignoreInitial: false }, javascript);
    watch(`${src_folder}**/*.css`, { ignoreInitial: false }, css);
    watch(`${src_folder}**/*.html`, { ignoreInitial: false }, html);
    watch(`${assets_src_folder}**/*`, { ignoreInitial: false }, assets);
};

exports.javascript = javascript;
exports.css = css;
exports.html = html;
exports.assets = assets;

exports.clear = function() {
    return del([`${src_folder}/**`, `${prod_folder}/**`]);
};
exports.clearSrc = function() {
    return del([`${src_folder}/**`]);
};
exports.clearProd = function() {
    return del([`${prod_folder}/**`]);
};
