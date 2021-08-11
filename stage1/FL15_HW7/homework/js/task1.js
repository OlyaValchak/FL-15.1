alert('whuuuu');
let money = prompt('Initial amount: ');
money=parseInt(money);
let year = prompt('Number of years: ');
year=parseInt(year);
let percent = prompt('Percentage of year: ');
percent=parseInt(percent);
let profit,sum;
sum=money;
let MinSum=1000;
let MinYear=1;
let MaxPercent=100;
const PercentCalculate=100;
const rounding =2;
if(money>=MinSum && year>=MinYear && percent<=MaxPercent && year%1===0){
    for(let i=1; i<=year; i++){
        profit = sum/PercentCalculate*percent;
        sum+=profit;
    }
    alert(
        'Initial amount: '+ money +
        '\nNumber of years: ' +year +
        '\nPercentage of year: ' + percent + '\n' +
        '\nTotal profit: ' + (sum-money).toFixed(rounding) +
        '\nTotal amount: '+ sum.toFixed(rounding)
        );
        
}else{
            alert('Invalid input data');
        }