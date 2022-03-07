let jonSnowHealth = 100

function isJonAlive() {
    if(jonSnowHealth > 0) {
        console.log(`Jon is alive, his current health value is ${jonSnowHealth}`)
    } else {
        console.log("RIP Jon Snow")
    }
}

const surpriseAttack = function(attack) {
jonSnowHealth -= attack 
isJonAlive()
}

const greeting = (person1, person2) => {
console.log(`${person1} and ${person2} say hello to each other`)
}
greeting('Jon Snow', 'Ned Stark')


Dothracki attack
surpriseAttack(20)
lannister guard
surpriseAttack(12)
bandits
surpriseAttack(6)
death comes
surpriseAttack(88)

let jonSnowHealthStr = String(jonSnowHealth);
let jonSnowHealthStr2 = jonSnowHealth + ''

console.log({ jonSnowHealth, jonSnowHealthStr, jonSnowHealthStr2 })

const jonSnowHealthBool = Boolean(jonSnowHealth)

console.log({ jonSnowHealthBool })

const winner = "Jamie is the winner!"

const newWinner = winner.replace("Jamie", "Jon")

if(newWinner.includes("Jon")) {
    console.log("replaced successfully")
}

console.log(newWinner)

const newWinnerLower = newWinner.toLowerCase()
console.log(newWinnerLower)
const newWinnerSplit = newWinnerLower.split(' ')
console.log(newWinnerSplit)
const newWinnerKebab = newWinnerSplit.join('-')
console.log(newWinnerKebab)

const rollDice = () => {
    const possibleRolls = [1, 2, 3, 4, 5, 6]
    const randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

const diceMultiplier = () => {
    const firstRoll = rollDice()
    const secondRoll = rollDice()
    return firstRoll * secondRoll
}

console.log(diceMultiplier())

console.log(rollDice())