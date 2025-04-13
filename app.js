        let gameSeq = [];
        let userSeq = [];
        const btns = ["yellow", "red", "purple", "green"];
    
        let started = false;
        let level = 0;
        let h2 = document.getElementById("message");
        let startButton = document.getElementById("start");
        let restartButton = document.getElementById("restart");
    
        document.addEventListener("keydown", function () {
            if (!started) {
                console.log("Game is started");
                started = true;
                levelUp();
            }
        });

        startButton.addEventListener("click", function () {
            if (!started) {
                console.log("Game is started");
                started = true;
                levelUp();
            }
        });

        restartButton.addEventListener("click", function () {
            gameSeq = [];
            userSeq = [];
            level = 0;
            started = false;
            h2.innerText = 'Press any key to start';
        });
    
        function gameFlash(btn) {
            btn.classList.add("flash");
            setTimeout(function () {
                btn.classList.remove("flash");
            }, 250);
        }
    
        function userFlash(btn) {
            btn.classList.add("userflash");
            setTimeout(function () {
                btn.classList.remove("userflash");
            }, 250);
        }
    
        function levelUp() {
            level++;
            h2.innerText = `Level ${level}`;
            userSeq = []; // Reset user sequence
            // Random btn choose
            let randIdx = Math.floor(Math.random() * 4);
            let randColor = btns[randIdx];
            let randBtn = document.querySelector(`.${randColor}`);
            gameSeq.push(randColor);
            console.log(gameSeq);
            gameFlash(randBtn);
        }
    
        function checkAns() {
            let idx = userSeq.length - 1;
    
            if (userSeq[idx] !== gameSeq[idx]) {
                console.log("Game Over!");
                h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
                gameSeq = [];
                userSeq = [];
                level = 0;
                started = false;
            } else if (userSeq.length === gameSeq.length) {
                setTimeout(levelUp, 1000); // Move to the next level after 1 second
            }
        }
    
        function btnPress() {
            let btn = this;
            userFlash(btn);
    
            let userColor = btn.getAttribute("id");
            userSeq.push(userColor);
            checkAns();
        }
    
        let allBtns = document.querySelectorAll(".btn");
        for (let btn of allBtns) {
            btn.addEventListener("click", btnPress);
        }
