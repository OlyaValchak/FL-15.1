

function visitLink(path) {
	let count = localStorage.getItem(path);
	count++;
	return localStorage.setItem(path, count);
  }
	
	
  
function viewResults() {
	document.getElementById('page1').innerHTML = `You visited Page1 `+ localStorage.getItem('Page1')+' times';
	document.getElementById('page2').innerHTML = `You visited Page2 `+ localStorage.getItem('Page2')+' times';
	document.getElementById('page3').innerHTML = `You visited Page3 `+ localStorage.getItem('Page3')+' times';
	localStorage.clear();
}
