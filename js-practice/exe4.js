var numbers = [1, 2, 3, 4];

function transform(arr, tranFunc) {
    var result = arr.map(tranFunc);
    return result;
}

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);