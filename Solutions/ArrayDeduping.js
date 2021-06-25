let inAr = [7, 9, "hi", 12, "hi", 7, 53]
Output: [7, 9, "hi", 12, 53]

function deDupe(array) {
    let noDupes = [];
    array.forEach(function (element) {
        if(!(noDupes.includes(element))) {
        noDupes.push(element);
        }
    });
    return noDupes;
}


const deDupeRecursive = (array) => {

}