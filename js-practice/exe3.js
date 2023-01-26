var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(arr, value){
    var result = arr.filter(function(fruit){
        if(fruit.name.toLowerCase()===value.toLowerCase()){
            return true;
        }
    })
    return result;
}

console.log(searchByName(fruits, 'apple'));
