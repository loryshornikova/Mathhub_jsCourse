const title = document.getElementById("title")
const userTask = document.getElementById("userTask")
const userAnswer = document.getElementById("userAnswer")
const btnGame = document.getElementById('gameButton')

btnGame.focus()
userAnswer.placeholder="Enter your answer"
    
userAnswer.addEventListener("keydown", function(e){
    if (e.code ==="Enter") {
        btnGame.click();}
})

const getRandomNumInRange = (max, min) => {
    const randomNum = (Math.random()*(max-min)+min).toFixed(0)
    return randomNum
}

const gameState = {
taskInProgress: false,
rightAnswer: null
}

 
btnGame.onclick =()=> {
                 
    if (!gameState.taskInProgress) {       
        title.innerText="Game has started"   
        userAnswer.value=null
       
        //generate task and answer
        const task=getTask()
        //show tast to the user
        
        userTask.innerText=task        
        userAnswer.hidden = false
        userAnswer.focus()
        //change button and game state
       
        btnGame.innerText="Check"
        toggleGameState()
      
    } else {          
    // compare user answer with the right answer
    const isRight =gameState.rightAnswer==userAnswer.value
    //show result    
    userTask.innerText=userTask.innerText+ "=" + gameState.rightAnswer
    //show a message to user
    title.innerText=(isRight) ? "That's right! Well done!": "Ты - дурак!!! Иди учи математику!"
    //change button and state
    btnGame.innerText="Play one more time"
    toggleGameState() 
}
}

const getTask = () => {  

    const symbol =(Math.random()>0.5) ? "+": "-"

    const task = `${getRandomNumInRange(0,1000)} ${symbol} ${getRandomNumInRange(0,1000)}`

    gameState.rightAnswer=eval(task)

    return task

}


const toggleGameState=() =>{
gameState.taskInProgress=!gameState.taskInProgress
}


const chosenEl=document.querySelectorAll(".chosen_block_container > div")
const counterEl=document.querySelector(".chosen_block  span")

const countElState = {
    countElements: 0,
}

const changeCount =(value)=> {
    countElState.countElements+=value
    counterEl.innerText=countElState.countElements
}

const eventFunction = (e) => {
    if (e.target.className===""){
        e.target.className="chosen_element"
        changeCount(1)      
     } else {
         e.target.className=""
         changeCount(-1)
     }    
}
for (let i=0; i<chosenEl.length; i++) {    
    chosenEl[i].addEventListener("click", eventFunction) }


    