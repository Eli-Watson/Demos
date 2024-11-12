document.addEventListener('DOMContentLoaded', function() {
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    const alert = document.getElementById('alert')
    const score = document.getElementById('score')
    const finalScore = document.getElementById('final score')
    // let scoreSavedInLocalStorage = localStorage.getItem('savedScore')
    // const savedScoreDiv = document.getElementById('storedScore')
    let scoreNum = 0
    let gravity = 0.9
    let isjumping = false
    let position = 0
    let count = 0
    let isGameOver = false

    function control(e) {
        if (e.type === 'keydown' && e.code === 'Space' || e.type === 'touchstart') {
            if (!isjumping) {
                jump();
            }
        }
    }
    
    document.addEventListener('keydown', control);
    document.addEventListener('touchstart', control);

    function jump(){
        isjumping = true
        let timerid = setInterval(function() {
            // move down
            if (count === 15) {
                clearInterval(timerid)
                let downTimerId = setInterval(function() {
                    if (count === 0) {
                        clearInterval(downTimerId)
                        isjumping = false
                    }
                    position -= 5
                    count --
                     position = position * gravity
                    dino.style.bottom = position + 'px'

                },20)
            }
            
            //move up
            position += 30 
            count ++
            position = position * gravity
            dino.style.bottom = position + 'px'
        } ,20)

    }

    function generateObsticles(){
        if (!isGameOver) {
            let minTime = 1000; // Minimum time for next obstacle (increase for more space)
            let maxTime = 5000; // Maximum time
            let randomTime = Math.random() * (maxTime - minTime) + minTime;
        let obsticlePosition = 1500
        const obsticle = document.createElement('div')
        obsticle.classList.add('obsticle') 
        grid.appendChild(obsticle)
        obsticle.style.left = obsticlePosition + 'px'

        let timerid = setInterval(function(){
            if (obsticlePosition >0 && obsticlePosition < 60 && position < 60) {
                clearInterval(timerid)
                // sets gameover text
                // alert.innerHTML = 'Game Over'
                Menu.showModal()
                finalScore.innerHTML = "Your Score is: " + scoreNum
                isGameOver = true
                //remove all children from grid
                while (grid.firstChild) {
                    grid.removeChild(grid.lastChild)
                }  
                             
            }
            obsticlePosition -=10
            obsticle.style.left = obsticlePosition + 'px'
        }, 30)
         setTimeout(generateObsticles, randomTime)
        }
        
        if (isGameOver === false) {
            scoreNum ++;
            score.innerHTML = scoreNum
        }else {
            score.innerHTML = scoreNum
        }
        
    }
   
    // function to make and increment the score
     function setScore(){
        

        if (isGameOver === false) {
            scoreNum ++;
            score.innerHTML = scoreNum
            // savedScoreDiv.innerHTML = scoreSavedInLocalStorage
        // }else if(score > scoreSavedInLocalStorage){
        //     score.innerHTML = scoreNum
        //     localStorage.setItem('storedScore', score)
        }else{
            score.innerHTML = scoreNum
        }
    }

    generateObsticles();
    setInterval(setScore, 100);
})
