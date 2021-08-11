let eventName = prompt('Write event name', 'meeting');
eventName.onclick = myFunc();
function myFunc(){
    document.getElementById('form').style.display='block';
}



function validateForm(form) {
    
    let re = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
    if(document.getElementById('name').value === '' ||
    document.getElementById('date').value === '' ||
    document.getElementById('place').value === '' ){
        alert('Input all data');
        return false;
     }else if (!form.date.value.match(re)) {
        alert('Enter time in format hh:mm');
        return false;
    } else{
        alert(form.name.value + ' has a meeting today at '+ form.date.value +' somewhere in '+ form.place.value);
    }
    return false;
}


function Convert(){
    let euro = prompt('Input amount of euro');
    if (parseInt(euro) <=0 ){
        alert('Value should be positive');
        euro = prompt('Input amount of euro');
    }
     let dollar = prompt('Input amount of dollar');
     if (parseInt(dollar) <=0 ){
        alert('Value should be positive');
        dollar = prompt('Input amount of dollar');
    }

    let a= 33.06;
    let b=27.69;
    let c=2;
      alert(euro+' euros are equal '+(parseInt(euro)*a).toFixed(c) +' hrns, '
      +dollar+' dollars are equal '+ (parseInt(dollar)*b).toFixed(c)+ ' hrns');
}
