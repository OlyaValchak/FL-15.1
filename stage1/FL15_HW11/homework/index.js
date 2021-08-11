function isEquals(a,b){
console.log(a===b);
}

function isBigger(a,b){
    console.log(a>b);
}

function storeNames(){
   let arr = new Array();
   for (let i = 0; i < arguments.length; i++){
       arr.push(arguments[i]);
   }
   console.log(arr);
}

function getDifference(a,b){
    if(a>=b){
        console.log(a-b);
    } else{
        console.log(b-a);
    }
}

function negativeCount(arr){
    let a=0;
    for(let i=0;i<arr.length;i++) {
        if (arr[i]<0){
            a++;
        } 
    }
    console.log(a);
    
}

function letterCount(str, letter){
    let letter_Count = 0;
 for (let el = 0; el < str.length; el++){
    if (str.charAt(el) === letter) {
      letter_Count += 1;
      }
  }
  console.log(letter_Count);
}


let a=0,b=1,c=3;
function countPoints(teamResults){
    let secondTeamScore = 0;
    for(let i=0; i<teamResults.length;i++){
        let firstTeamScore = teamResults[i].split(':');
        if(Number.parseInt(firstTeamScore[0]) < Number.parseInt(firstTeamScore[1])){
            secondTeamScore += a;
        } else if(Number.parseInt(firstTeamScore[0]) > Number.parseInt(firstTeamScore[1])){
            secondTeamScore += c;
        }else if(Number.parseInt(firstTeamScore[0]) === Number.parseInt(firstTeamScore[1])){
            secondTeamScore += b;
        }
        return secondTeamScore;
    }
    
}
