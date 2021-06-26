const string =  "aaabccdddda"
const expectedOutput =  "3ab2c4da"

//iterate through until string[i] !== string[i+1]
//a===a,a===a,a!==b count=3
//concat count + string[i-1] to newString
//

    const compress = (string, newString, count, i) => {
        console.log(string[i] !== undefined);
    
        if(string[i] !== undefined) { //run the loop til the end of the string

            if(string[i] === string[i+1]) { //if letter is the same as the next letter

                count++; //increment count of this letter by one
                return compress(string, newString, count, i+1); //run the function again for the next letter

            } else { //next letter is different than current letter
                if(count>0) {
                    newString = newString.concat((count+1) + string[i]); //add count and current letter 
                } else {
                    newString = newString.concat(string[i]);
                }
    
                return compress(string, newString, 0, i+1);
            }
        } else {  
            console.log("ELSE "+newString)
            return newString;
        }
    }


compress(string, "", 0, 0);