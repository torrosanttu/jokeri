var arvotut = 0
const jokerit = []
const getRandomIntNumerInRange = (min, max) => {
    return (Math.floor(Math.random() * max)) + min;
}

document.querySelector('button').addEventListener('click',() => {
    for (let i = 7; i>=0;i--) {
        const randomized_number = getRandomIntNumerInRange(1,9)
        document.querySelector("table").innerHTML = randomized_number
    }
    
    arvotut++
    document.querySelector("p").innerHTML = "Valmiita rivejä: " + arvotut
})