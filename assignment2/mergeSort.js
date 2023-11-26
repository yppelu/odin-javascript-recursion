function mergeSort(array) {
  if (array.length === 0) return 'Nothing to sort';
  if (array.length === 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middleIndex));
  const rightHalf = mergeSort(array.slice(middleIndex));

  const merged = [];
  let i = 0, j = 0, k = 0;
  while (true) {
    if (i >= leftHalf.length) {
      merged.push(...rightHalf.slice(j));
      break;
    } else if (j >= rightHalf.length) {
      merged.push(...leftHalf.slice(i));
      break;
    }

    if (leftHalf[i] < rightHalf[j]) {
      merged.push(leftHalf[i]);
      i++;
    }
    if (leftHalf[i] > rightHalf[j]) {
      merged.push(rightHalf[j]);
      j++;
    }
    k++;

    if (leftHalf[i] === rightHalf[j]) {
      merged.push(leftHalf[i], rightHalf[j]);
      i++;
      j++;
      k++;
    }
  }

  return merged;
}

console.log(mergeSort([]));
console.log(mergeSort([0]));
console.log(mergeSort([23, -3, 17, 0, 0, 5, 45, 234, -123]));