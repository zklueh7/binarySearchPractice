function findRotatedIndex(arr, n) {
    let rotIndex = findRotationCount(arr);
    if(arr[rotIndex] === n) {
        return rotIndex;
    }
    else if((arr[rotIndex] < n) && (n < arr[arr.length - 1])) {
        let leftIndex = rotIndex + 1;
        let rightIndex = arr.length - 1;
        while(leftIndex <= rightIndex) {
            centerIndex = Math.floor((leftIndex + rightIndex) / 2);
            if(arr[centerIndex] === n) {
                return centerIndex;
            }
            else if(arr[centerIndex] < n) {
                leftIndex = centerIndex + 1;
            }
            else {
                rightIndex = centerIndex - 1;
            }
        }
    }
    else {
        let rightIndex = rotIndex - 1;
        let leftIndex = 0;
        while(leftIndex <= rightIndex) {
            centerIndex = Math.floor((leftIndex + rightIndex) / 2);
            if(arr[centerIndex] === n) {
                return centerIndex;
            }
            else if(arr[centerIndex] < n) {
                leftIndex = centerIndex + 1;
            }
            else {
                rightIndex = centerIndex - 1;
            }
        }
    }
    return -1;
}

function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    if(arr[leftIndex] <= arr[rightIndex]) {
      return 0;
    }
    while(leftIndex <= rightIndex) {
      centerIndex = Math.floor((leftIndex + rightIndex) / 2);
      let previous = (centerIndex - 1 + arr.length) % arr.length;
      let next = (centerIndex + 1) % arr.length;
      if((arr[centerIndex] <= arr[previous]) && (arr[centerIndex] <= arr[next])) {
          return centerIndex;
      }
      else if(arr[centerIndex] <= arr[rightIndex]) {
          rightIndex = centerIndex - 1;
      }
      else {
          leftIndex = centerIndex + 1;
      }
    }
    return 0;
  }

//module.exports = findRotatedIndex