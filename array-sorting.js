/*Code Test: You have an array of objects in JavaScript. Each one contains a name (a string) and age (a number). Write a function which returns the objects ordered by age. Write your code in a secret gist (https://gist.github.com/) and paste the URL below.*/
function initialPersonArray(){
    var nameArray = ["Rashad","Allen","Roselle","Osvaldo","Dakota","Wm","Joycelyn","Rosaria","Elvia","Carly"];
    
    var personArray = [];
    
    for (i = 0; i < nameArray.length; i++) { 
        var age = Math.floor((Math.random() * 80) + 1);
        var person = {name:nameArray[i], age:age};
        personArray.push(person);
    }
    return personArray;
}

function orderPersonArrayByAge(personArray){
    personArray.sort(function (a, b) {
        if (a.age > b.age) {
        return 1;
        }
    });
}

var personArray = initialPersonArray();

orderPersonArrayByAge(personArray);

console.log(personArray);