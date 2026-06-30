const fs = require('fs');
let c = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

c = c.replace(/\}\}(\s+)(INFJ|INFP|ENFJ|ENFP):/g, '}},$1$2:');

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', c);
