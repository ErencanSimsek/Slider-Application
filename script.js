const datas=[
    {'id':1,'name':'BMW','img':'/img/bmw.jpg'},
    {'id':2,'name':'Honda','img':'/img/honda.jpg'},
    {'id':3,'name':'Mazda','img':'/img/mazda.jpg'},
    {'id':4,'name':'Skoda','img':'/img/skoda.jpg'},
    {'id':5,'name':'Volvo','img':'/img/volvo.jpg'},
]

const img = document.querySelector('.img')
const left=document.querySelector('.left')
const right=document.querySelector('.right')

let interval

let countNumber = 0;
init()
img.src=datas[countNumber].img

left.addEventListener('click',function(event){
    countNumber-=1
    if(countNumber<0){
        countNumber=datas.length-1
    }
    img.src=datas[countNumber].img
    clearInterval(interval)
    init()
    event.preventDefault()
})
right.addEventListener('click',function(event){
    countNumber+=1
    if(countNumber >= datas.length){
        countNumber=0
    }
    img.src=datas[countNumber].img
    clearInterval(interval)
    init()
    event.preventDefault()
})

function init() {
    interval=setInterval(function() {
        countNumber+=1
        if(countNumber >= datas.length){
            countNumber=0
        }
        img.src=datas[countNumber].img
    },6000)
}

