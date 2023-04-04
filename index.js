let cardArray =[
    {
        name:'dhoni',
        img:'images/dhoni.png',
    },
    {
        name:'Viratkholi',
        img:'images/VK.png',
    },
    {
        name:'Hardik',
        img:'images/pandya.jpg',
    },
    {
        name:'Jadeja',
        img:'images/jadeja.png',
    },
    {
        name:'Pant',
        img:'images/pant.png',
    },
    {
        name:'Bumbrah',
        img:'images/bumrah.png',
    },
    {
        name:'dhoni',
        img:'images/dhoni.png',
    },
    {
        name:'Viratkholi',
        img:'images/VK.png',
    },
    {
        name:'Hardik',
        img:'images/pandya.jpg',
    },
    {
        name:'Jadeja',
        img:'images/jadeja.png',
    },
    {
        name:'Pant',
        img:'images/pant.png',
    },
    {
        name:'Bumbrah',
        img:'images/bumrah.png',
    }
]

cardArray.sort(()=>Math.random()-0.5)

const gridDisplay=document.querySelector('#grid') //selecting the div with class grid


//GLOBAL VARIABLE
let cardChoosen=[]
let cardChoosenId=[]
let cardWon=[]
let result=document.querySelector('#result')
let resultCount=0



//CREATING THE BOARD FOR IMAGES
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.setAttribute('class','card')
        card.addEventListener('click',flipCard)
        gridDisplay.append(card)
    }
}
createBoard() //CALLING CREATEBOARD FUNCTION






function checkMatch(){
    const cards=document.querySelectorAll('img')//Select all images
    if(cardChoosen[0]==cardChoosen[1]){
        alert('You Win')
        resultCount+=1
        cards[cardChoosenId[0]].setAttribute('src','images/White.png')
        cards[cardChoosenId[1]].setAttribute('src','images/White.png')
        cards[cardChoosenId[0]].removeEventListener('click',flipCard)
        cards[cardChoosenId[1]].removeEventListener('click',flipCard)
        cardWon.push(cardChoosen)
        result.innerHTML=resultCount
    }
    else{
        cards[cardChoosenId[0]].setAttribute('src','images/blank.png')
        cards[cardChoosenId[1]].setAttribute('src','images/blank.png') 
        alert('Try again')
    }
    if(cardWon.length==cardArray.length/2){
        result.innerHTML='You Won'
        cards[cardChoosen].removeEventListener('click',flipCard)
    }
    cardChoosen=[]
    cardChoosenId=[]
}







function flipCard(){
    const dataId=this.getAttribute('data-id')
    cardChoosen.push(cardArray[dataId].name)
    cardChoosenId.push(dataId)
    this.setAttribute('src',cardArray[dataId].img)
    if(cardChoosen.length==2){
        setTimeout(checkMatch,500)
    }
}