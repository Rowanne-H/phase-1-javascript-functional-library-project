function myEach(collection, callback) {
    for (let i in collection) {
        callback(collection[i])
    }
    return collection;
}

function myMap(collection, callback) {
    let newArr = [];
    for (let i in collection) {
        newArr.push(callback(collection[i]))
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    for (let i in collection) {
        if (acc === undefined) {
            acc = collection[i]
        } else {
            acc = callback(acc, collection[i])
        }
    }    
    return acc;  
}

function myFind(collection, predicate) {
    for (let i in collection) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
}

function myFilter(collection, predicate) {
    let newArr = [];
    for (let i in collection) {
        if (predicate(collection[i])) {
            newArr.push(collection[i])
        }
    }
    return newArr;
}

function mySize(collection) {
    let count = 0;
    for (let i in collection) {
        if (collection[i]) {
            count++
        }
    }
    return count;
}

function myFirst(array, n) {
    let newArr = []
    if (n === undefined) {
        return array[0]
    } else {
        for (let i=0; i<n; i++) {
            newArr.push(array[i])
        }
        return newArr;
    }
}

function myLast(array, n) {
    let newArr = []
    if (n === undefined) {
        return array[array.length-1]
    } else {
        for (let i=array.length-n; i<array.length; i++) {
            newArr.push(array[i])
        }
        return newArr;
    }
    
}

function mySortBy(array, callback) {
    let newArr = array.map(callback)
    let arrToSort = newArr.map((val, i) => ({val: val, index: i}))
    arrToSort.sort((a, b) => {
        const valA = a.val;
        const valB = b.val;
        if (valA < valB) {return -1}
        if (valB < valA) {return 1}
        return 0;
     })
    let sortedArr = []
    for (let i in arrToSort) {
        sortedArr.push(array[arrToSort[i].index])
    }
    return sortedArr;
}

function myFlatten(array, shallow) {
    let newArr = []
    let flattenArr = (arr) => {
        for (let i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (shallow === true) {
                    for (let j=0; j<arr[i].length; j++) {
                        newArr.push(arr[i][j])
                    } 
                } else {
                    flattenArr(arr[i])
                } 
            } else {
                newArr.push(arr[i])
            }
        }
    }
    flattenArr(array)
    return newArr
}

function myKeys(object) {
    let newArr = []
    for (let i in object) {
        newArr.push(i)
    }
    return newArr
}

function myValues(object) {
    let newArr = []
    for (let i in object) {
        newArr.push(object[i])
    }
    return newArr
}


