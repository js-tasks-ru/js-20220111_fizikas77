/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let res = [];
  if (arr !== undefined){
    for (let value of arr){
      if (!res.includes(value)){
        res.push(value);
      }
    }
  }
  return res;
}
