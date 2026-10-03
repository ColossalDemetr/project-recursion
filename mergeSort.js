const mergeSort = (arr) => { 

    // Base case

    if (arr.length === 1) { return arr; } else if (arr.length === 0) { return []; };

    // Cut the array into 2

    const split = Math.floor(arr.length / 2);

    const sliceLeftPart = arr.slice(0, split);
    const sliceRightPart = arr.slice(split);

    const sortedLeft = mergeSort(sliceLeftPart);
    const sortedRight = mergeSort(sliceRightPart);
    
    return merge(sortedLeft, sortedRight);

};





const merge = (left, right) => {

    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

    };

    result.push(...left.slice(i));
    result.push(...right.slice(j));

    return result;

};


console.log(mergeSort([6,5,2,0,1,3,4]));
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1,2,3,4,5]));
console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([105,79,100,110]));