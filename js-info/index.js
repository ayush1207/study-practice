//memoization

let dataSet = {};
const memoResult = (n) => {
    let result = 0;
    if(dataSet[n]) {
        console.log("Using cached result for", n, dataSet);
        result = dataSet[n];
    }else{
        console.log("Calculating result for", n, dataSet);
        for (let i = 0; i < 100; i++) {
            result += n * n * n;
        }
        dataSet[n] = result;
    }
    return result
}

console.time();
console.log(memoResult(3));
console.timeEnd();

console.time();
console.log(memoResult(7));
console.timeEnd();

console.time();
console.log(memoResult(3));
console.timeEnd();


//non-memoization
const nonMemoResult = (data)=>{
    let result = 0;
    for (let i = 0; i < 100; i++) {
        result += data * data * data;
    }
    return result;
}

// console.time();
// // console.log(nonMemoResult(3));
// console.log(nonMemoResult(5));
// console.timeEnd();

// console.time();
// console.log(nonMemoResult(5));
// console.timeEnd();



const newMemo = (args) => {
    
}
