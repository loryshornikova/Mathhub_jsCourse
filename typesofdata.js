//STRING

//typeof - позволяет узнать тип переменной
// for example: console.log(str1, typeof)

// const str1 ='I\'m OK' // чтобы кавычка правильно прочиталась кодом. Тоже самое можно с двойными кавычками

// const str2 = `I'm ok I say "Hello"` //обратные кавычки как еще один способ решить проблему

// const str3 = `I said ${str1}`

// console.log(str3) //(I said I'm OK). Это называется шаблонной строкой и выполняется с помощью обрытных кавычек

// /n - разрыв строки

// NUMBER

// + - * / **
// ** - возведение в степень
// 80 - "10" = 70
// 80/"10" = 8
// 80*"10" = 800
// НО !!! 80 + "10" = "8010"

// 8*"a" --> NaN (not a number)
// const infinity = 17/0
// number: from -(2**53-1) to (2**53 -1)

// BIGINT

// const big = 4354454646n

// BOOLEAN
// < > <= >= == === <== >== 
// "a" > "AAA" --> true (по UTF-8)

// NULL

// UNDEFINED

// SYMBOL
//const uniq = Symbol('id')

// OBJECT

// const obj ={
//     name: "Sasha",
//     age: 36,
//     isHappy: true
//}

// console.log(obj.name)
// console.log(obj['name'])

// obj.job="Google"

// console.log(obj)

// const array = ["ann", 19, false, "student"]

// console.log(array)

// array[4]="Facebook"

// console.log(array)

// console.log(array[0])


// FUNCTION
//declaration 

function scream () {
    alert ("AAAA")
    return "I'm OK"
}

//expression

const wowScream = function(){
    alert ("WOOOOOW")
}

//arrow

const arrow = () => {
    alert ("arrow in the sky")
}

scream () // вызов функции

wowScream()

arrow ()


function multiply (a,b) {
    const result = a*b          //return a*b
    return result
}

multiply(3,5)


//alert('Hello!')
//confirm('Are you learning JS?')
// prompt("What programming language do you learn?", "I don't know yet")
// confirm("Do you love this progaramming language?")

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// //string.innerHTML ="str"

// const skillText =prompt("What programming language do you learn?", "I don't know yet")
// const isLoveValue=confirm("Do you love this programming language?")

// skill.innerText=skillText
// isLove.innerText=isLoveValue

// const userName = prompt("Who are you?", "anonym")
// if (userName==='admin') {
//     alert ("Hello, boss!")
//   } else if (userName==="anonym" || !userName){
//     alert("I don't know you...")
//   }
// else {
//     alert (`Hi, ${userName}`)
// }
