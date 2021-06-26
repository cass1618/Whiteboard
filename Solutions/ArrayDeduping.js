const array = [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

//Iterate through the array, add unique elements to new array, return the new array
//forEach loop
//if the element is not already in the noDupes array, push the element to the array
//else, do nothing continue loop
//Return the noDupes array

const deDupe = (array) => {
    let noDupes = [];
    array.forEach(function (element) {
        if(!(noDupes.includes(element))) {
        noDupes.push(element);
        }
    });
    return noDupes;
}


//USE FILTER to filter out the elements that only appear once
//If the element is in the array more than once, it will exist at 2 or more indices
//Use filter to loop through the array and only return elements that do not exist at any other index
//Once you get to the duplicate, array.indexOf will provide the index of the first copy, which will not match


const deDupeFilter = (array) => {
    return array.filter((e, i) => {
        return array.indexOf(e) === i;
    });
}

//USE RECURSION
//Loop except for using recursion instead of forEach

const deDupeRecursive = (array, newArray=[], i=0) => {
    if(array[i]!==undefined) {
        if(!(newArray.includes(array[i]))) {
            newArray.push(array[i]);
            i++;
            return deDupeRecursive(array, newArray, i);
        } else {
            i++;
            return deDupeRecursive(array, newArray, i);
        }
    } 
        return newArray;
}

console.log(deDupeRecursive(array, [], 0));