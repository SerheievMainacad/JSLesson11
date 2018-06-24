/*//adding Elements in DOM structure
var list = document.getElementById('list');
console.log(list);
//create new element
var childLast = document.createElement('li'); //tag name;
//innerHTML = add content for new element
childLast.innerHTML = 'newLast';
//add in the end
list.appendChild(childLast);

//insert before
var childFirst = document.createElement('li'); //tag name;
//innerHTML = add content for new element
childFirst.innerHTML = 'newFirst';
//add at the beginning

list.insertBefore(childFirst, list.firstChild);
*/
//BOM elements and doc location;
// console.log(navigator);
/*var w;
function openWindow() {
	w = window.open('page.html', 'some', 'width=400, height=400');
}
function closeWindow() {
	w.close();
}
setTimeout(openWindow, 1000);
setTimeout(closeWindow, 2000);*/

/*console.log(document.location);
//main location
console.log(document.location.host);
console.log(document.location.protocol);
console.log(document.location.search);
console.log(document.location.port);
console.log(document.location.hash);
function switchLoc() {
	document.location = 'https://google.com';
}
setTimeout(switchLoc, 2000);
*/

// working with attributes

/*var block = document.getElementById('block');
console.log(block.getAttribute('id'));
block.firstElementChild.setAttribute('href', 'http://img.com');
block.children[1].removeAttribute('href');*/

//class
/*var block = document.getElementById('block');
block.className = 'newClass class2'; // <div id="block" class="newClass class2">
block.classList.add('toUpper');
block.classList.remove('class2');
console.log(block.classList); //class = [0: newClass, 1:class2]
*/

//style

var block = document.getElementById('block');
// margin-top == marginTop; borderLeftWidth;
// block.style.backgroundColor = '';
document.body.style.cssText = 'margin: 0; padding: 0';
block.style.cssText = 'width:100%; height: 100vh; line-height: 100vh;background-color: lightgreen';
console.log(block.style.backgroundColor);
console.log(block.style.fontSize);

//getComputedStyle
console.log(getComputedStyle(block).width);
console.log(getComputedStyle(block).height);	
