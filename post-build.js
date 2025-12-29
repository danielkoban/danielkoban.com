const fs = require('fs-extra');

const name = 'danielkoban.com';
const root = './dist';
const targetDir = root + '/' + name + '/browser';

(async function build() {
  try {
    await fs.ensureDir(targetDir);
    await fs.copy('./.htaccess', targetDir + '/.htaccess');
    console.log('✓ .htaccess copied successfully!');
  } catch (error) {
    console.error('Error copying .htaccess:', error);
    process.exit(1);
  }
})();
