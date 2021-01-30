export default (arr, key) => {
  if (!arr || Array.isArray(arr)) return new Error('не передан массив');
  if (!key) return new Error('не передан ключ');
  if (!arr.length) return arr;
  const counted = arr
    .map((item) => item[key])
    .reduce((acc, item) => {
      const keys = Object.keys(acc);
      if (keys.includes(item)) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});
  const sorted = Object
    .entries(counted)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);
  return ({ counted, sorted });
};
