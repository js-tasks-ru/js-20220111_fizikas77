/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  if (path === undefined){
    path = '';
  }
  const propertiesArray = path.split('.');
  return function (obj) {
    if (path === '' || obj === undefined){
      return;
    }
    let value = obj;
    for (let key of propertiesArray){
      if (value.hasOwnProperty(key)){
        value = value[key];
      } else {
        return;
      }
    }
    return value;
  }
}
