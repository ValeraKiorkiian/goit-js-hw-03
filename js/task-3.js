function filterArray(numbers, value) {
  const resArray = [];
  for (const result of numbers) {
    if (result > value) {
      resArray.push(result);
    }
  }
  return resArray;
}
