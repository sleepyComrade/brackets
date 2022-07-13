module.exports = function check(str, bracketsConfig) {
  let newStr = str.split('');
  for (let l = 0; l < str.length / 2; l++) {
    newStr.forEach((el, i) => {
      bracketsConfig.forEach(br => {
        if (br[0] === el && newStr[i + 1] === br[1]) {
          newStr[i] = ' ';
          newStr[i + 1] = ' ';
        }
      })
    });
    newStr = newStr.filter(el => el !== ' ');
  }
  return newStr.length > 0 ? false : true;
}