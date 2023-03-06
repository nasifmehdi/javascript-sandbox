function removeClearButtn(){

const selectButtn= document.querySelector('.btn-clear').remove()

}

function removeFirstItem(){

const takeItem = document.querySelector('li:nth-child(1)')
takeItem.remove()

}


function removeFirstItem2(){
  const ul = document.querySelector('ul')
  const takeItem = document.querySelector('li:nth-child(1)')
  ul.removeChild(takeItem)
  
}

function removeItem(item){
 const ul = document.querySelector('ul')
 const takeItem = document.querySelector(`li:nth-child(${item})`)
 //const takeItem2 = document.querySelectorAll('li')[item-1]
 ul.removeChild(takeItem)

}
function removeAll(){
 const takeList= document.querySelectorAll('li')
 takeList.forEach(element => element.remove())

}

const removeItem3 = index =>
 document.querySelectorAll('li')[index-1].remove()

 
//removeAll()
//removeFirstItem()
//removeItem(2)
//removeFirstItem2()
//removeClearButtn()
removeItem3(1)