function sortedFrequency(arr, num) {
    let leftIndex = findLeftIndex(arr,num);
    if(leftIndex === -1) {
        return -1;
    }
    let rightIndex = findRightIndex(arr,num);
    return rightIndex - leftIndex + 1;
}

function findLeftIndex(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let numIndex = -1;
    while(leftIndex <= rightIndex) {
        centerIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[centerIndex] === num) {
            numIndex = centerIndex;
            rightIndex = centerIndex - 1;
        }
        else if(arr[centerIndex] > num) {
            rightIndex = centerIndex - 1;
        }
        else if(arr[centerIndex] < num ) {
            leftIndex = centerIndex + 1;
        }
    }
    return numIndex;
}

function findRightIndex(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let numIndex = -1;
    while(leftIndex <= rightIndex) {
        centerIndex = Math.ceil((leftIndex + rightIndex) / 2);
        if(arr[centerIndex] === num) {
            numIndex = centerIndex;
            leftIndex = centerIndex + 1;
        }
        else if(arr[centerIndex] > num) {
            rightIndex = centerIndex - 1;
        }
        else if(arr[centerIndex] < num ) {
            leftIndex = centerIndex + 1;
        }
    }
    return numIndex;
}

//module.exports = sortedFrequency