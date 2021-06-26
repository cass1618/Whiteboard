let string = "Jasmine Ann Jones";

function toUrl(string) {
    return string.split(" ").join("%20");
}

//RECURSION

//base case: string with no spaces and all %20s
//termination case: input other than a string

//Remove first space it gets to and then remove first space it gets to and then . .

function toUrlR(string, index = 0) {
    if(string[index] != undefined) {
        if(string[index]===" ") {
            //replace the space with the %20 thing here
            return toUrlR(string, index + 1);
        } else {
            return toUrlR(string, index + 1);
        }
    } else {
        return string;
    }
}

console.log(toUrlR(string));