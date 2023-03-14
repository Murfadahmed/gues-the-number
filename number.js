let btnAgain = document.querySelector('.again');
let questionmarkh3 = document.querySelector('.questionmarkh3');
let userInput = document.querySelector('.number');
let btnCheck = document.querySelector('.checkBtn');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');



var band = score.textContent
btnCheck.addEventListener('click', () => {

    if (score.textContent > 0 && userInput.value > 0) {

        var rNumber = Math.round(Math.random() * 20);

        questionmarkh3.textContent = rNumber;

        if (userInput.value == rNumber) {

            alert(" you win!");

            score.textContent = +score.textContent + 1

            if (highScore.textContent < score.textContent) {
                highScore.textContent = score.textContent
            }
            
        }
        else {
            // alert(`your ${band -1} try is waste!`)
            // alert("you lose")
            score.textContent = +score.textContent - 1
        }
    }
    else {
        alert("you can,t play your score/input may be zero")

    }

})

btnAgain.addEventListener('click',() =>{
    location.reload()
})




