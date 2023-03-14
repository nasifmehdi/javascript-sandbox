function clock(){
const now= new Date();
const canvas= document.querySelector('#canvas')
const ctx=canvas.getContext('2d')

ctx.save()
ctx.clearRect(0,0,500,500)
ctx.translate(250,250)
ctx.rotate(-Math.PI/2)

//default style
ctx.strokeStyle='#000000'
ctx.fillStyle='#f4f4'
ctx.lineWidth=5
ctx.lineCap='round'

//draw clock face
ctx.save()
ctx.beginPath()
ctx.lineWidth=14
ctx.strokeStyle='#800000'
ctx.arc(0,0,150,0,Math.PI*2,true)
ctx.stroke()
ctx.fill()
ctx.restore()

//draw hour lines
ctx.save()
let i=0
while(i<12){
  ctx.beginPath()
  ctx.rotate(Math.PI/6)
  ctx.moveTo(100,0)
  ctx.lineTo(120,0)
  ctx.stroke()
  i++
}
ctx.restore()
//draw minute lines
ctx.save()
let j=0
ctx.lineWidth=4
while(j<60){
  if(j % 5 !=0){  
    ctx.beginPath()
    ctx.moveTo(130,0)
    ctx.lineTo(120,0)
    ctx.stroke()
    }
    ctx.rotate(Math.PI/30)
    j++
}
ctx.restore()
//draw hour hand
const hr= now.getHours()%12
const min=now.getMinutes()
const sec=now.getSeconds()
console.log(`${hr}:${min}:${sec}`);


ctx.save()
ctx.rotate(
  (Math.PI/6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
)
ctx.strokeStyle='#800000'
ctx.lineWidth= 14;
ctx.beginPath()
ctx.moveTo(-20,0)
ctx.lineTo(80,0)
ctx.stroke()
ctx.restore()

//draw minute hand
ctx.save()
ctx.rotate(
  (Math.PI/30) * min + (Math.PI / 1800) * sec 
)
ctx.strokeStyle='orange'
ctx.lineWidth= 12;
ctx.beginPath()
ctx.moveTo(-24,0)
ctx.lineTo(100,0)
ctx.stroke()
ctx.restore()


//draw second hand


ctx.save()
ctx.rotate(
  sec * Math.PI / 30
)
ctx.strokeStyle='white'
ctx.lineWidth= 2;
ctx.fillStyle='white'
ctx.beginPath()
ctx.moveTo(-21,0)
ctx.lineTo(138,0)
ctx.stroke()
ctx.beginPath()
ctx.arc(0,0,10,0,Math.PI * 2,true)
ctx.fill()
ctx.restore()



ctx.restore()
requestAnimationFrame(clock)
}

function init(){
  
  requestAnimationFrame(clock)
}
init()