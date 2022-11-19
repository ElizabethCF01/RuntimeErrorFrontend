/* eslint-disable */ 
export const bs = (arr, x) => { // busqueda binaria

  let left = 0
  let right = arr.length-1

  while (left <= right) {
    let m = Math.floor((left + right) / 2)

    if (arr[m] == x) {
      return m
    }
    if (arr[m] > x) {
      right = m - 1
    } else {
      left= m + 1 
    }
  }
  return -1
}