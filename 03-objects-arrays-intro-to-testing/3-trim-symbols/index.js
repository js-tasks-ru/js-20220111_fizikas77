/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let res = '';
  if (string === ''){
    return res;
  }
  if (size === undefined){
    return string;
  }
  let currentAmount = 1;
  const symbolsArray = string.split('');
  if (currentAmount <= size){
    res += symbolsArray[0];
  }
  if (string.length > 1){
    for (let i = 1;i < string.length;i++){
      if (symbolsArray[i] === symbolsArray[i - 1]){
        currentAmount++;
      } else {
        currentAmount = 1;
      }
      if (currentAmount <= size){
        res += symbolsArray[i];
      }
    }
  }
  return res;
}
