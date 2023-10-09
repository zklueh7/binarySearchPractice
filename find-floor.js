function findFloor(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  floor= -1;
  while(leftIndex <= rightIndex) {
    let centerIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(arr[centerIndex] <= num) {
        floor = arr[centerIndex];
        leftIndex = centerIndex + 1;
    }
    else if(arr[centerIndex] > num) {
        rightIndex = centerIndex - 1;
    }
  }
  return floor;
}

//module.exports = findFloor