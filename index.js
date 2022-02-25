// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

// function superbowlWin(arr){

// }
function superbowlWin(arr){
    //Define the function that will be passed into the find method.
    function isWin(element, index, array){
        return(element.result === "W")
    }
    //Store the find array and find method into a variable
    //This returns the full object element;
    const element = arr.find(isWin);
    
    if (typeof element === "object"){
        return element.year;
    }else{
        return undefined;
    }
    // return element.year;
    }

console.log(superbowlWin(record));








