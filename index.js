/*
Дан массив из N положительных чисел, надо найти в нем несколько чисел, идущих подряд, так, чтобы их сумма была больше K, а чисел в нем содержалось бы как можно меньше
*/

function twoPointers(mass, k) {
  for (var i = 0 ; i < mass.length ; i++) {
    if (mass[i] > k) return "one elements: [" + i + "]";
  }
  
  let countElem = Infinity;
  for (let l = 0 ; l < mass.length ; l++) {
    sum = mass[l];
    for (let r = l + 1 ; r < mass.length ; r++) {
      sum += mass[r];

      if (sum <= k) {
        continue;
      }

      const ccount = r - l + 1;
      if (ccount < countElem) {
        var left = l;
        var right = r;
        countElem = ccount;
      }
      break;
    }
  }
  return  "count elements: " + countElem 
        + "; sum: " + sum  
        + "; [" + left 
        + ", " + right
        + "]";
}

function twoPointersBiba(arr, k) {
  if (arr.length === 0) {
    return [-Infinity, Infinity];
  }
  
  let [maxL, maxR] = [-Infinity, Infinity];
  let l = 0;
  let r = 0;
  let cur = arr[0];

  while (true) {
    while (cur <= k && r < arr.length - 1) {
      cur += arr[++r];
    }

    if (cur <= k) {
      break;
    }

    while (cur > k && l <= r) {
      if (r - l < maxR - maxL) {
        [maxL, maxR] = [l, r];
      }

      cur -= arr[l++];
    }

    if (l > r) {
      break;
    }
  }

  return [maxL, maxR];
}

var massive = [1,1,3,4,3,5,1,8];
var k = 9;

console.log(twoPointers(massive, k));
