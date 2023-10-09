function countZeroes(arr) {
    let count = 0;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex) {
        let centerIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[centerIndex] === 0) {
            count += rightIndex - centerIndex + 1;
            rightIndex = centerIndex - 1;
        }
        else {
            leftIndex = centerIndex + 1;
        }
    }
    return count;
}

// module.exports = countZeroes