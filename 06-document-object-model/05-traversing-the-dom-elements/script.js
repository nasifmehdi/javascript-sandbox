let output;
output = document.querySelector('.parent')

//children is property not function
console.log(output.children);
console.log(output.children[0]);
console.log(output.children[0].innerText);
console.log(output.children[0].nodeName);
output.children[0].style.color='red'
output.children[1].innerText='c h i l d t w o'
output.firstElementChild.nextElementSibling.innerText='child two'

let child2=document.querySelector('.child:nth-child(2)')
child2.nextElementSibling.style.color='blue'
child2.previousElementSibling.style.color='blue'

console.log();
