// replaceWith() Method
function replaceFirstItem(){
 const li = document.querySelector('li:nth-child(1)')
 const content=document.createElement('li')
 content.textContent='Replace FIRST'
 li.replaceWith(content)
console.log();

}

function replaceAllItems(){
const li=document.querySelectorAll('li')
const text=document.createElement('li')
text.textContent='replace ALL'
//using ternary operator
li.forEach((element,index) => index==0 ? 
            element.textContent='replace first' 
           : element.textContent='replace all')




}

replaceFirstItem();
//replaceFirstItem();
//replaceSecondItem();
replaceAllItems();
//replaceChildHeading();


