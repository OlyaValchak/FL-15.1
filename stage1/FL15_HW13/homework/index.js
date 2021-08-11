function getAge(birthday){
    let difference = Date.now() - birthday.getTime();
    let age = new Date(difference); 
  
    return Math.abs(age.getUTCFullYear() - 1970);
}
const birthday22 = new Date(2000, 9, 22);
console.log(getAge(birthday22));

function getWeekDay(date){
    let today;
    if (date === Date.now()){
        const timeElapsed = Date.now();
        today = new Date(timeElapsed)
    } else{
        today = date;
    }
    const numberday = today.getDay();
    if(numberday === 0){
        let day = 'Sunday';
        console.log(day);
    } else if(numberday === 1){
        let day = 'Monday';
        console.log(day);
    }else if(numberday === 2){
        let day = 'Tuesday';
        console.log(day);
    }else if(numberday === 3){
        let day = 'Wensday';
        console.log(day);
    }else if(numberday === 4){
        let day = 'Thursday';
        console.log(day);
    }else if(numberday === 5){
        let day = 'Friday';
        console.log(day);
    }else if(numberday === 6){
        let day = 'Saturday';
        console.log(day);
    }
}
getWeekDay(new Date(2020, 9, 22));
getWeekDay(Date.now());

function getAmountDaysToNewYear(){
    let today=new Date();
    let cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()=== 11 && today.getDate()>25){
    cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    let one_day=1000*60*60*24;
    console.log(Math.ceil((cmas.getTime()-today.getTime())/one_day));
}
getAmountDaysToNewYear();

function getProgrammersDay(year){
    function leapYear(){
        return (year & 3) === 0 && (year % 25 !== 0 || (year & 15) === 0);
    }
    if(leapYear()){
        console.log('12 Sep, 2020 (Saturday)');
    } else{
        console.log('13 Sep, 2020 (Friday)');
    }
}
getProgrammersDay(2021);

function howFarIs(specifiedWeekday ){
    let day = new Date();
    let numberday = day.getDay();
    if(numberday === 0){
        let day = 'Sunday';
        console.log(day);
    } else if(numberday === 1){
        let day = 'Monday';
        console.log(day);
    }else if(numberday === 2){
        let day = 'Tuesday';
        console.log(day);
    }else if(numberday === 3){
        let day = 'Wednesday';
        console.log(day);
    }else if(numberday === 4){
        let day = 'Thursday';
        console.log(day);
    }else if(numberday === 5){
        let day = 'Friday';
        console.log(day);
    }else if(numberday === 6){
        let day = 'Saturday';
        console.log(day);
    } 
    let number = numberday - parseInt(specifiedWeekday);
    if (specifiedWeekday === day){
        console.log( `Hey, today is ${ specifiedWeekday } =)`);
    } else{
        console.log(`It's ${number} day(s) left till ${ specifiedWeekday }`);
    }
}
howFarIs('friday'); 

function isValidIdentifier(variable){
let reg = /^\D+[a-zA-Z$&_]/mg.test(variable);
return reg;
}
console.log(isValidIdentifier('myVar!'));

function capitalize(testStr){
    var str = testStr.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    return str;
}
const testStr = "My name is John Smith. I am 27.";
console.log( capitalize(testStr));

function getHexadecimalColors(testString){
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})?;$/;
    let words = testString.split(" ");
    console.log(words.length);
     let colors = new Array();
    for(let i=0;i<words.length;i++){
        if(words[i].test(regex)){
            console.log("aaa");
            colors.push(words[i]);
        } else{
            return false;
        }
        
    }console.log(colors);
}
const testString = 'color: #3f3; background-color: #AA00ef; and: #abcd';
getHexadecimalColors(testString); // ["#3f3", "#AA00ef"]
//getHexadecimalColors('red and #0000'); // [];
function isValidPassword(password){
    const reg = /(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"/;
    if(password.test(reg)){
        return true;
    } else{
        return false;
    }
}
function addThousandsSeparators(number){
    for(let i=number.length;i>=0;i-3){
        number[i].push(",");
    }
    return number;
}