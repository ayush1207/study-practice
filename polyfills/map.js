//map

let arr = [1, 2, 3, 4, 5];
const data = arr.map((item,index, array) => {
    console.log(item, index, array);
    return item * 2;
});
console.log(data);


Array.prototype.myMap = function(cb){
    const result = [];
    for( let i=0;i< this.length;i++){
        result[i] = cb(this[i], i, this);
    }
    return result;;
}
const protoData = arr.myMap((item,index, array) => {
    console.log(item, index, array);
    return item * 2;
});
console.log(protoData);