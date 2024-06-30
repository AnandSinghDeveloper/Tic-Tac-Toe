const choices = document.querySelectorAll('.choice');
        const userChoiceDisplay = document.getElementById('user-choice');
        const computerChoiceDisplay = document.getElementById('computer-choice');
        const resultDisplay = document.getElementById('game-result');
        const choicesArray = ['stone', 'paper', 'scissors'];

        choices.forEach(choice => choice.addEventListener('click', (e) => {
            const userChoice = e.target.id;
            userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
            const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
            computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
            const result = getResult(userChoice, computerChoice);
            resultDisplay.textContent = `Result: ${result}`;
        }));

        function getResult(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                return "It's a draw!";
            }
            if ((userChoice === 'stone' && computerChoice === 'scissors') || 
                (userChoice === 'scissors' && computerChoice === 'paper') || 
                (userChoice === 'paper' && computerChoice === 'stone')) {
                return 'You win!';
            }
            return 'You lose!';
        }