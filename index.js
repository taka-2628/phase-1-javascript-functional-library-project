// ---------- Collection Functions (Arrays or Objects) ----------
function myEach(collection, alert){
    let arr = Object.values(collection);
    // console.log(arr);
    for (let element of arr){
        alert(element);
    }
    return collection;
}

// myEach([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection
// myEach({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn and returns the original collection


function myMap(collection, callback){
    const arr = Object.values(collection);
    const arrToBeReturned = [];
    for (const element of arr){
        arrToBeReturned.push(callback(element))
    };
    return arrToBeReturned;
}

// myMap([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]


function myReduce(collection, callback, acc){
    const arr = Object.values(collection);
    let result;
    if (!!acc) {
        result = acc;
        for (let i = 0; i < arr.length; i++){
          result = callback(result, arr[i], collection);
        }
    } else {
        result = arr[0];
        for (let i = 1; i < arr.length; i++){
          result = callback(result, arr[i], collection);
        }
    };
    return result;
}

// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16
// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6
// myReduce([1, 2, 3, 4], function(acc, val, collection){acc + (val * 3)})
// => 30


function myFind(collection, predicate){
    const arr = Object.values(collection);
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])){
            return arr[i];
        };
    };
    return undefined;
}

// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2
// myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// => 4


function myFilter(collection, predicate){
    const arr = Object.values(collection);
    const arrToBeReturned = [];
    for (let i = 0; i < arr.length; i++){
        if (predicate(arr[i])){
            arrToBeReturned.push(arr[i])
        }
    }
    /* Did not pass the test
    for (element of arr){
        if (predicate(element)){
            arrToBeReturned.push(element)
        } 
    }
    */
    return arrToBeReturned;
}

// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]
// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
// => []


function mySize(collection){
    const arr = Object.values(collection);
    return arr.length;
}

// mySize({one: 1, two: 2, three: 3});
// => 3
// mySize([]);
// => 0


// ---------- Array Functions ----------

function myFirst(array, n){
    /* alternatively
    const arrToBeReturned = [];
    if (!n){
        return array[0]
    } else {
        for (let i = 0; i < n; i++){
            arrToBeReturned.push(array[i])
        };
        return arrToBeReturned;
    }
    */
    if (!n){
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// myFirst([5, 4, 3, 2, 1]);
// => 5
// myFirst([5, 4, 3, 2, 1], 3);
// => [5, 4, 3]


function myLast(array, n){
    if (!n){
        return array[array.length -1];
    } else {
        return array.slice(array.length -n);
    }
}

// myLast([5, 4, 3, 2, 1]);
// => 1
// myLast([5, 4, 3, 2, 1], 3);
// => [3, 2, 1]


// ---------- Object Functions ----------

function myKeys(object){
    const arr = [];
    for (const prop in object) {
        arr.push(prop);
    }
    return arr;
}

// myKeys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]

function myValues(object){
    const arr = [];
    for (const prop in object){
        arr.push(object[prop])
    }
    return arr;
}
// myValues({one: 1, two: 2, three: 3});
// => [1, 2, 3]