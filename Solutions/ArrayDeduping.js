let array = [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

function deDupe(array) {
    let noDupes = [];
    array.forEach(function (element) {
        if(!(noDupes.includes(element))) {
        noDupes.push(element);
        }
    });
    return noDupes;
}


//If the element is in the array more than once, it will exist at 2 or more indices
//Use filter to loop through the array and only return elements that do not exist at any other index
//Once you get to the duplicate, array.indexOf will provide the index of the first copy, which will not match


const deDupeFilter = (array) => {
    return array.filter((e, i) => {
        return array.indexOf(e) === i;
});
}