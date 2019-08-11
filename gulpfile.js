const { series, src, dest } = require('gulp');

// const pjson = require('./package.json');
// console.log(pjson);

const readme = () => {
  return src('./assets/README.md').pipe(dest('./boundle/'));
};

const license = () => {
  return src('./assets/LICENSE').pipe(dest('./boundle/'));
};

const gitignore = () => {
  return src('./assets/.gitignore').pipe(dest('./boundle/'));
};

exports.default = series(readme, license, gitignore);
