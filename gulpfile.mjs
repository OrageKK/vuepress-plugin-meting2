import gulp from "gulp";
import { rimraf as rm } from "rimraf";
import jeditor from "gulp-json-editor";
import { resolve } from "path";
import { execaCommandSync } from "execa";
import ts from "gulp-typescript";

const outputDir = "./lib";
const inputDir = "./src";

const { src, dest, series } = gulp;

const assets = ["**/*.js", "**/*.vue", "**/*.css", "**/*.scss", "**/*.svg"];

const version = execaCommandSync("git describe --tags", {
  shell: true,
  all: true,
}).stdout;

const tsc = () => {
  const tsProject = ts.createProject("tsconfig.json");
  return tsProject.src().pipe(tsProject()).pipe(dest(outputDir));
};

const cleanOut = () => rm(outputDir);
const cpAssets = () =>
  Promise.all(
    assets.map((e) => src(resolve(inputDir, e)).pipe(dest(outputDir)))
  );

const cpPackageJson = () => {
  return src("package.json")
    .pipe(
      jeditor({
        version: version
      })
    )
    .pipe(src("README.md"))
    .pipe(src("LICENSE"))
    .pipe(dest(outputDir));
};

export const build = series(cleanOut, tsc, cpAssets, cpPackageJson);
