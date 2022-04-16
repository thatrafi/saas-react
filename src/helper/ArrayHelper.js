// Accepts the array and key
export const filteredArray = (arr, key) => [
  ...new Map(arr.map((item) => [item[key], item])).values()
];
