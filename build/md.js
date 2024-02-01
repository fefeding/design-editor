const fs = require('fs');
const path = require('path');

/**
 * 避免vitepress构建报错，转换部分字符
 * @param {*} dir 
 */
function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const pathname = path.join(dir, file);
    const stat = fs.statSync(pathname);
    if (stat.isDirectory()) {
      traverseDir(pathname);
    } else if (stat.isFile() && path.extname(pathname) === '.md') {
      let content = fs.readFileSync(pathname, 'utf-8');
      content = content.replace(/\<\w+\>/g, $0 => ($0 === '<code>'? $0 : '`'+$0+'`'))
                .replace(/\|(\s*\{[^}]+\}\s*)\|/g, ($0, $1) => '|`'+$1+'`|');


      
      fs.writeFileSync(pathname, content, 'utf-8');
    }
  });
}

traverseDir(path.resolve(__dirname, '../docs/api'));