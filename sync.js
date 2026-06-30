const fs = require('fs');
let html = fs.readFileSync('E:/Tools/16 Personalities/test.html', 'utf8');
let css = fs.readFileSync('E:/Tools/16 Personalities/css/style.css', 'utf8');
let data = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');
let script = fs.readFileSync('E:/Tools/16 Personalities/js/script.js', 'utf8');

const scriptContent = data + '\n' + script;
const newHtml = html
    .replace(/<style>[\s\S]*?<\/style>/, '<style>\n' + css + '\n<\/style>')
    .replace(/<script>[\s\S]*?<\/script>/, '<script>\n' + scriptContent + '\n<\/script>');
fs.writeFileSync('E:/Tools/16 Personalities/test.html', newHtml);
console.log('Sync Done');
