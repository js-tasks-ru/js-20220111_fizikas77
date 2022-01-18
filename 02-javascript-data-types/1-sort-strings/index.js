/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortingDirection = 1;
  if(param === 'desc') {
    sortingDirection = -1;
  }
  return arr.slice().sort(function (a, b) {
    return a.localeCompare(b,['ru','en'],{caseFirst:"upper"})*(sortingDirection);
  });
}
