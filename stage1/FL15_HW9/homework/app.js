
function reverseNumber(num) {
    
    num = num + "";
	return num.split("").reverse().join("");
}


function forEach(arr, func) {
for(let el of arr){
    func(el);   
}
}

 
function map(arr, func) {
    let newArray = [];
    forEach(arr, (el)=> {
        newArray.push(func(el));
    });
    return newArray;
}

function filter(arr, func) {
    let output = [];
    forEach(arr, (el)=> {
      if (func(el)){
        output.push(el);
      }
    });
    return output;
  }
  

  const data =[
    {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39, 
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
    },
    {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
    },
    {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
    },
    {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
    }
   ];
function getAdultAppleLovers(data) {
    return data
    .filter(data=>data.age > 18)
    .filter(data=>data.favoriteFruit=='apple')
    .map(data=>data.name);
}

function getKeys(obj) {
    let newArr = [];
    for( const property in obj){
        newArr.push(property);
        
    }return newArr;
}



function getValues(obj) {
    let newArr = [];
    for( const property in obj){
        newArr.push(obj[property]);
        
    }return newArr;
}

let dt = new Date();
showFormattedDate(dt);
function showFormattedDate(dateObj) {
    console.log(`it is ${dateObj.toString()}`);
}
