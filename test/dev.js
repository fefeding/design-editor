const express = require('express');
const path = require('path');
const fs = require('fs');
const builder = require('../build.js');
const app = express();

builder.watch();// 监听文件修改

const figma2htmlPath = path.join(__dirname, '../node_modules', '@cicctencent/figma2html/dist/index.esm.js');
const figma2htmlLibPath = path.join(__dirname, '../example/lib/figma2html/index.esm.js');
console.log('copy', figma2htmlPath, figma2htmlLibPath);
const wf = fs.createWriteStream(figma2htmlLibPath, 'utf8');
fs.createReadStream(figma2htmlPath, 'utf8').pipe(wf).on('close', (e)=>{
    wf.close();
});

app.use(express.static("./"));

const port = 8806;

app.listen(port)

console.log(`dev server listend at ${port}`);

