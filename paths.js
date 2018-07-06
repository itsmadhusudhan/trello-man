'use strict';

const path=require('path');
const fs=require('fs');

const isProduction=(process.env.NODE_ENV==='production');

const appDir=fs.realpathSync(process.cwd());

const resolve=relativePath=>path.resolve(appDir,relativePath);

module.exports={
  rootPath:resolve('.'),
  buildPath:resolve('build'),
  buildStaticPath:resolve('build/static'),
  publicPath:process.env.ASSETS_URL||'/',
  srcPath: resolve('src'),
  srcStaticPath: resolve('src/static'),
  srcStylesPath: resolve('src/styles'),
  srcEntryPath: resolve('src/index.js'),
  nodeModulesPath: resolve('./node_modules'),
  babelrcPath: resolve('./.babelrc'),
  servePath:resolve('build')
}