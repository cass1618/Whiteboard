const string =  "aaabcdda"
const expectedOutput =  "3ab2c4da"

//iterate through until string[i] !== string[i+1]
//a===a,a===a,a!==b count=3
//concat count + string[i-1] to newString
//

const compress = (string, newString, count, i) => {
    console.log(string, newString, count, i);
    if(string[i] !== undefined) {
        console.log("IF! " +i+" "+string[i]+ " i+1: "+string[i+1]);
        if(string[i] === string[i+1]) {
            console.log("IF2! "+i+" "+string[i]);
            count++;
            return compress(string, newString, count, i+1);
        } else {

            newString = newString.concat(count + string[i-1]);
            console.log("ELSE string[i-1]: "+string[i-1] +" newString: "+newString)
            return compress(string, newString, 0, i+1);
        }
    }   
    return newString;
}

// const compress = (string, count = 0, i = 0) => {
    
//     if(i<string.length) {
//     if(string[i] === string[i+1]) {
//         count++;
//         console.log(string[i], count);
//         return compress(string, count, i+1);
//     } else {
//         console.log(count,string[i-1])
//         return count + string[i-1] + compress(string, 0,i+1);
//     }
// }



// }


compress(string, "", 0, 0);