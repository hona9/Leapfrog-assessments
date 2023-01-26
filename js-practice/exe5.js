var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 4,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}, {
    id: 2,
    name: 'Zeki',
}];

function sortBy(arr, key) {
   var result = arr.sort(function(a,b){
       if(a[key] < b[key]) return -1;
       if(a[key] > b[key]) return 1;
       return 0;
   });
   return result;
}

var sorted = sortBy(arr, 'name');
console.log(sorted);