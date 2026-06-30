const fs = require('fs');
let content = fs.readFileSync('E:/Tools/16 Personalities/js/data.js', 'utf8');

content = content.replace(/\}\},\{name:'The Debater'/g, "}}, \n      ENTP:{name:'The Debater'");
content = content.replace(/\}\},\{name:'The Protagonist'/g, "}}, \n      ENFJ:{name:'The Protagonist'");
content = content.replace(/\}\},\{name:'The Campaigner'/g, "}}, \n      ENFP:{name:'The Campaigner'");

fs.writeFileSync('E:/Tools/16 Personalities/js/data.js', content);
